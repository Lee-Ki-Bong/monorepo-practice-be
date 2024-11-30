import { Column, Entity, Index } from "typeorm";

@Index("s_data", ["sData"], { fulltext: true })
@Entity("product_search_data", { schema: "makeshop" })
export class ProductSearchData {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("enum", {
    primary: true,
    name: "cate_type",
    enum: ["", "NORMAL", "VIRTUAL"],
    default: () => "'NORMAL'",
  })
  cateType: "" | "NORMAL" | "VIRTUAL";

  @Column("enum", {
    primary: true,
    name: "cate_level",
    enum: ["", "X", "M", "S"],
    default: () => "'S'",
  })
  cateLevel: "" | "X" | "M" | "S";

  @Column("char", { primary: true, name: "cate1", length: 3 })
  cate1: string;

  @Column("char", { primary: true, name: "cate2", length: 3 })
  cate2: string;

  @Column("char", { primary: true, name: "cate3", length: 3 })
  cate3: string;

  @Column("mediumtext", { name: "s_data" })
  sData: string;
}
