import { BaseMapper, implement } from "./base.mapper";
import { StepDTO } from "../dto/step.dto";
import { StepEntity } from "../entity/step.entity";

@implement<BaseMapper<StepDTO, StepEntity>>()
export class StepMapper {
    public static toDTO(entity: StepEntity): StepDTO {
        if (entity == null)
            return null;

        return new StepDTO(entity);
    }

    public static toEntity(dto: StepDTO): StepEntity {
        throw "not implemented";
    }
}