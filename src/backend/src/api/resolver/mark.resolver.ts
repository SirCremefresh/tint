import { Resolver, Query } from "type-graphql";
import { BaseResolver } from "./base.resolver";
import { BaseMapper } from "../model/mapper/base.mapper";
import { MarkDTO } from "../model/dto/mark.dto";
import { MarkEntity } from "../model/entity/mark.entity";
import { MarkRepository } from "../repository/mark.repository";
import { MarkMapper } from "../model/mapper/mark.mapper";
import {Injector} from "../../helper/decorator/injection/injector";

@Resolver(of => MarkDTO)
export class MarkResolver extends BaseResolver<MarkDTO, MarkEntity, BaseMapper<MarkDTO, MarkEntity>, MarkRepository> {

    private _markRepository: MarkRepository;

    constructor() {
        const repository = Injector.resolve<MarkRepository>(MarkRepository);
        super("mark", MarkDTO, MarkMapper, repository);
        this._markRepository = repository;
    }

    @Query(returns => [MarkDTO])
    marks() {
        return this._markRepository.getAllAsync();
    }
}