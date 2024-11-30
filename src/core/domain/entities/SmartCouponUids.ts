import { Column, Entity, Index } from "typeorm";

@Index("index_uid", ["adminuser", "scuType", "scuProductUid"], {})
@Entity("smart_coupon_uids", { schema: "makeshop" })
export class SmartCouponUids {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "couponnum", length: 8 })
  couponnum: string;

  @Column("enum", {
    primary: true,
    name: "scu_type",
    enum: ["", "APPLY", "EXCEPT", "ISSUE"],
    default: () => "'APPLY'",
  })
  scuType: "" | "APPLY" | "EXCEPT" | "ISSUE";

  @Column("int", {
    primary: true,
    name: "scu_product_uid",
    unsigned: true,
    default: () => "'0'",
  })
  scuProductUid: number;
}
