import * as bcrypt from 'bcrypt';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
@Entity()
@Unique(['email'])
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    nome: string;

    @Column()
    cpf: string;

    @Column({nullable: true})
    email: string;

    @Column({nullable: true})
    senha: string;

    @Column({nullable: true})
    salt: string;

    async validatePassword(senha: string){
        const hash = await bcrypt.hash(senha, this.salt)
        return hash === this.senha
    }
}