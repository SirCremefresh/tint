import { Entity, Column, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { StepEntity } from "./step.entity";

export enum MarkType {
    TextBox = "TextBox",
    Button = "Button"
}

@Entity({name: "mark"})
export class MarkEntity extends BaseEntity {
    @Column("simple-json")
    public location: { x: number, y: number };

    @Column("simple-json")
    public size: { width: number, height: number };

    @Column()
    public content: string;

    @Column()
    public markType: MarkType;

    @Column()
    public stepId: number;

    @ManyToOne(
        type => StepEntity,
        x => x.marks
    )
    public step: StepEntity;
}
