import { BaseMapper, implement } from "./base.mapper";
import { MarkDTO } from "../dto/mark.dto";
import { MarkEntity } from "../entity/mark.entity";

@implement<BaseMapper<MarkDTO, MarkEntity>>()
export class MarkMapper {
    public static toDTO(entity: MarkEntity): MarkDTO {
        if (entity == null)
            return null;

        return new MarkDTO(entity);
    }

    public static toEntity(dto: MarkDTO): MarkEntity {
        throw "not implemented";
    }
}