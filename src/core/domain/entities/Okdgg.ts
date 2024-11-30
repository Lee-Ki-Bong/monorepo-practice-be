import { Column, Entity } from "typeorm";

@Entity("okdgg", { schema: "makeshop" })
export class Okdgg {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "confirm",
    enum: ["", "JOIN", "JUDGE", "ENKEY", "COMPLETE", "SECREQUEST", "SECEDE"],
    default: () => "'JOIN'",
  })
  confirm:
    | ""
    | "JOIN"
    | "JUDGE"
    | "ENKEY"
    | "COMPLETE"
    | "SECREQUEST"
    | "SECEDE";

  @Column("enum", {
    name: "mei_confirm",
    enum: ["", "JOIN", "JUDGE", "ENKEY", "COMPLETE", "SECREQUEST", "SECEDE"],
    default: () => "'JOIN'",
  })
  meiConfirm:
    | ""
    | "JOIN"
    | "JUDGE"
    | "ENKEY"
    | "COMPLETE"
    | "SECREQUEST"
    | "SECEDE";

  @Column("varchar", { name: "apikey", length: 50 })
  apikey: string;

  @Column("varchar", { name: "mei_apikey", length: 50 })
  meiApikey: string;

  @Column("enum", {
    name: "okdgg_use_bar",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  okdggUseBar: "" | "Y" | "N";

  @Column("char", { name: "bar_top_theme", length: 2, default: () => "'1'" })
  barTopTheme: string;

  @Column("char", { name: "bar_mini_theme", length: 2, default: () => "'1'" })
  barMiniTheme: string;

  @Column("char", { name: "bar_btn_theme", length: 2, default: () => "'1'" })
  barBtnTheme: string;

  @Column("char", { name: "bar_color_theme", length: 2, default: () => "'1'" })
  barColorTheme: string;

  @Column("enum", {
    name: "bar_position",
    enum: ["", "L", "R"],
    default: () => "'L'",
  })
  barPosition: "" | "L" | "R";

  @Column("int", { name: "bar_margin", unsigned: true, default: () => "'0'" })
  barMargin: number;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;

  @Column("char", {
    name: "bar_btn_mobile_theme",
    length: 1,
    default: () => "'1'",
  })
  barBtnMobileTheme: string;
}
