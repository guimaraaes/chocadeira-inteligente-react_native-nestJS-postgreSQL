import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
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
}