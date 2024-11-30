import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("cate", ["adminuser", "cate1", "cate2", "cate3"], {})
@Index("idx_auto_pcdt_id", ["pcdtId"], {})
@Entity("product_category_display_temp", { schema: "makeshop" })
export class ProductCategoryDisplayTemp {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    primary: true,
    name: "device",
    enum: ["", "PC", "MOBILE"],
    default: () => "'PC'",
  })
  device: "" | "PC" | "MOBILE";

  @Column("char", { primary: true, name: "cate1", length: 3 })
  cate1: string;

  @Column("char", { primary: true, name: "cate2", length: 3 })
  cate2: string;

  @Column("char", { primary: true, name: "cate3", length: 3 })
  cate3: string;

  @PrimaryGeneratedColumn({ type: "int", name: "pcdt_id", unsigned: true })
  pcdtId: number;

  @Column("enum", {
    name: "is_virtual",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  isVirtual: "" | "Y" | "N";

  @Column("enum", {
    name: "temp_type",
    enum: ["", "REAL", "TEMP", "BACKUP"],
    default: () => "'BACKUP'",
  })
  tempType: "" | "REAL" | "TEMP" | "BACKUP";

  @Column("longtext", { name: "sort_list" })
  sortList: string;

  @Column("longtext", { name: "fixed_list" })
  fixedList: string;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;
}
