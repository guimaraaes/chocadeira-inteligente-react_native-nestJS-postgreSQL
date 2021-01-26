import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUser, EditUser } from './user.dto';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}

    @Get()
    @ApiOperation({summary: 'get all User'})
    getUser(){
        return this.userService.findUser()
    }

    @Get(':id')
    @ApiOperation({summary: 'get User by id'})
    getUserById(@Param('id') id: number){
        return this.userService.findUserById()
    }

    @Post()
    @ApiOperation({summary: 'post User'})
    postUser( @Body() User: CreateUser){
         return this.userService.createUser( User)
    }


    @Put()
    @ApiOperation({summary: 'put User by id'})
    putSelfUser( @Body() User: EditUser){
        const id = 1
        return this.userService.editUser()
    }

    @Put()
    @ApiOperation({summary: 'put User by id'})
    putUser(@Param('id') id: number,
                @Body() User: EditUser){
        return this.userService.editUser()
    }
    
    @Delete()
    @ApiOperation({summary: 'delete User by id'})
    deleteUser(@Param('id') id: number){
        return this.userService.deleteUser()
    }

}
