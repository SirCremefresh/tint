import { Injectable } from "../helper/decorator/injection/injectable.decorator";
import { BaseTest, Testee } from "./base.test";
import { MarkEntity, MarkType } from "../api/model/entity/mark.entity";
import { MarkMapper } from "../api/model/mapper/mark.mapper";

@Injectable()
export class MapperTest extends BaseTest {

    public runAllTests() {
        this.test_MarkMapper_toDTO();
    }

    public test_MarkMapper_toDTO() {
        const entity: MarkEntity = new MarkEntity();
        entity.uuid = "testUuid";
        entity.content = "testContent";
        entity.markType = MarkType.TextBox;

        const dto = MarkMapper.toDTO(entity);

        const testee = new Testee(dto);
        testee.property("id").should().be(entity.uuid);
        testee.property("content").should().be(entity.content);
        testee.property("markType").should().be(entity.markType);
    }
}