import { Column, Entity } from "typeorm";

@Entity("barotalk_config_prd", { schema: "makeshop" })
export class BarotalkConfigPrd {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "autotext_use",
    enum: ["", "Active", "Inactive"],
    default: () => "'Inactive'",
  })
  autotextUse: "" | "Active" | "Inactive";

  @Column("enum", {
    name: "stock_text_use",
    enum: ["", "Active", "Inactive"],
    default: () => "'Inactive'",
  })
  stockTextUse: "" | "Active" | "Inactive";

  @Column("enum", {
    name: "individual_text_use",
    enum: ["", "Active", "Inactive"],
    default: () => "'Inactive'",
  })
  individualTextUse: "" | "Active" | "Inactive";

  @Column("varchar", { name: "individual_message", length: 200 })
  individualMessage: string;

  @Column("enum", {
    name: "newproduct_display_use",
    enum: ["", "Active", "Inactive"],
    default: () => "'Inactive'",
  })
  newproductDisplayUse: "" | "Active" | "Inactive";

  @Column("enum", {
    name: "addproduct_use",
    enum: ["", "Active", "Inactive"],
    default: () => "'Inactive'",
  })
  addproductUse: "" | "Active" | "Inactive";

  @Column("mediumtext", { name: "addproduct_contents" })
  addproductContents: string;

  @Column("enum", {
    name: "benefit_use",
    enum: ["", "Active", "Inactive"],
    default: () => "'Inactive'",
  })
  benefitUse: "" | "Active" | "Inactive";

  @Column("enum", {
    name: "benefit_type",
    enum: ["", "coupon", "point", "saved_money"],
    default: () => "'coupon'",
  })
  benefitType: "" | "coupon" | "point" | "saved_money";

  @Column("varchar", { name: "benefit_data", length: 10, default: () => "'0'" })
  benefitData: string;

  @Column("char", { name: "benefit_term", length: 2, default: () => "'1'" })
  benefitTerm: string;

  @Column("varchar", { name: "benefit_message", length: 200 })
  benefitMessage: string;
}
