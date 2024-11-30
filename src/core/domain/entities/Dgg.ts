import { Column, Entity } from "typeorm";

@Entity("dgg", { schema: "makeshop" })
export class Dgg {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "dgg_use",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  dggUse: "" | "N" | "Y";

  @Column("enum", {
    name: "okdgg_agree",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  okdggAgree: "" | "Y" | "N";

  @Column("enum", {
    name: "okdgg_display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  okdggDisplay: "" | "Y" | "N";

  @Column("enum", {
    name: "dgg_use_bar",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  dggUseBar: "" | "N" | "Y";

  @Column("enum", {
    name: "member_use_bar",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  memberUseBar: "" | "Y" | "N";

  @Column("enum", {
    name: "eng_use_bar",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  engUseBar: "" | "Y" | "N";

  @Column("enum", {
    name: "lang_set",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  langSet: "" | "Y" | "N" | null;

  @Column("varchar", { name: "dgg_name", length: 100 })
  dggName: string;

  @Column("mediumtext", { name: "dgg_detail" })
  dggDetail: string;

  @Column("varchar", { name: "dgg_mail", length: 40 })
  dggMail: string;

  @Column("varchar", { name: "dgg_tel", length: 30 })
  dggTel: string;

  @Column("varchar", { name: "user_tel", length: 30 })
  userTel: string;

  @Column("varchar", { name: "user_name", length: 30 })
  userName: string;

  @Column("varchar", { name: "bar_theme", length: 10 })
  barTheme: string;

  @Column("char", { name: "bar_top_theme", length: 2, default: () => "'0'" })
  barTopTheme: string;

  @Column("char", { name: "bar_mini_theme", length: 2, default: () => "'1'" })
  barMiniTheme: string;

  @Column("char", { name: "bar_btn_theme", length: 2, default: () => "'0'" })
  barBtnTheme: string;

  @Column("char", { name: "bar_color_theme", length: 1, default: () => "'0'" })
  barColorTheme: string;

  @Column("char", {
    name: "soldout_btn_theme",
    length: 1,
    default: () => "'0'",
  })
  soldoutBtnTheme: string;

  @Column("enum", {
    name: "bar_position",
    enum: ["", "L", "R"],
    default: () => "'L'",
  })
  barPosition: "" | "L" | "R";

  @Column("int", { name: "bar_margin", unsigned: true, default: () => "'0'" })
  barMargin: number;

  @Column("char", { name: "bar_move", length: 1, default: () => "'B'" })
  barMove: string;

  @Column("text", { name: "deny_category" })
  denyCategory: string;

  @Column("text", { name: "deny_uid" })
  denyUid: string;

  @Column("enum", {
    name: "exchange",
    enum: ["", "fixed", "linkage", "linkage_add"],
    default: () => "'linkage'",
  })
  exchange: "" | "fixed" | "linkage" | "linkage_add";

  @Column("float", {
    name: "exchange_rate",
    precision: 12,
    default: () => "'0'",
  })
  exchangeRate: number;

  @Column("float", {
    name: "exchange_add",
    precision: 12,
    default: () => "'0'",
  })
  exchangeAdd: number;

  @Column("mediumint", {
    name: "wholesale_price",
    nullable: true,
    unsigned: true,
  })
  wholesalePrice: number | null;

  @Column("enum", {
    name: "wholesale_use",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  wholesaleUse: "" | "Y" | "N" | null;

  @Column("text", { name: "deny_wholesale_cate", nullable: true })
  denyWholesaleCate: string | null;

  @Column("text", { name: "deny_wholesale_uid", nullable: true })
  denyWholesaleUid: string | null;

  @Column("date", { name: "sale_start_date", nullable: true })
  saleStartDate: string | null;

  @Column("date", { name: "sale_end_date", nullable: true })
  saleEndDate: string | null;

  @Column("mediumint", { name: "sale_price", nullable: true, unsigned: true })
  salePrice: number | null;

  @Column("varchar", { name: "sale_unit", nullable: true, length: 10 })
  saleUnit: string | null;

  @Column("enum", {
    name: "sale_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  saleUse: "" | "Y" | "N";

  @Column("enum", {
    name: "sale_duplic",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  saleDuplic: "" | "Y" | "N";

  @Column("text", { name: "deny_sale_cate", nullable: true })
  denySaleCate: string | null;

  @Column("text", { name: "deny_sale_uid", nullable: true })
  denySaleUid: string | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;
}
