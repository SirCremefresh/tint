import { BaseMapper, implement } from "./base.mapper";
import { PageDTO } from "../dto/page.dto";
import { PageEntity } from "../entity/page.entity";

@implement<BaseMapper<PageDTO, PageEntity>>()
export class PageMapper {
    public static toDTO(entity: PageEntity): PageDTO {
        if (entity == null)
            return null;

        return new PageDTO(entity);
    }

    public static toEntity(dto: PageDTO): PageEntity {
        throw "not implemented";
    }
}