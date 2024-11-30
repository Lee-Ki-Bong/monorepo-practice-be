import { Column, Entity } from "typeorm";

@Entity("smart_coupon_condition", { schema: "makeshop" })
export class SmartCouponCondition {
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
    name: "scc_product_uid",
    unsigned: true,
    default: () => "'0'",
  })
  sccProductUid: number;
}
