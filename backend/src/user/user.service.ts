import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateUser } from './user.dto';
import { User } from './user.entity';

@EntityRepository(User)
@Injectable()
export class UserService extends Repository<User> {


    findUser(){
        return 1
    }


    findUserById(){
        return 1
    }


    createUser(UserDTO: CreateUser){
      
    }

 

    editUser(){
        return 1
    }


    deleteUser(){
        return 1
    }


}
