import { Column, Entity } from "typeorm";

@Entity("product_diy_option", { schema: "makeshop" })
export class ProductDiyOption {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("int", { name: "pdo_standard", default: () => "'0'" })
  pdoStandard: number;

  @Column("varchar", { name: "pdo_unit", length: 10 })
  pdoUnit: string;

  @Column("int", {
    name: "pdo_fixed_width",
    unsigned: true,
    default: () => "'0'",
  })
  pdoFixedWidth: number;

  @Column("enum", {
    name: "pdo_cut_type",
    enum: ["", "floor", "round", "ceil"],
    default: () => "'floor'",
  })
  pdoCutType: "" | "floor" | "round" | "ceil";

  @Column("enum", {
    name: "pdo_use_cut",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  pdoUseCut: "" | "N" | "Y";

  @Column("int", { name: "pdo_multiple", unsigned: true, default: () => "'0'" })
  pdoMultiple: number;

  @Column("enum", {
    name: "pdo_add_opt",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  pdoAddOpt: "" | "N" | "Y";

  @Column("int", {
    name: "pdo_min_width",
    unsigned: true,
    default: () => "'0'",
  })
  pdoMinWidth: number;

  @Column("int", {
    name: "pdo_max_width",
    unsigned: true,
    default: () => "'0'",
  })
  pdoMaxWidth: number;

  @Column("int", {
    name: "pdo_min_height",
    unsigned: true,
    default: () => "'0'",
  })
  pdoMinHeight: number;

  @Column("int", {
    name: "pdo_max_height",
    unsigned: true,
    default: () => "'0'",
  })
  pdoMaxHeight: number;

  @Column("enum", {
    name: "pdo_use_addprice",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  pdoUseAddprice: "" | "N" | "Y";

  @Column("enum", {
    name: "pdo_use_addopt",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  pdoUseAddopt: "" | "N" | "Y";

  @Column("enum", {
    name: "pdo_use_custom_opt",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  pdoUseCustomOpt: "" | "N" | "Y";

  @Column("mediumtext", { name: "pdo_comment" })
  pdoComment: string;

  @Column("datetime", {
    name: "pdo_insert_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pdoInsertDate: Date;

  @Column("datetime", {
    name: "pdo_update_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pdoUpdateDate: Date;
}
