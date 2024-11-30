import { Column, Entity, Index } from "typeorm";

@Index("date_regist", ["dateRegist"], {})
@Index("state", ["state"], {})
@Entity("interpark_goods", { schema: "makeshop" })
export class InterparkGoods {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("enum", {
    name: "state",
    enum: ["", "FAIL", "WAIT", "LOCK", "DONE"],
    default: () => "'WAIT'",
  })
  state: "" | "FAIL" | "WAIT" | "LOCK" | "DONE";

  @Column("enum", {
    name: "sale",
    enum: ["", "DISPLAY", "SOLDOUT", "PAUSE", "STOP"],
    default: () => "'DISPLAY'",
  })
  sale: "" | "DISPLAY" | "SOLDOUT" | "PAUSE" | "STOP";

  @Column("int", { name: "pref_id", unsigned: true, default: () => "'0'" })
  prefId: number;

  @Column("varchar", { name: "title", length: 200 })
  title: string;

  @Column("varchar", { name: "category_code", length: 100 })
  categoryCode: string;

  @Column("varchar", { name: "origin", length: 40 })
  origin: string;

  @Column("varchar", { name: "maker", length: 40 })
  maker: string;

  @Column("varchar", { name: "brand", length: 40 })
  brand: string;

  @Column("int", { name: "price_sell", unsigned: true, default: () => "'0'" })
  priceSell: number;

  @Column("int", { name: "stock", unsigned: true, default: () => "'0'" })
  stock: number;

  @Column("longtext", { name: "general_desc" })
  generalDesc: string;

  @Column("varchar", { name: "sel_opt_name", length: 255 })
  selOptName: string;

  @Column("longtext", { name: "prd_option" })
  prdOption: string;

  @Column("longtext", { name: "add_option" })
  addOption: string;

  @Column("varchar", { name: "in_option", length: 255 })
  inOption: string;

  @Column("varchar", { name: "zoom_img", length: 255 })
  zoomImg: string;

  @Column("varchar", { name: "detail_img", length: 255 })
  detailImg: string;

  @Column("bigint", { name: "prd_no", nullable: true, unsigned: true })
  prdNo: string | null;

  @Column("varchar", { name: "error_log", length: 255 })
  errorLog: string;

  @Column("varchar", { name: "request_url", length: 255 })
  requestUrl: string;

  @Column("datetime", {
    name: "date_regist",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateRegist: Date;

  @Column("datetime", {
    name: "date_update",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateUpdate: Date;
}
