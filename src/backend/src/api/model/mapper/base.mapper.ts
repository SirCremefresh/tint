import { BaseDTO } from "../dto/base.dto";
import { BaseEntity } from "../entity/base.entity";

export abstract class BaseMapper<TDTO extends BaseDTO, TEntity extends BaseEntity> {
    public abstract toDTO(entity: TEntity): TDTO;
    public abstract toEntity(dto: TDTO): TEntity;
}