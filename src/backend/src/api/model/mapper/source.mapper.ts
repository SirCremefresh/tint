import { BaseMapper, implement } from "./base.mapper";
import { SourceDTO } from "../dto/source.dto";
import { SourceEntity } from "../entity/source.entity";

@implement<BaseMapper<SourceDTO, SourceEntity>>()
export class SourceMapper {
    public static toDTO(entity: SourceEntity): SourceDTO {
        if (entity == null)
            return null;

        return new SourceDTO(entity);
    }

    public static toEntity(dto: SourceDTO): SourceEntity {
        throw "not implemented";
    }
}