import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_id", ["id"], {})
@Entity("search_engine_keyword_except", { schema: "makeshop" })
export class SearchEngineKeywordExcept {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("enum", {
    name: "except_type",
    enum: ["", "same", "include"],
    default: () => "'same'",
  })
  exceptType: "" | "same" | "include";

  @Column("varchar", { name: "keyword", length: 100 })
  keyword: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
