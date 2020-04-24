import { PrimaryGeneratedColumn, Column, Generated } from "typeorm";

export abstract class BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    @Generated("uuid")
    public uuid: string;
}
