import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUser, EditUser } from './user.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

 @Injectable()
export class UserService  {
    constructor (
        private readonly userRepository: UserRepository
    ){}

    async findUser(){
        return await this.userRepository.find()
    }


    async findUserById(id: number){
        return await this.userRepository.find({id})
    }


    async createUser(UserDTO: CreateUser){
        const {email, senha, nome, cpf} = UserDTO
        if (await this.userRepository.findOne({email}))
            throw new ConflictException('E-mail já cadastrado')
        const user = new User()
        user.nome = nome
        user.email = email
        user.cpf = cpf
        const salt = await bcrypt.genSalt()

        user.salt = salt

        user.senha = await bcrypt.hash(senha, salt)

        try {
            await user.save()
        }catch (error){
            throw new InternalServerErrorException()
        }
    }
 
    async editUser(id: number, user: EditUser){

        if (await this.userRepository.findOne({email: user.email}))
            throw new ConflictException('E-mail já cadastrado')
        var userFind = new User()
        userFind = await this.userRepository.findOne({id})
        userFind.email = user.email
        userFind.senha = await bcrypt.hash(user.senha, userFind.salt)
        
        try {
            await userFind.save()
        }catch (error){
            throw new InternalServerErrorException()
        }
    }


    async deleteUser(id: number){
        try {
            await this.userRepository.delete(id)
        }catch (error){
            throw new InternalServerErrorException()
        }
    }


}
