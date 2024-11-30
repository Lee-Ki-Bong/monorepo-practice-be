import { Column, Entity, Index } from "typeorm";

@Index("index_stat_date", ["adminuser", "statDate"], {})
@Entity("custom_momq_settlement_order_coupon", { schema: "makeshop" })
export class CustomMomqSettlementOrderCoupon {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("date", {
    primary: true,
    name: "stat_date",
    default: () => "'0000-00-00'",
  })
  statDate: string;

  @Column("date", { name: "search_date", default: () => "'0000-00-00'" })
  searchDate: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", { primary: true, name: "basket_num", default: () => "'0'" })
  basketNum: number;

  @Column("datetime", {
    name: "pay_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  payDate: Date;

  @Column("int", { name: "product_uid", unsigned: true, default: () => "'0'" })
  productUid: number;

  @Column("varchar", { name: "product_name", length: 255 })
  productName: string;

  @Column("int", {
    name: "product_price",
    unsigned: true,
    default: () => "'0'",
  })
  productPrice: number;

  @Column("int", {
    name: "discount_member",
    unsigned: true,
    default: () => "'0'",
  })
  discountMember: number;

  @Column("int", { name: "discount_age", unsigned: true, default: () => "'0'" })
  discountAge: number;

  @Column("int", {
    name: "discount_premium",
    unsigned: true,
    default: () => "'0'",
  })
  discountPremium: number;

  @Column("int", {
    name: "discount_coupon",
    unsigned: true,
    default: () => "'0'",
  })
  discountCoupon: number;

  @Column("int", { name: "sell_price", unsigned: true, default: () => "'0'" })
  sellPrice: number;

  @Column("varchar", { primary: true, name: "couponnum", length: 8 })
  couponnum: string;

  @Column("varchar", { name: "coupon_name", length: 255 })
  couponName: string;

  @Column("datetime", {
    name: "issue_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  issueDate: Date;

  @Column("datetime", {
    name: "issue_start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  issueStartDate: Date;

  @Column("datetime", {
    name: "issue_end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  issueEndDate: Date;

  @Column("varchar", { name: "use_period", length: 20 })
  usePeriod: string;

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
