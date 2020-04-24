import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { PageEntity } from "./page.entity";
import { MarkEntity } from "./mark.entity";

@Entity({name: "step"})
export class StepEntity extends BaseEntity {
    @Column()
    public title: string;

    @Column()
    public description: string;

    @Column()
    public pageId: number;

    @ManyToOne(
        type => PageEntity,
        x => x.steps
    )
    public page: PageEntity;

    @OneToMany(
        type => MarkEntity,
        x => x.step
    )
    public marks: MarkEntity[];
}
