import { BaseDTO } from "./base.dto";
import { TutorialEntity } from "../entity/tutorial.entity";
import { PageDTO } from "./page.dto";
import { PageMapper } from "../mapper/page.mapper";

export class TutorialDTO extends BaseDTO {
  public title: string;
  public description: string;
  public pages: PageDTO[];

  public constructor(entity: TutorialEntity) {
    super(entity);
    this.title = entity.title;
    this.description = entity.description;
    this.pages = entity.pages.map(x => PageMapper.toDTO(x));
  }
}