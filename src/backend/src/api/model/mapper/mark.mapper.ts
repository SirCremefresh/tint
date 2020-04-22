import { BaseMapper } from "./base.mapper";
import { MarkDTO } from "../dto/mark.dto";
import { MarkEntity } from "../entity/mark.entity";

export class MarkMapper extends BaseMapper<MarkDTO, MarkEntity> {
    public toDTO(entity: MarkEntity): MarkDTO {
        return
    }

    public toEntity(dto: MarkDTO): MarkEntity {
        return
    }
}