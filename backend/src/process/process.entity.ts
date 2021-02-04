import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Process extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data_inicio: Date;

    @Column()
    data_fim: Date;

    @Column({type: 'float'})
    temperatura: number;

    @Column({type: 'float'})
    umidade: number;

    @Column({type: 'float'})
    viragem: number;

    @Column({type: 'float'})
    temperatura_med: number;

    @Column({type: 'float'})
    umidade_med: number;

    @Column({type: 'float'})
    viragem_med: number;

    @Column()
    id_user: number;
    
}