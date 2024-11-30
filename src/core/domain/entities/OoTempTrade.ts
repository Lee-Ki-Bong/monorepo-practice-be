import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_temp_uid", ["tempUid"], {})
@Entity("oo_temp_trade", { schema: "makeshop" })
export class OoTempTrade {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", {
    primary: true,
    name: "basket_num",
    unsigned: true,
    default: () => "'0'",
  })
  basketNum: number;

  @PrimaryGeneratedColumn({ type: "int", name: "temp_uid", unsigned: true })
  tempUid: number;

  @Column("enum", {
    name: "trade_intype",
    enum: ["", "BEFORE", "AFTER"],
    default: () => "'BEFORE'",
  })
  tradeIntype: "" | "BEFORE" | "AFTER";

  @Column("int", { name: "product_uid", unsigned: true, default: () => "'0'" })
  productUid: number;

  @Column("varchar", { name: "brandcode", length: 12 })
  brandcode: string;

  @Column("bigint", {
    name: "prd_option_uid",
    unsigned: true,
    default: () => "'0'",
  })
  prdOptionUid: string;

  @Column("varchar", { name: "product_name", length: 255 })
  productName: string;

  @Column("mediumint", {
    name: "basket_stock",
    unsigned: true,
    default: () => "'0'",
  })
  basketStock: number;

  @Column("varchar", { name: "option_type", length: 12, default: () => "'NO'" })
  optionType: string;

  @Column("varchar", { name: "optioncode", length: 255 })
  optioncode: string;

  @Column("int", { name: "product_price", default: () => "'0'" })
  productPrice: number;

  @Column("int", { name: "option_price", default: () => "'0'" })
  optionPrice: number;

  @Column("int", { name: "plus_price", default: () => "'0'" })
  plusPrice: number;

  @Column("int", { name: "sell_price", default: () => "'0'" })
  sellPrice: number;

  @Column("int", { name: "perioddc_price", default: () => "'0'" })
  perioddcPrice: number;

  @Column("int", { name: "group_prd_discount", default: () => "'0'" })
  groupPrdDiscount: number;

  @Column("int", { name: "admin_dc", default: () => "'0'" })
  adminDc: number;

  @Column("mediumint", { name: "reserve", default: () => "'0'" })
  reserve: number;

  @Column("bigint", {
    name: "product_reserve",
    unsigned: true,
    default: () => "'0'",
  })
  productReserve: string;

  @Column("int", {
    name: "product_recmd_reserve",
    unsigned: true,
    default: () => "'0'",
  })
  productRecmdReserve: number;

  @Column("mediumint", { name: "plus_reserve", default: () => "'0'" })
  plusReserve: number;

  @Column("int", { name: "plus_recmd_reserve", default: () => "'0'" })
  plusRecmdReserve: number;

  @Column("varchar", { name: "used_coupon", length: 40 })
  usedCoupon: string;

  @Column("mediumtext", { name: "option_data" })
  optionData: string;

  @Column("mediumtext", { name: "api_option_data" })
  apiOptionData: string;

  @Column("mediumtext", { name: "single_option_data" })
  singleOptionData: string;

  @Column("mediumtext", { name: "etctype" })
  etctype: string;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;
}
