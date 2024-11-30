import { Column, Entity } from "typeorm";

@Entity("smart_coupon_condition_cate", { schema: "makeshop" })
export class SmartCouponConditionCate {
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

  @Column("char", { primary: true, name: "scc_cate1", length: 3 })
  sccCate1: string;

  @Column("char", { primary: true, name: "scc_cate2", length: 3 })
  sccCate2: string;

  @Column("char", { primary: true, name: "scc_cate3", length: 3 })
  sccCate3: string;
}
