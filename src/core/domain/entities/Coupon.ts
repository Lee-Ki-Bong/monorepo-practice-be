import { Column, Entity, Index } from "typeorm";

@Index("coupon", ["adminuser", "date"], {})
@Entity("coupon", { schema: "makeshop" })
export class Coupon {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "couponnum", length: 8 })
  couponnum: string;

  @Column("varchar", { name: "subject", nullable: true, length: 100 })
  subject: string | null;

  @Column("varchar", { name: "content", nullable: true, length: 255 })
  content: string | null;

  @Column("int", {
    name: "minprice",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  minprice: number | null;

  @Column("mediumtext", { name: "brandcode", nullable: true })
  brandcode: string | null;

  @Column("mediumtext", { name: "buy_brandcode", nullable: true })
  buyBrandcode: string | null;

  @Column("varchar", { name: "branduid", length: 255 })
  branduid: string;

  @Column("char", {
    name: "minus",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  minus: string | null;

  @Column("char", {
    name: "reservepay",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  reservepay: string | null;

  @Column("varchar", { name: "user", nullable: true, length: 4 })
  user: string | null;

  @Column("char", { name: "sale", nullable: true, length: 1 })
  sale: string | null;

  @Column("mediumint", {
    name: "ordercnt",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  ordercnt: number | null;

  @Column("char", {
    name: "onecoupon",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  onecoupon: string | null;

  @Column("float", {
    name: "salemoney",
    nullable: true,
    precision: 12,
    default: () => "'0'",
  })
  salemoney: number | null;

  @Column("bigint", {
    name: "maxprice",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  maxprice: string | null;

  @Column("bigint", {
    name: "orderprice",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderprice: string | null;

  @Column("bigint", {
    name: "orderprice2",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderprice2: string | null;

  @Column("char", {
    name: "auto",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  auto: string | null;

  @Column("char", {
    name: "display",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  display: string | null;

  @Column("enum", {
    name: "display_path",
    nullable: true,
    enum: ["", "ALL", "PC", "MOBILE"],
    default: () => "'ALL'",
  })
  displayPath: "" | "ALL" | "PC" | "MOBILE" | null;

  @Column("varchar", { name: "display_day", length: 30 })
  displayDay: string;

  @Column("char", {
    name: "detail",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  detail: string | null;

  @Column("char", {
    name: "useto",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  useto: string | null;

  @Column("char", {
    name: "usesale",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  usesale: string | null;

  @Column("char", {
    name: "basket",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  basket: string | null;

  @Column("mediumint", {
    name: "mfloor",
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  mfloor: number | null;

  @Column("char", {
    name: "useid",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  useid: string | null;

  @Column("char", {
    name: "bankonly",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  bankonly: string | null;

  @Column("enum", {
    name: "proreserve",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  proreserve: "" | "Y" | "N" | null;

  @Column("char", {
    name: "birth",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  birth: string | null;

  @Column("enum", {
    name: "totalcheck",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  totalcheck: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "reg_id",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  regId: "" | "Y" | "N" | null;

  @Column("bigint", {
    name: "totalnumber",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  totalnumber: string | null;

  @Column("bigint", {
    name: "usenumber",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  usenumber: string | null;

  @Column("varchar", { name: "reg_date", nullable: true, length: 10 })
  regDate: string | null;

  @Column("varchar", { name: "res_date", nullable: true, length: 10 })
  resDate: string | null;

  @Column("varchar", { name: "end_date", nullable: true, length: 10 })
  endDate: string | null;

  @Column("varchar", { name: "ordersdate", nullable: true, length: 14 })
  ordersdate: string | null;

  @Column("varchar", { name: "orderedate", nullable: true, length: 14 })
  orderedate: string | null;

  @Column("enum", {
    name: "delicount",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  delicount: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "coupaymethod",
    nullable: true,
    enum: ["", "N", "C", "B"],
    default: () => "'N'",
  })
  coupaymethod: "" | "N" | "C" | "B" | null;

  @Column("varchar", { name: "date", nullable: true, length: 14 })
  date: string | null;

  @Column("varchar", { name: "playdate", nullable: true, length: 14 })
  playdate: string | null;

  @Column("varchar", { name: "date_display", length: 4, default: () => "'A1'" })
  dateDisplay: string;

  @Column("enum", {
    name: "anniversary1",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  anniversary1: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "anniversary2",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  anniversary2: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "anniversary3",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  anniversary3: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "group_birth",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  groupBirth: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "skin_type",
    nullable: true,
    enum: ["", "O", "N"],
    default: () => "'O'",
  })
  skinType: "" | "O" | "N" | null;

  @Column("enum", {
    name: "coupontype",
    enum: ["", "P", "O"],
    default: () => "'O'",
  })
  coupontype: "" | "P" | "O";

  @Column("enum", {
    name: "multiple",
    enum: ["", "O", "M"],
    default: () => "'O'",
  })
  multiple: "" | "O" | "M";

  @Column("enum", {
    name: "paycondition",
    enum: ["", "PP", "OP"],
    default: () => "'OP'",
  })
  paycondition: "" | "PP" | "OP";

  @Column("enum", {
    name: "use_m_img",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  useMImg: "" | "Y" | "N";

  @Column("enum", {
    name: "benefit_type",
    enum: ["", "BASKET", "ORDER"],
    default: () => "'BASKET'",
  })
  benefitType: "" | "BASKET" | "ORDER";

  @Column("enum", {
    name: "use_place",
    enum: ["", "ALL", "OFFLINE", "ONLINE"],
    default: () => "'ALL'",
  })
  usePlace: "" | "ALL" | "OFFLINE" | "ONLINE";

  @Column("enum", {
    name: "delicouponok",
    nullable: true,
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  delicouponok: "" | "N" | "Y" | null;

  @Column("enum", {
    name: "prd_opt_discount",
    nullable: true,
    enum: ["", "N", "Y"],
    default: () => "'Y'",
  })
  prdOptDiscount: "" | "N" | "Y" | null;

  @Column("enum", {
    name: "user_modify",
    nullable: true,
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  userModify: "" | "N" | "Y" | null;

  @Column("varchar", { name: "offline_shopcode", length: 255 })
  offlineShopcode: string;

  @Column("set", {
    name: "use_device",
    enum: ["PC", "MOBILE", "APP"],
    default: () => ["PC", "MOBILE", "APP"],
  })
  useDevice: ("PC" | "MOBILE" | "APP")[];

  @Column("enum", {
    name: "limit_period",
    enum: ["", "N", "O", "L"],
    default: () => "'N'",
  })
  limitPeriod: "" | "N" | "O" | "L";

  @Column("smallint", {
    name: "limit_month",
    unsigned: true,
    default: () => "'0'",
  })
  limitMonth: number;

  @Column("enum", {
    name: "first_buy_option",
    nullable: true,
    enum: ["", "pay", "delivery"],
  })
  firstBuyOption: "" | "pay" | "delivery" | null;

  @Column("enum", {
    name: "open_malltalk",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  openMalltalk: "" | "N" | "Y";

  @Column("enum", {
    name: "group_discount_set",
    nullable: true,
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  groupDiscountSet: "" | "N" | "Y" | null;

  @Column("enum", {
    name: "used_sms",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  usedSms: "" | "N" | "Y";

  @Column("enum", {
    name: "used_reeket",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  usedReeket: "" | "N" | "Y";

  @Column("enum", {
    name: "b2b_benefit_type",
    enum: ["", "PARTNER", "SHOP"],
    default: () => "'PARTNER'",
  })
  b2bBenefitType: "" | "PARTNER" | "SHOP";

  @Column("char", { name: "purpose", length: 3 })
  purpose: string;
}
