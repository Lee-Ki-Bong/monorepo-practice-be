import { Column, Entity } from "typeorm";

@Entity("search_engine_tag_code", { schema: "makeshop" })
export class SearchEngineTagCode {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "tag_code",
    unsigned: true,
    default: () => "'0'",
  })
  tagCode: number;

  @Column("varchar", { name: "keyword", length: 100 })
  keyword: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
