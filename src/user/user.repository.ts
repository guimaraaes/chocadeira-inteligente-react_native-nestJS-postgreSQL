import { AuthLogIn } from 'src/auth/auth.dto';
import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {


    async validateUserPassword(credential: AuthLogIn){
        const{email, senha} = credential
        const user = await this.findOne({email})
        if(user && await user.validatePassword(senha)){
            return user.email
        }else {
            return null
        }
        
    }
}