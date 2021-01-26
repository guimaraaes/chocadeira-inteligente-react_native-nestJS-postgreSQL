import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateHistory, CreateProcess, EditProcess } from './process.dto';
import { ProcessService } from './process.service';

@ApiTags('process')
@Controller('process')
export class ProcessController {
    constructor (
        private readonly processService: ProcessService
    ){}

    @Get()
    @ApiOperation({summary: 'get all process'})
    getProcess(){
        return this.processService.findProcess()
    }

    @Get(':id')
    @ApiOperation({summary: 'get process by id'})
    getProcessById(@Param('id') id: number){
        return this.processService.findProcessById()
    }

    @Post()
    @ApiOperation({summary: 'post process'})
    postProcess(@Param('id_user') id_user: number,
                @Body() process: CreateProcess){
        return this.processService.createProcess(id_user, process)
    }

    @Post('history')
    @ApiOperation({summary: 'post history by process id'})
    postHistory(@Param('id') id: number, 
                @Body() history: CreateHistory){
        return this.processService.createHistory()
    }

    @Put()
    @ApiOperation({summary: 'put process by id'})
    putProcess(@Param('id') id: number,
                @Body() process: EditProcess){
        return this.processService.editProcess()
    }
    
    @Delete()
    @ApiOperation({summary: 'delete process by id'})
    deleteProcess(@Param('id') id: number){
        return this.processService.deleteProcess()
    }
}
