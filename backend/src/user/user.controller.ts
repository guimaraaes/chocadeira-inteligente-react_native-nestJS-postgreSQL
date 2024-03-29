import { Body, Controller, Delete, Get, Param, Post, Put, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetUser } from 'src/auth/get-user.decorator';
import { CreateUser, EditUser } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
@ApiBearerAuth()
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}
    @UseGuards(AuthGuard())
    @Get()
    @ApiOperation({summary: 'get User'})
    getUser(@GetUser() user: User){
        return user
        return this.userService.findUser()
    }
    
    @UseGuards(AuthGuard())
    @Get(':id')
    @ApiOperation({summary: 'get User by id'})
    getUserById(@Param('id') id: number){
        return this.userService.findUserById(id)
    }

    @Post()
    @ApiOperation({summary: 'post User'})
    postUser( @Body() User: CreateUser){
         return this.userService.createUser(User)
    }

    @UseGuards(AuthGuard())
    @Put(':id')
    @ApiOperation({summary: 'put User by id'})
    putUser(@GetUser() user: User, 
            @Param('id') id: number,
            @Body() User: EditUser){
        if (user.id != id)
            throw new UnauthorizedException('Usuário sem permissão')
        return this.userService.editUser(id, User)
    }
    
    @UseGuards(AuthGuard())
    @Delete(':id')
    @ApiOperation({summary: 'delete User by id'})
    deleteUser(@Param('id') id: number){
        return this.userService.deleteUser(id)
    }

}
