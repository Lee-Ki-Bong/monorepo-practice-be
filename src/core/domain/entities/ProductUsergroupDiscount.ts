import { Column, Entity } from "typeorm";

@Entity("product_usergroup_discount", { schema: "makeshop" })
export class ProductUsergroupDiscount {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("int", {
    primary: true,
    name: "group_uid",
    unsigned: true,
    default: () => "'0'",
  })
  groupUid: number;

  @Column("enum", {
    name: "reserve_method",
    enum: ["", "R", "P"],
    default: () => "'R'",
  })
  reserveMethod: "" | "R" | "P";

  @Column("varchar", { name: "reserve_value", nullable: true, length: 8 })
  reserveValue: string | null;

  @Column("enum", {
    name: "reserve_value_type",
    enum: ["", "W", "P", "M"],
    default: () => "'W'",
  })
  reserveValueType: "" | "W" | "P" | "M";

  @Column("enum", {
    name: "reserve_value_cut",
    enum: ["", "1", "10", "100", "1000"],
    default: () => "'1'",
  })
  reserveValueCut: "" | "1" | "10" | "100" | "1000";

  @Column("varchar", { name: "discount_value", nullable: true, length: 8 })
  discountValue: string | null;

  @Column("enum", {
    name: "discount_value_type",
    enum: ["", "W", "P"],
    default: () => "'W'",
  })
  discountValueType: "" | "W" | "P";

  @Column("enum", {
    name: "discount_value_cut",
    enum: ["", "1", "10", "100", "1000"],
    default: () => "'1'",
  })
  discountValueCut: "" | "1" | "10" | "100" | "1000";

  @Column("varchar", { name: "prd_discount_value", nullable: true, length: 8 })
  prdDiscountValue: string | null;

  @Column("enum", {
    name: "prd_discount_value_type",
    enum: ["", "W", "P"],
    default: () => "'W'",
  })
  prdDiscountValueType: "" | "W" | "P";

  @Column("char", { name: "prd_discount_value_cut", length: 1 })
  prdDiscountValueCut: string;

  @Column("enum", {
    name: "prd_discount_value_cut_option",
    enum: ["", "ceil", "round", "floor"],
    default: () => "'ceil'",
  })
  prdDiscountValueCutOption: "" | "ceil" | "round" | "floor";
}
