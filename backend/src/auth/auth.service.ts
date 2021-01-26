import { Injectable } from '@nestjs/common';
import { User } from 'src/user/user.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
@Injectable()
export class AuthService extends Repository<User> {
    async singUp(){
        
    }

    async singIn(){
        
    }
    
}
