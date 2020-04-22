import { BaseDTO } from "./base.dto";
import { MarkEntity } from "../entity/mark.entity";

export class MarkDTO extends BaseDTO {
  public x: number;
  public y: number;
  public content: string;
  public markType: string;
  public stepId: string;
  //public step: StepDTO;

  public constructor(entity: MarkEntity) {
    super(entity);
  }
}