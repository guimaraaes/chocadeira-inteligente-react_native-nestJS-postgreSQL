import { EntityRepository, Repository } from "typeorm";
import { History, Process } from "./process.entity";

@EntityRepository(Process)
export class ProcessRepository extends Repository<Process>{

}

@EntityRepository(History)
export class HistoryRepository extends Repository<History>{

}