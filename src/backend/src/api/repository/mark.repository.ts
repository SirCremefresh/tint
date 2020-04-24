import { Injectable } from "../../helper/decorator/injection/injectable.decorator";
import { BaseRepository } from "./base.repository";
import { MarkEntity } from "../model/entity/mark.entity";

@Injectable()
export class MarkRepository extends BaseRepository<MarkEntity> {

}
