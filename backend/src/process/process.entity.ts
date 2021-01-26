import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Process extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data_inicio: string;

    @Column()
    data_fim: string;

    @Column()
    temperatura: number;

    @Column()
    umidade: number;

    @Column()
    viragem: string;

    @Column()
    temperatura_med: number;

    @Column()
    umidade_med: number;

    @Column()
    viragem_med: string;

    @Column()
    id_user: number;
    
}