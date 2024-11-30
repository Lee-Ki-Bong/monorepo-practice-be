import { Column, Entity } from "typeorm";

@Entity("smart_coupon_serial_coupon", { schema: "makeshop" })
export class SmartCouponSerialCoupon {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "sel_idx",
    unsigned: true,
    default: () => "'0'",
  })
  selIdx: number;

  @Column("varchar", { primary: true, name: "couponnum", length: 8 })
  couponnum: string;

  @Column("smallint", {
    name: "sec_amount",
    unsigned: true,
    default: () => "'0'",
  })
  secAmount: number;
}
