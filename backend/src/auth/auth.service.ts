import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from 'src/user/user.repository';
import { AuthLogIn } from './auth.dto';
import { JwtPayload } from './jwt-payload.interface';

 @Injectable()
export class AuthService   {

    constructor(
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService
    ){}
    async singUp(){
        
    }

    async singIn(credentials: AuthLogIn){
        const email = await this.userRepository.validateUserPassword(credentials)
        if (!email)
            throw new UnauthorizedException('Usuário não autorizado')
        const payload:JwtPayload = {email}
        const acessToken = await this.jwtService.sign(payload)

        return {acessToken}
    }
    
}
