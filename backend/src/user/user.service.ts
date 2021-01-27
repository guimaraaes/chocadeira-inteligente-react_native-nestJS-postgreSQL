import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUser } from './user.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

 @Injectable()
export class UserService  {
    constructor (
        private readonly userRepository: UserRepository
    ){}

    async findUser(){
        return await this.userRepository.findOne()
    }


    findUserById(){
        return 1
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
 

 

    editUser(){
        return 1
    }


    deleteUser(){
        return 1
    }


}
