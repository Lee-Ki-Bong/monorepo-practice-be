import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_id", ["id"], {})
@Index("keyword", ["adminuser", "keyword"], {})
@Index("keyword_product_uid", ["adminuser", "keyword", "productUid"], {
  unique: true,
})
@Index("reg_date", ["adminuser", "regDate"], {})
@Entity("search_engine_product", { schema: "makeshop" })
export class SearchEngineProduct {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "keyword", nullable: true, length: 255 })
  keyword: string | null;

  @Column("int", { name: "product_uid", unsigned: true, default: () => "'0'" })
  productUid: number;

  @Column("decimal", {
    name: "score",
    precision: 10,
    scale: 5,
    default: () => "'0.00000'",
  })
  score: string;

  @Column("enum", {
    name: "finder_type",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  finderType: "" | "Y" | "N";

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
