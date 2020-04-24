import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { TutorialEntity } from "./tutorial.entity";
import { SourceEntity } from "./source.entity";
import { StepEntity } from "./step.entity";

@Entity({name: "page"})
export class PageEntity extends BaseEntity {
    @Column()
    public tutorialId: number;

    @ManyToOne(
        type => TutorialEntity,
        x => x.pages
    )
    public tutorial: TutorialEntity;

    @Column()
    public sourceId: number;

    @ManyToOne(
        type => SourceEntity,
        x => x.pages
    )
    public source: SourceEntity;

    @OneToMany(
        type => StepEntity,
        x => x.page
    )
    public steps: StepEntity[];
}
