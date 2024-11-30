import { Column, Entity } from "typeorm";

@Entity("smart_coupon_delete", { schema: "makeshop" })
export class SmartCouponDelete {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "couponnum", length: 8 })
  couponnum: string;

  @Column("enum", {
    primary: true,
    name: "is_exec",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  isExec: "" | "Y" | "N";

  @Column("datetime", {
    name: "date_delete",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateDelete: Date;

  @Column("datetime", {
    name: "date_exec",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateExec: Date;
}
