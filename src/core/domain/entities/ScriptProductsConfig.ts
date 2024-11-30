import { Column, Entity } from "typeorm";

@Entity("script_products_config", { schema: "makeshop" })
export class ScriptProductsConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "spc_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  spcUse: "" | "Y" | "N";

  @Column("enum", {
    name: "spc_design",
    enum: ["", "EASY", "HTML"],
    default: () => "'EASY'",
  })
  spcDesign: "" | "EASY" | "HTML";

  @Column("mediumtext", { name: "spc_basic" })
  spcBasic: string;

  @Column("mediumtext", { name: "spc_product" })
  spcProduct: string;

  @Column("mediumtext", { name: "spc_arrow" })
  spcArrow: string;

  @Column("datetime", {
    name: "spc_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  spcDate: Date;
}
