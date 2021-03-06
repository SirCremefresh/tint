import { BaseDTO } from "../dto/base.dto";
import { BaseEntity } from "../entity/base.entity";

export interface BaseMapper<TDTO extends BaseDTO, TEntity extends BaseEntity> {
    toDTO(entity: TEntity): TDTO;
    toEntity(dto: TDTO): TEntity;
}

export function implement<T>() {
    return <U extends T>(constructor: U) => {
        return constructor;
    };
}