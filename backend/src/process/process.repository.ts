import { EntityRepository, Repository } from "typeorm";
import { Process } from "./process.entity";

@EntityRepository(Process)
export class ProcessRepository extends Repository<Process>{

}