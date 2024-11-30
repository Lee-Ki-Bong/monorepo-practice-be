import { Column, Entity } from "typeorm";

@Entity("smart_coupon_condition_brand", { schema: "makeshop" })
export class SmartCouponConditionBrand {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "couponnum", length: 8 })
  couponnum: string;

  @Column("enum", {
    primary: true,
    name: "scc_type",
    enum: ["", "USE", "ISSUE"],
    default: () => "'USE'",
  })
  sccType: "" | "USE" | "ISSUE";

  @Column("enum", {
    primary: true,
    name: "scc_division",
    enum: ["", "APPLY", "EXCEPT"],
    default: () => "'APPLY'",
  })
  sccDivision: "" | "APPLY" | "EXCEPT";

  @Column("int", {
    primary: true,
    name: "scc_brand_id",
    unsigned: true,
    default: () => "'0'",
  })
  sccBrandId: number;

  @Column("int", {
    primary: true,
    name: "scc_brand_mid",
    unsigned: true,
    default: () => "'0'",
  })
  sccBrandMid: number;

  @Column("int", {
    primary: true,
    name: "scc_brand_sid",
    unsigned: true,
    default: () => "'0'",
  })
  sccBrandSid: number;

  @Column("enum", {
    primary: true,
    name: "scc_brand_type",
    enum: ["", "BRAND", "ORIGIN", "MAKER"],
    default: () => "'BRAND'",
  })
  sccBrandType: "" | "BRAND" | "ORIGIN" | "MAKER";
}
