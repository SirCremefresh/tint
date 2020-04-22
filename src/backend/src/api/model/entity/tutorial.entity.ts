import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { PageEntity } from "./page.entity";

@Entity({name: "tutorial"})
export class TutorialEntity extends BaseEntity {
    @Column()
    title: string;

    @Column()
    description: string;

    @OneToMany(
        type => PageEntity,
        x => x.tutorial
    )
    pages: PageEntity[];
}
