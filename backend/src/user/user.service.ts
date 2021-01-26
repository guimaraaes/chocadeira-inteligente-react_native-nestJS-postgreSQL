import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { EntityRepository, Repository } from 'typeorm';
import { CreateUser } from './user.dto';
import { User } from './user.entity';

@Injectable()
@EntityRepository(User)
export class UserService extends Repository<User> {

    findUser(){
        return 1
    }


    findUserById(){
        return 1
    }


    async createUser(UserDTO: CreateUser){
        const {email, senha, nome, cpf} = UserDTO
        if (this.findOne({email}))
            throw new ConflictException('E-mail já cadastrado')
        const user = new User()
        user.nome = nome
        user.email = email
        user.cpf = cpf

        const salt = await bcrypt.genSalt()


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
