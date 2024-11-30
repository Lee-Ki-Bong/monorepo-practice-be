import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_csv_id", ["csvId"], {})
@Entity("cate_search_value", { schema: "makeshop" })
export class CateSearchValue {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    primary: true,
    name: "cate_type",
    enum: ["", "NORMAL", "VIRTUAL"],
    default: () => "'NORMAL'",
  })
  cateType: "" | "NORMAL" | "VIRTUAL";

  @Column("char", { primary: true, name: "cate1", length: 3 })
  cate1: string;

  @Column("char", { primary: true, name: "cate2", length: 3 })
  cate2: string;

  @Column("char", { primary: true, name: "cate3", length: 3 })
  cate3: string;

  @Column("int", {
    primary: true,
    name: "csi_id",
    unsigned: true,
    default: () => "'0'",
  })
  csiId: number;

  @PrimaryGeneratedColumn({ type: "int", name: "csv_id", unsigned: true })
  csvId: number;

  @Column("enum", {
    name: "csv_type",
    enum: ["", "NORMAL", "ETC"],
    default: () => "'NORMAL'",
  })
  csvType: "" | "NORMAL" | "ETC";

  @Column("varchar", { name: "csv_value", length: 255 })
  csvValue: string;

  @Column("mediumint", { name: "csv_sort", default: () => "'0'" })
  csvSort: number;

  @Column("datetime", {
    name: "date_regist",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateRegist: Date;

  @Column("datetime", {
    name: "date_update",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateUpdate: Date;
}
