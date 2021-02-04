import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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
        try {
           return await this.userRepository.find()
        } catch (error){
            throw new NotFoundException('Usuário não encontrado')
        }
    }


    async findUserById(id: number){
        try {
            return await this.userRepository.find({id})
        } catch (error){
            throw new NotFoundException('Usuário não encontrado')
        }
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
        try {
            await this.userRepository.find({id})
        } catch (error){
            throw new NotFoundException('Usuário não encontrado')
        }

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
            await this.userRepository.find({id})
        } catch (error){
            throw new NotFoundException('Usuário não encontrado')
        }

        try {
            await this.userRepository.delete(id)
        }catch (error){
            throw new InternalServerErrorException()
        }
    }

}
