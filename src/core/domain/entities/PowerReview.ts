import { Column, Entity, Index } from "typeorm";

@Index("index_fix", ["adminuser", "code", "uid", "fix"], {})
@Index("index_good", ["adminuser", "code", "good"], {})
@Index("index_order", ["adminuser", "code", "ordernum"], {})
@Index("index_product", ["adminuser", "code", "uid"], {})
@Index("index_regdate", ["adminuser", "code", "regdate"], {})
@Index("index_score", ["adminuser", "code", "score"], {})
@Index("index_user", ["adminuser", "code", "id"], {})
@Entity("power_review", { schema: "makeshop" })
export class PowerReview {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "code", length: 24 })
  code: string;

  @Column("varchar", { primary: true, name: "num1", length: 20 })
  num1: string;

  @Column("varchar", { primary: true, name: "num2", length: 5 })
  num2: string;

  @Column("varchar", { name: "id", length: 20 })
  id: string;

  @Column("int", { name: "uid", unsigned: true, default: () => "'0'" })
  uid: number;

  @Column("varchar", { name: "ordernum", length: 50 })
  ordernum: string;

  @Column("int", { name: "basketnum", unsigned: true, default: () => "'0'" })
  basketnum: number;

  @Column("varchar", { name: "hname", length: 30 })
  hname: string;

  @Column("varchar", { name: "passwd", nullable: true, length: 128 })
  passwd: string | null;

  @Column("longtext", { name: "content" })
  content: string;

  @Column("mediumtext", { name: "add_data" })
  addData: string;

  @Column("varchar", { name: "attach", length: 255 })
  attach: string;

  @Column("int", { name: "hit", unsigned: true, default: () => "'0'" })
  hit: number;

  @Column("int", { name: "comment", unsigned: true, default: () => "'0'" })
  comment: number;

  @Column("enum", {
    name: "display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  display: "" | "Y" | "N";

  @Column("enum", { name: "guest", enum: ["", "Y", "N"], default: () => "'N'" })
  guest: "" | "Y" | "N";

  @Column("enum", { name: "photo", enum: ["", "Y", "N"], default: () => "'N'" })
  photo: "" | "Y" | "N";

  @Column("int", { name: "good", unsigned: true, default: () => "'0'" })
  good: number;

  @Column("int", { name: "bad", unsigned: true, default: () => "'0'" })
  bad: number;

  @Column("int", { name: "fix", default: () => "'0'" })
  fix: number;

  @Column("int", { name: "best", unsigned: true, default: () => "'0'" })
  best: number;

  @Column("tinyint", { name: "score", default: () => "'5'" })
  score: number;

  @Column("tinyint", { name: "score_2", default: () => "'5'" })
  score_2: number;

  @Column("tinyint", { name: "score_3", default: () => "'5'" })
  score_3: number;

  @Column("tinyint", { name: "score_4", default: () => "'5'" })
  score_4: number;

  @Column("tinyint", { name: "score_5", default: () => "'5'" })
  score_5: number;

  @Column("enum", {
    name: "duplicate",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  duplicate: "" | "Y" | "N";

  @Column("enum", {
    name: "write_page",
    enum: ["", "MAIN", "DETAIL", "ORDER", "BOARD", "SMS", "ADMIN", "SIMPLE"],
    default: () => "'DETAIL'",
  })
  writePage:
    | ""
    | "MAIN"
    | "DETAIL"
    | "ORDER"
    | "BOARD"
    | "SMS"
    | "ADMIN"
    | "SIMPLE";

  @Column("enum", {
    name: "write_path",
    enum: ["", "PC", "MOBILE", "APP"],
    default: () => "'PC'",
  })
  writePath: "" | "PC" | "MOBILE" | "APP";

  @Column("varchar", {
    name: "write_referer",
    length: 10,
    default: () => "'SHOP'",
  })
  writeReferer: string;

  @Column("enum", {
    name: "confirm",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  confirm: "" | "Y" | "N";

  @Column("enum", { name: "staff", enum: ["", "Y", "N"], default: () => "'N'" })
  staff: "" | "Y" | "N";

  @Column("enum", { name: "first", enum: ["", "Y", "N"], default: () => "'N'" })
  first: "" | "Y" | "N";

  @Column("enum", { name: "old", enum: ["", "Y", "N"], default: () => "'N'" })
  old: "" | "Y" | "N";

  @Column("enum", {
    name: "bookmark_type",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  bookmarkType: "" | "Y" | "N";

  @Column("char", { name: "reserve_check", length: 1, default: () => "'0'" })
  reserveCheck: string;

  @Column("int", { name: "reserve", unsigned: true, default: () => "'0'" })
  reserve: number;

  @Column("datetime", {
    name: "reserve_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  reserveDate: Date;

  @Column("enum", {
    name: "reserve_confirm",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  reserveConfirm: "" | "Y" | "N";

  @Column("datetime", {
    name: "reserve_confirm_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  reserveConfirmDate: Date;

  @Column("int", { name: "point", unsigned: true, default: () => "'0'" })
  point: number;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;

  @Column("datetime", {
    name: "sync_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  syncDate: Date;

  @Column("datetime", {
    name: "coupon_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  couponDate: Date;

  @Column("char", { name: "evaluation", length: 1, default: () => "'N'" })
  evaluation: string;
}
