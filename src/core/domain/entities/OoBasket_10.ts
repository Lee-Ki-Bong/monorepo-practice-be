import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_num", ["num"], {})
@Index("oo_delivery_fk", ["adminuser", "deliveryNum"], {})
@Index("oo_product", ["adminuser", "productUid", "prdOptionUid"], {})
@Index("oo_status", ["adminuser", "ordernum", "basketStatus"], {})
@Index(
  "oo_status_deli",
  ["adminuser", "ordernum", "deliveryNum", "basketStatus"],
  {}
)
@Index(
  "oo_status_issue",
  ["adminuser", "ordernum", "deliveryNum", "basketStatus", "issueStatus"],
  {}
)
@Index("ordernum", ["ordernum"], {})
@Entity("oo_basket_10", { schema: "makeshop" })
export class OoBasket_10 {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @PrimaryGeneratedColumn({ type: "int", name: "num" })
  num: number;

  @Column("varchar", { name: "delivery_num", length: 23 })
  deliveryNum: string;

  @Column("varchar", { name: "brandcode", length: 12 })
  brandcode: string;

  @Column("varchar", { name: "tempid", length: 32 })
  tempid: string;

  @Column("int", { name: "product_uid", unsigned: true, default: () => "'0'" })
  productUid: number;

  @Column("int", {
    name: "prd_option_uid",
    unsigned: true,
    default: () => "'0'",
  })
  prdOptionUid: number;

  @Column("varchar", { name: "product_name", length: 255 })
  productName: string;

  @Column("char", { name: "product_cate1", length: 3 })
  productCate1: string;

  @Column("char", { name: "basket_status", length: 3, default: () => "'S11'" })
  basketStatus: string;

  @Column("smallint", { name: "basket_stock", default: () => "'0'" })
  basketStock: number;

  @Column("int", { name: "sell_price", default: () => "'0'" })
  sellPrice: number;

  @Column("int", { name: "product_price", default: () => "'0'" })
  productPrice: number;

  @Column("int", {
    name: "product_reserve",
    unsigned: true,
    default: () => "'0'",
  })
  productReserve: number;

  @Column("int", { name: "option_price", default: () => "'0'" })
  optionPrice: number;

  @Column("enum", {
    name: "option_type",
    enum: ["", "NO", "PC", "PP", "PS"],
    default: () => "'NO'",
  })
  optionType: "" | "NO" | "PC" | "PP" | "PS";

  @Column("varchar", { name: "option_data", length: 255 })
  optionData: string;

  @Column("int", { name: "plus_price", default: () => "'0'" })
  plusPrice: number;

  @Column("int", { name: "plus_reserve", default: () => "'0'" })
  plusReserve: number;

  @Column("int", { name: "ext_deli_price", default: () => "'0'" })
  extDeliPrice: number;

  @Column("datetime", {
    name: "add_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  addDate: Date;

  @Column("enum", {
    name: "reserve_chk",
    enum: ["", "Y", "N", "C"],
    default: () => "'N'",
  })
  reserveChk: "" | "Y" | "N" | "C";

  @Column("enum", {
    name: "stock_chk",
    enum: ["", "HAVE", "NOT"],
    default: () => "'HAVE'",
  })
  stockChk: "" | "HAVE" | "NOT";

  @Column("varchar", { name: "addcode", length: 200 })
  addcode: string;

  @Column("int", { name: "b2b_uid", unsigned: true, default: () => "'0'" })
  b2bUid: number;

  @Column("int", { name: "provider", unsigned: true, default: () => "'0'" })
  provider: number;

  @Column("int", { name: "trade_num", unsigned: true, default: () => "'0'" })
  tradeNum: number;

  @Column("enum", { name: "trade_intype", enum: ["", "BEFORE", "AFTER"] })
  tradeIntype: "" | "BEFORE" | "AFTER";

  @Column("smallint", {
    name: "deli_delay",
    unsigned: true,
    default: () => "'0'",
  })
  deliDelay: number;

  @Column("enum", {
    name: "issue_status",
    enum: [
      "",
      "REFUND1",
      "REFUND3",
      "REFUND6",
      "REFUND7",
      "REFUNDC",
      "REPAY1",
      "REPAY7",
      "REPAYC",
    ],
  })
  issueStatus:
    | ""
    | "REFUND1"
    | "REFUND3"
    | "REFUND6"
    | "REFUND7"
    | "REFUNDC"
    | "REPAY1"
    | "REPAY7"
    | "REPAYC";

  @Column("enum", {
    name: "free_deli",
    enum: ["", "NONE", "EACH", "ALL"],
    default: () => "'NONE'",
  })
  freeDeli: "" | "NONE" | "EACH" | "ALL";

  @Column("char", { name: "old_status", length: 3 })
  oldStatus: string;

  @Column("varchar", { name: "old_delivery_num", length: 23 })
  oldDeliveryNum: string;

  @Column("varchar", { name: "hscode", length: 16 })
  hscode: string;

  @Column("int", {
    name: "product_supply",
    unsigned: true,
    default: () => "'0'",
  })
  productSupply: number;

  @Column("varchar", { name: "etctype", length: 255 })
  etctype: string;

  @Column("datetime", {
    name: "cancelask_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  cancelaskDate: Date;

  @Column("datetime", {
    name: "cancelend_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  cancelendDate: Date;

  @Column("char", { name: "cancel_reason", length: 1 })
  cancelReason: string;

  @Column("varchar", { name: "cancel_reason_memo", length: 255 })
  cancelReasonMemo: string;

  @Column("varchar", { name: "match_title", nullable: true, length: 255 })
  matchTitle: string | null;

  @Column("datetime", {
    name: "tradeask_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  tradeaskDate: Date;

  @Column("datetime", {
    name: "returnask_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  returnaskDate: Date;
}
