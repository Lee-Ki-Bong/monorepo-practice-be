import { Column, Entity } from "typeorm";

@Entity("sale_best_config", { schema: "makeshop" })
export class SaleBestConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "collect_day",
    enum: ["", "7", "14"],
    default: () => "'7'",
  })
  collectDay: "" | "7" | "14";

  @Column("enum", {
    name: "except_soldout",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  exceptSoldout: "" | "Y" | "N";

  @Column("enum", {
    name: "except_not_display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  exceptNotDisplay: "" | "Y" | "N";

  @Column("enum", {
    name: "except_not_sale",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  exceptNotSale: "" | "Y" | "N";

  @Column("enum", {
    name: "sort_type1",
    enum: ["", "SELLCNT", "PRICE_DESC", "PRD_NAME", "PRICE_ASC", "REGDATE"],
    default: () => "'SELLCNT'",
  })
  sortType1:
    | ""
    | "SELLCNT"
    | "PRICE_DESC"
    | "PRD_NAME"
    | "PRICE_ASC"
    | "REGDATE";

  @Column("enum", {
    name: "sort_type2",
    enum: ["", "SELLCNT", "PRICE_DESC", "PRD_NAME", "PRICE_ASC", "REGDATE"],
    default: () => "'PRICE_DESC'",
  })
  sortType2:
    | ""
    | "SELLCNT"
    | "PRICE_DESC"
    | "PRD_NAME"
    | "PRICE_ASC"
    | "REGDATE";

  @Column("enum", {
    name: "sort_type3",
    enum: ["", "SELLCNT", "PRICE_DESC", "PRD_NAME", "PRICE_ASC", "REGDATE"],
    default: () => "'PRD_NAME'",
  })
  sortType3:
    | ""
    | "SELLCNT"
    | "PRICE_DESC"
    | "PRD_NAME"
    | "PRICE_ASC"
    | "REGDATE";
}
