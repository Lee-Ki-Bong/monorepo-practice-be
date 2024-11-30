import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_pcas_uid", ["pcasUid"], {})
@Entity("product_category_auto_set", { schema: "makeshop" })
export class ProductCategoryAutoSet {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "pcas_uid", unsigned: true })
  pcasUid: number;

  @Column("varchar", { name: "pcas_subject", length: 255 })
  pcasSubject: string;

  @Column("char", { name: "log_period", length: 3, default: () => "'1'" })
  logPeriod: string;

  @Column("enum", {
    name: "use_fixed",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useFixed: "" | "Y" | "N";

  @Column("enum", {
    name: "use_clickmap",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useClickmap: "" | "Y" | "N";

  @Column("enum", {
    name: "display_type",
    enum: ["", "ROW", "CNT"],
    default: () => "'ROW'",
  })
  displayType: "" | "ROW" | "CNT";

  @Column("int", { name: "display_cnt", unsigned: true, default: () => "'0'" })
  displayCnt: number;

  @Column("mediumtext", { name: "sort_condition" })
  sortCondition: string;

  @Column("datetime", {
    name: "update_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  updateDate: Date;
}
