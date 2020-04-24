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
    public fileName: string;

    @Column()
    public fileType: SourceType;

    @OneToMany(
        type => PageEntity,
        x => x.source
    )
    public pages: PageEntity[];
}
