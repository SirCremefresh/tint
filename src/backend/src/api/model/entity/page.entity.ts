import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { TutorialEntity } from "./tutorial.entity";
import { SourceEntity } from "./source.entity";
import { StepEntity } from "./step.entity";

@Entity({name: "page"})
export class PageEntity extends BaseEntity {
    @Column()
    tutorialId: number;

    @ManyToOne(
        type => TutorialEntity,
        x => x.pages
    )
    tutorial: TutorialEntity;

    @Column()
    sourceId: number;

    @ManyToOne(
        type => SourceEntity,
        x => x.pages
    )
    source: SourceEntity;

    @OneToMany(
        type => StepEntity,
        x => x.page
    )
    steps: StepEntity[];
}
