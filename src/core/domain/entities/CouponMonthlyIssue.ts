import { Column, Entity } from "typeorm";

@Entity("coupon_monthly_issue", { schema: "makeshop" })
export class CouponMonthlyIssue {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "cp_num", length: 8 })
  cpNum: string;

  @Column("datetime", {
    name: "cmi_created",
    default: () => "'0000-00-00 00:00:00'",
  })
  cmiCreated: Date;
}
