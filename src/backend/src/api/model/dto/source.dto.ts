import { BaseDTO } from "./base.dto";
import { SourceEntity } from "../entity/source.entity";
import { PageDTO } from "./page.dto";
import { PageMapper } from "../mapper/page.mapper";

export class SourceDTO extends BaseDTO {
  public fileName: string;
  public fileType: string;
  public pages: PageDTO[];

  public constructor(entity: SourceEntity) {
    super(entity);
    this.fileName = entity.fileName;
    this.fileType = entity.fileType.toString();
    this.pages = entity.pages.map(x => PageMapper.toDTO(x));
  }
}