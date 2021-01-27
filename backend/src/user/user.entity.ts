import * as bcrypt from 'bcrypt';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
@Entity()
@Unique(['email'])
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    cpf: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @Column()
    salt: string;

    async validatePassword(senha: string){
        const hash = await bcrypt.hash(senha, this.salt)
        return hash === this.senha
    }
}