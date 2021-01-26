import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateProcess } from './process.dto';
import { Process } from './process.entity';

@EntityRepository(Process)
@Injectable()
export class ProcessService extends Repository<Process> {


    findProcess(){
        return 1
    }


    findProcessById(){
        return 1
    }


    createProcess(id_user: number, processDTO: CreateProcess){
        const {data_inicio, temperatura, umidade, viragem} = processDTO;
        const process = new Process()
        
        process.id_user = id_user;
        process.data_inicio = data_inicio;
        process.temperatura = temperatura;
        process.umidade = umidade;
        process.viragem = viragem;

        process.temperatura_med = temperatura;
        process.umidade_med = umidade;
        process.viragem_med = viragem;
        process.data_inicio = data_inicio;
        
        process.save()
    }


    createHistory(){
        return 1
    }


    editProcess(){
        return 1
    }


    deleteProcess(){
        return 1
    }
}
