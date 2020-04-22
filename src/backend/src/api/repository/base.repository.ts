import { Repository, getConnection, DeepPartial } from "typeorm";
import { BaseEntity } from "../model/entity/base.entity";

export abstract class BaseRepository<Entity extends BaseEntity> extends Repository<Entity>{

    public getRepository(): Repository<Entity> {
        return super.repository;
    }

    public async getAllAsync(): Promise<Entity[]> {
        return this.getByAsync();
    }

    public async getAllIncludeRelationsAsync(relations: []): Promise<Entity[]> {
        return this.getByIncludeRelationsAsync(relations);
    }

    public async getByAsync(filter: {} = {}): Promise<Entity[]> {
        return await this._repository.find(filter);
    }

    public async getByIncludeRelationsAsync(relations: string[], filter: {} = {}): Promise<Entity[]> {
        return await this._repository.find({ where: filter, relations: relations });
    }

    public async getSingleByAsync(filter: {} = {}): Promise<Entity> {
        return await this._repository.findOne(filter);
    }

    public async getSingleByIncludeRelationsAsync(relations: string[], filter: {} = {}): Promise<Entity> {
        return await this._repository.findOne({ where: filter, relations: relations });
    }

    public async upsertAsync(entity: Entity): Promise<Entity> {
        const criteria = { publicId: entity.publicId };
        const existingEntity = this.getSingleByAsync(criteria);

        /*
        if (existingEntity == null)
            await this._repository.manager.insert(entity);
        else
            await this._repository.manager.update(criteria, entity);
        */

        return null;
    }

    public async saveAsync(entity: Entity): Promise<Entity> {
        return await this._repository.manager.save(entity);
    }

    public async deleteAsync(entity: Entity): Promise<Entity> {
        return await this._repository.manager.remove(entity);
    }
}
