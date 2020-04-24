import { Repository } from "typeorm";
import { BaseEntity } from "../model/entity/base.entity";

export abstract class BaseRepository<Entity extends BaseEntity> extends Repository<Entity>{

    public async getAllAsync(): Promise<Entity[]> {
        return this.getByAsync({});
    }

    public async getAllIncludeRelationsAsync(relations: []): Promise<Entity[]> {
        return this.getByIncludeRelationsAsync(relations, {});
    }

    public async getByAsync(filter: {}): Promise<Entity[]> {
        return await this.find(filter);
    }

    public async getByIncludeRelationsAsync(relations: string[], filter: {}): Promise<Entity[]> {
        return await this.find({ where: filter, relations: relations });
    }

    public async getSingleByAsync(filter: {}): Promise<Entity> {
        return await this.getSingleByIncludeRelationsAsync([], filter);
    }

    public async getSingleByIncludeRelationsAsync(relations: string[], filter: {}): Promise<Entity> {
        return await this.findOne({ where: filter, relations: relations });
    }

    public async upsertAsync(entity: Entity): Promise<Entity> {
        const existingEntity = this.getSingleByAsync({ uuid: entity.uuid });

        /*
        if (existingEntity == null)
            await this.manager.insert(entity);
        else
            await this.manager.update(criteria, entity);
        */

        return null;
    }

    public async saveAsync(entity: Entity): Promise<Entity> {
        return await this.manager.save(entity);
    }

    public async deleteAsync(entity: Entity): Promise<Entity> {
        return await this.manager.remove(entity);
    }
}
