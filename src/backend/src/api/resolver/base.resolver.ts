import { Resolver, Query, Arg } from "type-graphql";
import { BaseDTO } from "../model/dto/base.dto";
import { BaseEntity } from "../model/entity/base.entity";
import { BaseMapper } from "../model/mapper/base.mapper";
import { BaseRepository } from "../repository/base.repository";

@Resolver({ isAbstract: true })
export abstract class BaseResolver<TDTO extends BaseDTO, TEntity extends BaseEntity, TMapper extends BaseMapper<TDTO, TEntity>, TRepository extends BaseRepository<TEntity>> {

    protected _suffix: string;
    protected _type: TDTO;
    protected _mapper: TMapper;
    protected _repository: TRepository;

    protected constructor(suffix: string, type: any, mapper: TMapper, repository: TRepository) {
        this._suffix = suffix;
        this._type = type;

        this._mapper = mapper;
        this._repository = repository;
    }

    @Query(type => [this._type], { name: `getAll${this._suffix}` })
    public async getAll(): Promise<TDTO[]> {
        const entities = await this._repository.getAllAsync();
        return entities.map(x => this._mapper.toDTO(x));
    }
}