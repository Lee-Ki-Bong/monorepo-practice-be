import { Column, Entity } from "typeorm";

@Entity("talkcheckout_info", { schema: "makeshop" })
export class TalkcheckoutInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "enable",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  enable: "" | "Y" | "N";

  @Column("enum", {
    name: "mobile_enable",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mobileEnable: "" | "Y" | "N";

  @Column("enum", { name: "version", enum: ["", "1"], default: () => "'1'" })
  version: "" | "1";

  @Column("varchar", { name: "tc_id", length: 50 })
  tcId: string;

  @Column("varchar", { name: "button_id", length: 50 })
  buttonId: string;

  @Column("char", { name: "pc_button_type", length: 1 })
  pcButtonType: string;

  @Column("char", { name: "mobile_button_type", length: 2 })
  mobileButtonType: string;

  @Column("char", { name: "dark_type", length: 1, default: () => "'N'" })
  darkType: string;

  @Column("mediumtext", { name: "deny_cate_code", nullable: true })
  denyCateCode: string | null;

  @Column("mediumtext", { name: "deny_product_uid", nullable: true })
  denyProductUid: string | null;

  @Column("enum", {
    name: "connect_order",
    enum: ["", "Y", "N", "A"],
    default: () => "'N'",
  })
  connectOrder: "" | "Y" | "N" | "A";

  @Column("enum", {
    name: "connect_stock",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  connectStock: "" | "Y" | "N";

  @Column("enum", {
    name: "connect_review",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  connectReview: "" | "Y" | "N";

  @Column("enum", {
    name: "hide_review",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  hideReview: "" | "Y" | "N";

  @Column("enum", {
    name: "connect_review_board",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  connectReviewBoard: "" | "Y" | "N";

  @Column("enum", {
    name: "connect_review_comment",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  connectReviewComment: "" | "Y" | "N";

  @Column("enum", {
    name: "connect_inquiry",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  connectInquiry: "" | "Y" | "N";

  @Column("enum", {
    name: "hide_inquiry",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  hideInquiry: "" | "Y" | "N";

  @Column("enum", {
    name: "set_review_content_replace_title",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  setReviewContentReplaceTitle: "" | "Y" | "N";

  @Column("enum", {
    name: "set_review_board_title_content_replace",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  setReviewBoardTitleContentReplace: "" | "Y" | "N";

  @Column("enum", {
    name: "order_cart",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  orderCart: "" | "Y" | "N";

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "upd_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  updDate: Date;
}
