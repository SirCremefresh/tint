import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { PageEntity } from "./page.entity";
import { MarkEntity } from "./mark.entity";

@Entity({name: "step"})
export class StepEntity extends BaseEntity {
    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    pageId: number;

    @ManyToOne(
        type => PageEntity,
        x => x.steps
    )
    page: PageEntity;

    @OneToMany(
        type => MarkEntity,
        x => x.step
    )
    marks: MarkEntity[];
}
