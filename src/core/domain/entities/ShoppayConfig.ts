import { Column, Entity } from "typeorm";

@Entity("shoppay_config", { schema: "makeshop" })
export class ShoppayConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "sc_logo_type",
    enum: ["", "PAY", "SHOP"],
    default: () => "'PAY'",
  })
  scLogoType: "" | "PAY" | "SHOP";

  @Column("varchar", { name: "sc_logo", length: 255 })
  scLogo: string;

  @Column("varchar", {
    name: "sc_title",
    length: 20,
    default: () => "'샵페이'",
  })
  scTitle: string;

  @Column("varchar", { name: "sc_msg", length: 255 })
  scMsg: string;

  @Column("varchar", { name: "sc_skin", length: 10, default: () => "'gray'" })
  scSkin: string;

  @Column("enum", {
    name: "sc_use_card",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  scUseCard: "" | "Y" | "N";

  @Column("enum", {
    name: "sc_use_bank",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  scUseBank: "" | "Y" | "N";

  @Column("enum", {
    name: "sc_use_direct",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  scUseDirect: "" | "Y" | "N";

  @Column("char", {
    name: "sc_pc_button_type",
    length: 1,
    default: () => "'A'",
  })
  scPcButtonType: string;

  @Column("char", {
    name: "sc_mobile_button_type",
    length: 1,
    default: () => "'A'",
  })
  scMobileButtonType: string;

  @Column("varchar", { name: "sc_pc_button_image", length: 255 })
  scPcButtonImage: string;

  @Column("varchar", { name: "sc_mobile_button_image", length: 255 })
  scMobileButtonImage: string;

  @Column("varchar", { name: "sc_direct_comment", length: 255 })
  scDirectComment: string;

  @Column("enum", {
    name: "sc_buy_cart",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  scBuyCart: "" | "Y" | "N";

  @Column("enum", {
    name: "sc_use_swipe_pay",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  scUseSwipePay: "" | "Y" | "N";

  @Column("enum", {
    name: "sc_use_quick_pay",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  scUseQuickPay: "" | "Y" | "N";

  @Column("set", {
    name: "sc_quick_pay_page",
    enum: ["PRODUCT", "BASKET"],
    default: () => ["PRODUCT"],
  })
  scQuickPayPage: ("PRODUCT" | "BASKET")[];

  @Column("datetime", {
    name: "sc_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  scModDate: Date;
}
