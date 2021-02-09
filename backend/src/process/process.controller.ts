import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/user/user.entity';
import { ProcessParam } from './process.dto';
import { ProcessService } from './process.service';
 
@ApiTags('process')
@Controller('process')
@ApiBearerAuth()
@UseGuards(AuthGuard())
export class ProcessController {
    constructor (
        private readonly processService: ProcessService
    ){}

    @Get()
    @ApiOperation({summary: 'get all process'})
    getProcess(@GetUser() user: User){
        return this.processService.findProcess(user.id)
    }

    @Get(':id')
    @ApiOperation({summary: 'get process by id'})
    getProcessById(@Param('id') id: number){
        return this.processService.findProcessById(id)
    }

    @Post()
    @ApiOperation({summary: 'post process by user auth id'})
    postProcess(@GetUser() user : User,
                @Body() process: ProcessParam){
        return this.processService.createProcess(user.id, process)
    }

    @Post('history')
    @ApiOperation({summary: 'post history by user auth id'})
    postHistory(@GetUser() user : User,
                @Body() history: ProcessParam){
        return this.processService.createHistory(user.id, history)
    }

    @Get('history/:id_process')
    @ApiOperation({summary: 'gwt history by process id'})
    getHistory(@GetUser() user : User,
                @Param('id_process') id_process: number){
        return this.processService.getHistory(id_process)
    }

    @Put(':id')
    @ApiOperation({summary: 'put process by id'})
    putProcess(@Param('id') id: number,
                @Body() process: ProcessParam){
        return this.processService.editProcess(id, process)
    }

    @Put('/finish/:id')
    @ApiOperation({summary: 'put process finish by id'})
    putProcessFinish(@Param('id') id: number){
        return this.processService.finishProcess(id)
    }
    
    @Delete(':id')
    @ApiOperation({summary: 'delete process by id'})
    deleteProcess(@Param('id') id: number){
        return this.processService.deleteProcess(id)
    }
}
