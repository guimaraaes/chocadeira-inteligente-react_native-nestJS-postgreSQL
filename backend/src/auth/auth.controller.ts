import { Body, Controller, Get, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from 'src/user/user.entity';
import { AuthLogIn } from './auth.dto';
import { AuthService } from './auth.service';
import { GetUser } from './get-user.decorator';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ){}

    @Post('/singin')
    logIn(@Body(ValidationPipe) credential: AuthLogIn){
        return this.authService.singIn(credential)
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard())
    @Get('/authUser')
    getAuthUser(@GetUser()user: User){
        return user

    }
}
