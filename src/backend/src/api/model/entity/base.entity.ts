import { PrimaryGeneratedColumn, Column, Index } from "typeorm";

export abstract class BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Index({ unique: true })
    @Column()
    guid: string;

    public static generateGuid(): string {
        return "10";
    }
}
