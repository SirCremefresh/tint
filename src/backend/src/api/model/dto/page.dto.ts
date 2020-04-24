import { BaseDTO } from "./base.dto";
import { PageEntity } from "../entity/page.entity";
import { TutorialDTO } from "./tutorial.dto";
import { SourceDTO } from "./source.dto";
import { StepDTO } from "./step.dto";
import { TutorialMapper } from "../mapper/tutorial.mapper";
import { SourceMapper } from "../mapper/source.mapper";
import { StepMapper } from "../mapper/step.mapper";

export class PageDTO extends BaseDTO {
  public tutorial: TutorialDTO;
  public source: SourceDTO;
  public steps: StepDTO[];

  public constructor(entity: PageEntity) {
    super(entity);
    this.tutorial = TutorialMapper.toDTO(entity.tutorial);
    this.source = SourceMapper.toDTO(entity.source);
    this.steps = entity.steps.map(x => StepMapper.toDTO(x));
  }
}