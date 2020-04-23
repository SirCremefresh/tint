import { BaseEntity } from "../entity/base.entity";

export abstract class BaseDTO {
    public id: string;

    protected constructor(entity: BaseEntity) {
        this.id = entity.uuid;
    }
} 