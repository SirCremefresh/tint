import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { PageEntity } from "./page.entity";

export enum SourceType {
    Jpg = "jpg",
    Png = "png"
}

@Entity({name: "source"})
export class SourceEntity extends BaseEntity {
    @Column()
    fileName: string;

    @Column({
        type: "enum",
        enum: SourceType,
        default: SourceType.Jpg
    })
    fileType: SourceType;

    @OneToMany(
        type => PageEntity,
        x => x.source
    )
    pages: PageEntity[];
}
