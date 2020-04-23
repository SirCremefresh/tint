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
    location: { x: number, y: number };

    @Column("simple-json")
    size: { width: number, height: number };

    @Column()
    content: string;

    @Column({
        type: "enum",
        enum: MarkType,
        default: MarkType.TextBox
    })
    markType: MarkType;

    @Column()
    stepId: number;

    @ManyToOne(
        type => StepEntity,
        x => x.marks
    )
    step: StepEntity;
}
