import { BaseMapper, implement } from "./base.mapper";
import { TutorialDTO } from "../dto/tutorial.dto";
import { TutorialEntity } from "../entity/tutorial.entity";

@implement<BaseMapper<TutorialDTO, TutorialEntity>>()
export class TutorialMapper {
    public static toDTO(entity: TutorialEntity): TutorialDTO {
        if (entity == null)
            return null;

        return new TutorialDTO(entity);
    }

    public static toEntity(dto: TutorialDTO): TutorialEntity {
        throw "not implemented";
    }
}