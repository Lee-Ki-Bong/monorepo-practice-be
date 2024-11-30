import { Column, Entity, Index } from "typeorm";

@Index("log_date", ["adminuser", "logDate"], {})
@Index("uid", ["adminuser", "productUid"], {})
@Entity("product_count_stats", { schema: "makeshop" })
export class ProductCountStats {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("date", {
    primary: true,
    name: "log_date",
    default: () => "'0000-00-00'",
  })
  logDate: string;

  @Column("enum", {
    primary: true,
    name: "link_path",
    enum: ["", "SHOP", "NAVER", "DAUM", "GOOGLE"],
    default: () => "'SHOP'",
  })
  linkPath: "" | "SHOP" | "NAVER" | "DAUM" | "GOOGLE";

  @Column("int", {
    primary: true,
    name: "product_uid",
    unsigned: true,
    default: () => "'0'",
  })
  productUid: number;

  @Column("int", { name: "view_cnt_pc", unsigned: true, default: () => "'0'" })
  viewCntPc: number;

  @Column("int", {
    name: "view_cnt_mobile",
    unsigned: true,
    default: () => "'0'",
  })
  viewCntMobile: number;

  @Column("int", { name: "view_cnt_app", unsigned: true, default: () => "'0'" })
  viewCntApp: number;

  @Column("int", {
    name: "view_cnt_clickmap_pc",
    unsigned: true,
    default: () => "'0'",
  })
  viewCntClickmapPc: number;

  @Column("int", {
    name: "view_cnt_clickmap_mobile",
    unsigned: true,
    default: () => "'0'",
  })
  viewCntClickmapMobile: number;

  @Column("int", {
    name: "basket_cnt_pc",
    unsigned: true,
    default: () => "'0'",
  })
  basketCntPc: number;

  @Column("int", {
    name: "basket_cnt_mobile",
    unsigned: true,
    default: () => "'0'",
  })
  basketCntMobile: number;

  @Column("int", {
    name: "basket_cnt_app",
    unsigned: true,
    default: () => "'0'",
  })
  basketCntApp: number;

  @Column("int", { name: "sell_cnt_pc", unsigned: true, default: () => "'0'" })
  sellCntPc: number;

  @Column("int", {
    name: "sell_cnt_mobile",
    unsigned: true,
    default: () => "'0'",
  })
  sellCntMobile: number;

  @Column("int", { name: "sell_cnt_app", unsigned: true, default: () => "'0'" })
  sellCntApp: number;

  @Column("int", { name: "order_cnt_pc", unsigned: true, default: () => "'0'" })
  orderCntPc: number;

  @Column("int", {
    name: "order_cnt_mobile",
    unsigned: true,
    default: () => "'0'",
  })
  orderCntMobile: number;

  @Column("int", {
    name: "order_cnt_app",
    unsigned: true,
    default: () => "'0'",
  })
  orderCntApp: number;

  @Column("int", {
    name: "order_price_pc",
    unsigned: true,
    default: () => "'0'",
  })
  orderPricePc: number;

  @Column("int", {
    name: "order_price_mobile",
    unsigned: true,
    default: () => "'0'",
  })
  orderPriceMobile: number;

  @Column("int", {
    name: "order_price_app",
    unsigned: true,
    default: () => "'0'",
  })
  orderPriceApp: number;

  @Column("mediumtext", { name: "order_collection" })
  orderCollection: string;
}
