import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("basket_idx", ["productUid"], {})
@Index("idx_auto_num", ["num"], {})
@Index(
  "idx_smartpickup",
  ["adminuser", "smartpickupStoreUid", "smartpickupWishdate"],
  {}
)
@Index("oo_delivery_fk", ["adminuser", "deliveryNum"], {})
@Entity("oo_temp_basket", { schema: "makeshop" })
export class OoTempBasket {
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
    name: "product_buyprice",
    unsigned: true,
    default: () => "'0'",
  })
  productBuyprice: number;

  @Column("int", {
    name: "product_reserve",
    unsigned: true,
    default: () => "'0'",
  })
  productReserve: number;

  @Column("int", {
    name: "product_recmd_reserve",
    unsigned: true,
    default: () => "'0'",
  })
  productRecmdReserve: number;

  @Column("int", { name: "option_price", default: () => "'0'" })
  optionPrice: number;

  @Column("varchar", { name: "option_type", length: 12, default: () => "'NO'" })
  optionType: string;

  @Column("mediumtext", { name: "option_data" })
  optionData: string;

  @Column("mediumtext", { name: "api_option_data" })
  apiOptionData: string;

  @Column("mediumtext", { name: "single_option_data" })
  singleOptionData: string;

  @Column("int", { name: "plus_price", default: () => "'0'" })
  plusPrice: number;

  @Column("int", { name: "plus_reserve", default: () => "'0'" })
  plusReserve: number;

  @Column("int", { name: "plus_recmd_reserve", default: () => "'0'" })
  plusRecmdReserve: number;

  @Column("int", { name: "ext_deli_price", default: () => "'0'" })
  extDeliPrice: number;

  @Column("datetime", {
    name: "add_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  addDate: Date;

  @Column("datetime", {
    name: "tradein_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  tradeinDate: Date;

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

  @Column("varchar", { name: "issue_status", length: 12 })
  issueStatus: string;

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

  @Column("mediumtext", { name: "etctype" })
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

  @Column("int", {
    name: "smartpickup_store_uid",
    unsigned: true,
    default: () => "'0'",
  })
  smartpickupStoreUid: number;

  @Column("date", {
    name: "smartpickup_wishdate",
    default: () => "'0000-00-00'",
  })
  smartpickupWishdate: string;

  @Column("varchar", {
    name: "cart_type",
    length: 10,
    default: () => "'NORMAL'",
  })
  cartType: string;

  @Column("int", {
    name: "cart_type_uid",
    unsigned: true,
    default: () => "'0'",
  })
  cartTypeUid: number;
}
