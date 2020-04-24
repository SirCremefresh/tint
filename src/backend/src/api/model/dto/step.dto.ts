import { BaseDTO } from "./base.dto";
import { StepEntity } from "../entity/step.entity";
import { PageDTO } from "./page.dto";
import { MarkDTO } from "./mark.dto";
import { PageMapper } from "../mapper/page.mapper";
import { MarkMapper } from "../mapper/mark.mapper";

export class StepDTO extends BaseDTO {
  public title: string;
  public description: string;
  public page: PageDTO;
  public marks: MarkDTO[];

  public constructor(entity: StepEntity) {
    super(entity);
    this.title = entity.title;
    this.description = entity.description;
    this.page = PageMapper.toDTO(entity.page);
    this.marks = entity.marks.map(x => MarkMapper.toDTO(x));
  }
}