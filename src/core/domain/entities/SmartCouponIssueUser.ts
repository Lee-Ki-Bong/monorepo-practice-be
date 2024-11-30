import { Column, Entity } from "typeorm";

@Entity("smart_coupon_issue_user", { schema: "makeshop" })
export class SmartCouponIssueUser {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "couponnum", length: 8 })
  couponnum: string;

  @Column("varchar", { primary: true, name: "sciu_user_id", length: 40 })
  sciuUserId: string;
}
