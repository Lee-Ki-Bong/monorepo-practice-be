import { Column, Entity, Index } from "typeorm";

@Index(
  "adminuser",
  ["adminuser", "statDate", "provider", "payType", "itemCd"],
  {}
)
@Index("index_order_basket", ["adminuser", "ordernum", "basketNum"], {})
@Entity("custom_momq_settlement_order", { schema: "makeshop" })
export class CustomMomqSettlementOrder {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("date", {
    primary: true,
    name: "stat_date",
    default: () => "'0000-00-00'",
  })
  statDate: string;

  @Column("char", {
    primary: true,
    name: "stat_type",
    length: 2,
    default: () => "'D'",
  })
  statType: string;

  @Column("char", { name: "stat_type_detail", length: 2, default: () => "'C'" })
  statTypeDetail: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("varchar", {
    primary: true,
    name: "pay_type",
    length: 10,
    default: () => "'PROD'",
  })
  payType: string;

  @Column("smallint", {
    primary: true,
    name: "basket_num",
    default: () => "'1'",
  })
  basketNum: number;

  @Column("int", { name: "prod_uid", unsigned: true, default: () => "'0'" })
  prodUid: number;

  @Column("int", { name: "item_cd", unsigned: true, default: () => "'0'" })
  itemCd: number;

  @Column("varchar", { name: "item_name", length: 255 })
  itemName: string;

  @Column("smallint", { name: "prod_stock", default: () => "'1'" })
  prodStock: number;

  @Column("int", { name: "prod_price", default: () => "'0'" })
  prodPrice: number;

  @Column("int", { name: "discount_price", default: () => "'0'" })
  discountPrice: number;

  @Column("int", { name: "coupon_discount_price", default: () => "'0'" })
  couponDiscountPrice: number;

  @Column("int", { name: "pay_price", default: () => "'0'" })
  payPrice: number;

  @Column("int", { name: "used_reserve", default: () => "'0'" })
  usedReserve: number;

  @Column("smallint", {
    name: "discount_price_rest",
    nullable: true,
    default: () => "'0'",
  })
  discountPriceRest: number | null;

  @Column("smallint", {
    name: "coupon_discount_price_rest",
    nullable: true,
    default: () => "'0'",
  })
  couponDiscountPriceRest: number | null;

  @Column("smallint", {
    name: "pay_price_rest",
    nullable: true,
    default: () => "'0'",
  })
  payPriceRest: number | null;

  @Column("smallint", {
    name: "used_reserve_rest",
    nullable: true,
    default: () => "'0'",
  })
  usedReserveRest: number | null;

  @Column("char", { name: "rest_use", length: 1, default: () => "'N'" })
  restUse: string;

  @Column("char", { name: "return_rest_use", length: 1, default: () => "'N'" })
  returnRestUse: string;

  @Column("enum", {
    name: "pay_path",
    enum: ["", "WEB", "MOBILE", "POWERAPP"],
    default: () => "'WEB'",
  })
  payPath: "" | "WEB" | "MOBILE" | "POWERAPP";

  @Column("varchar", { name: "tax_yn", length: 10, default: () => "'Y'" })
  taxYn: string;

  @Column("enum", {
    name: "stock_unit",
    enum: ["", "CS", "EA", "NONE"],
    default: () => "'NONE'",
  })
  stockUnit: "" | "CS" | "EA" | "NONE";

  @Column("char", { name: "paymethod", length: 1 })
  paymethod: string;

  @Column("enum", {
    name: "pay_except",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  payExcept: "" | "Y" | "N" | null;

  @Column("int", { name: "provider", unsigned: true, default: () => "'0'" })
  provider: number;

  @Column("float", {
    name: "provider_commission",
    unsigned: true,
    precision: 12,
    default: () => "'0'",
  })
  providerCommission: number;

  @Column("int", { name: "settlement_month", default: () => "'0'" })
  settlementMonth: number;

  @Column("datetime", { name: "check_date", nullable: true })
  checkDate: Date | null;

  @Column("datetime", { name: "reg_date", nullable: true })
  regDate: Date | null;
}
