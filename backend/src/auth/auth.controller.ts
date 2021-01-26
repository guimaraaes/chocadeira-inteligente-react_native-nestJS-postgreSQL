import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthLogIn } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ){}

    @Post()
    logIn(@Body(ValidationPipe) credential: AuthLogIn){
        
    }
}
