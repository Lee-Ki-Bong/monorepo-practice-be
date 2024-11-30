import { Column, Entity } from "typeorm";

@Entity("smart_coupon_promotion", { schema: "makeshop" })
export class SmartCouponPromotion {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "scp_type", length: 20 })
  scpType: string;

  @Column("varchar", { primary: true, name: "scp_group", length: 4 })
  scpGroup: string;

  @Column("varchar", { primary: true, name: "couponnum", length: 8 })
  couponnum: string;

  @Column("varchar", { name: "scp_etctype", length: 255 })
  scpEtctype: string;

  @Column("datetime", {
    name: "scp_regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  scpRegdate: Date;
}
