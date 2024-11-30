import { Column, Entity, Index } from "typeorm";

@Index("index_end_date", ["adminuser", "useEndDate"], {})
@Entity("custom_momq_settlement_issue_coupon", { schema: "makeshop" })
export class CustomMomqSettlementIssueCoupon {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("varchar", { name: "custom_id", length: 20 })
  customId: string;

  @Column("varchar", { primary: true, name: "couponnum", length: 8 })
  couponnum: string;

  @Column("int", {
    primary: true,
    name: "couponnum_idx",
    unsigned: true,
    default: () => "'0'",
  })
  couponnumIdx: number;

  @Column("varchar", { name: "coupon_name", length: 255 })
  couponName: string;

  @Column("datetime", {
    name: "issue_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  issueDate: Date;

  @Column("datetime", {
    name: "use_start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  useStartDate: Date;

  @Column("datetime", {
    name: "use_end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  useEndDate: Date;

  @Column("varchar", { name: "discount_type", length: 10 })
  discountType: string;

  @Column("varchar", { name: "discount_price", length: 10 })
  discountPrice: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
