import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adm_code", ["adminuser", "code"], {})
@Index("category_id", ["cateId"], {})
@Index("category_left", ["adminuser", "cateLeft"], {})
@Index("category_pid", ["adminuser", "catePid"], {})
@Entity("category", { schema: "makeshop" })
export class Category {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "cate_id", unsigned: true })
  cateId: number;

  @Column("int", { name: "cate_pid", unsigned: true, default: () => "'0'" })
  catePid: number;

  @Column("int", { name: "cate_left", unsigned: true, default: () => "'1'" })
  cateLeft: number;

  @Column("int", { name: "cate_right", unsigned: true, default: () => "'2'" })
  cateRight: number;

  @Column("mediumint", {
    name: "cate_depth",
    unsigned: true,
    default: () => "'0'",
  })
  cateDepth: number;

  @Column("smallint", {
    name: "product_xnum",
    unsigned: true,
    default: () => "'0'",
  })
  productXnum: number;

  @Column("smallint", {
    name: "product_ynum",
    unsigned: true,
    default: () => "'0'",
  })
  productYnum: number;

  @Column("smallint", {
    name: "productnum",
    unsigned: true,
    default: () => "'0'",
  })
  productnum: number;

  @Column("enum", {
    name: "codeimg",
    enum: ["", "N", "Y", "H"],
    default: () => "'N'",
  })
  codeimg: "" | "N" | "Y" | "H";

  @Column("enum", {
    name: "soldout_sort",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  soldoutSort: "" | "N" | "Y";

  @Column("enum", {
    name: "is_vir_cate",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  isVirCate: "" | "N" | "Y";

  @Column("char", { name: "code", length: 3, default: () => "'001'" })
  code: string;

  @Column("varchar", { name: "codename", length: 100 })
  codename: string;

  @Column("char", { name: "list_type", length: 1, default: () => "'0'" })
  listType: string;

  @Column("char", { name: "detail_type", length: 1, default: () => "'0'" })
  detailType: string;

  @Column("varchar", { name: "sort", length: 10, default: () => "'order'" })
  sort: string;

  @Column("varchar", { name: "groupid", nullable: true, length: 4 })
  groupid: string | null;

  @Column("datetime", { name: "timekey", nullable: true })
  timekey: Date | null;

  @Column("char", {
    name: "estimate_set",
    nullable: true,
    length: 3,
    default: () => "'999'",
  })
  estimateSet: string | null;

  @Column("varchar", {
    name: "cate1",
    nullable: true,
    length: 4,
    default: () => "'0000'",
  })
  cate1: string | null;

  @Column("varchar", {
    name: "cate2",
    nullable: true,
    length: 4,
    default: () => "'0000'",
  })
  cate2: string | null;

  @Column("varchar", {
    name: "cate3",
    nullable: true,
    length: 4,
    default: () => "'0000'",
  })
  cate3: string | null;

  @Column("varchar", { name: "category_code", length: 32 })
  categoryCode: string;
}
