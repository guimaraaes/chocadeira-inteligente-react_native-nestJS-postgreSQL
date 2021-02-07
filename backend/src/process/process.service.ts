import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import * as moment from 'moment';
import { ProcessParam } from './process.dto';
import { History, Process } from './process.entity';
import { ProcessRepository } from './process.repository';
 @Injectable()
export class ProcessService  {
    constructor(
        private readonly processRepository: ProcessRepository
    ){}

    async findProcess(id_user: number){
        return await this.processRepository.createQueryBuilder('processes').where({id_user: id_user}).orderBy('data_fim', 'ASC').getMany()
        return await  this.processRepository.find({id_user: id_user})
       
    }

    async findProcessById(id: number){
        try {
            return await this.processRepository.findOne({id})
        } catch (error){
            throw new NotFoundException('Processo não encontrado')
        }
    }


    async createProcess(id_user: number, processDTO: ProcessParam){
        if (await this.processRepository.findOne({data_fim: new Date(null)}))
            throw new BadRequestException('Existe um processo em andamento')
        const {temperatura, umidade, viragem} = processDTO;
        const virag = new Date(viragem).getHours()*60 + new Date(viragem).getMinutes();

        const process = new Process()
        process.id_user = id_user;
        process.data_inicio =  new Date(String(moment()));
        process.data_fim = new Date(null)
        process.temperatura = temperatura;
        process.umidade = umidade;
        process.viragem = virag;

        process.temperatura_med = temperatura;
        process.umidade_med = umidade;
        process.viragem_med = virag;
        
        try {
            await process.save()
        }catch (error){
            throw new InternalServerErrorException()
        }
    }
    
    async editProcess(id: number, processDTO: ProcessParam){
        const {temperatura, umidade, viragem} = processDTO;
        const virag = new Date(viragem).getHours()*60 + new Date(viragem).getMinutes();

        var process = new Process()
        try {
            process = await this.processRepository.findOne({id})
        } catch (error){
            throw new NotFoundException('Processo não encontrado')
        }

        process.temperatura_med = (process.temperatura + temperatura)/2;
        process.umidade_med = (process.umidade +  umidade)/2;
        process.viragem_med = Math.round ((process.temperatura + virag)/2);
        
        process.temperatura = temperatura;
        process.umidade = umidade;
        process.viragem = virag;
        
 
        try {
            await process.save()
        } catch (error){
            throw new InternalServerErrorException()
        }
    }

    async finishProcess(id: number){

        try {
            var process = await this.processRepository.findOne({id})
        } catch (error){
            throw new NotFoundException('Processo não encontrado')
        }
        process.data_fim = new Date(String(moment()))

        try {
            await process.save()
        } catch (error){
            throw new InternalServerErrorException()
        }
    }


    async deleteProcess(id: number){

        try {
            await this.processRepository.findOne({id})
        } catch (error){
            throw new NotFoundException('Processo não encontrado')
        }
        
        try {
            await this.processRepository.delete({id})
        } catch (error){
            throw new InternalServerErrorException()
        } 
    }

    async createHistory(id_user: number, historyDTO: ProcessParam){
        if (!await this.processRepository.findOne({data_fim: new Date(null), id_user: id_user}))
            throw new BadRequestException('Nenhum processo em andamento')
        var history = new History()
        history.data = new Date(String(moment()))
        return 1
    }

}
