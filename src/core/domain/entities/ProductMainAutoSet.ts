import { Column, Entity } from "typeorm";

@Entity("product_main_auto_set", { schema: "makeshop" })
export class ProductMainAutoSet {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("smallint", {
    primary: true,
    name: "special",
    unsigned: true,
    default: () => "'0'",
  })
  special: number;

  @Column("enum", {
    primary: true,
    name: "device",
    enum: ["", "PC", "MOBILE"],
    default: () => "'PC'",
  })
  device: "" | "PC" | "MOBILE";

  @Column("char", { name: "log_period", length: 3, default: () => "'1'" })
  logPeriod: string;

  @Column("enum", {
    name: "log_device",
    enum: ["", "TOTAL", "PC", "MOBILE"],
    default: () => "'TOTAL'",
  })
  logDevice: "" | "TOTAL" | "PC" | "MOBILE";

  @Column("enum", {
    name: "use_basic_pc",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  useBasicPc: "" | "Y" | "N";

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

  @Column("set", { name: "del_condition", enum: ["SOLDOUT", "ACCEPT"] })
  delCondition: ("SOLDOUT" | "ACCEPT")[];

  @Column("mediumtext", { name: "sort_condition" })
  sortCondition: string;

  @Column("datetime", {
    name: "update_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  updateDate: Date;
}
