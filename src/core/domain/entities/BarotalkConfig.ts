import { Column, Entity } from "typeorm";

@Entity("barotalk_config", { schema: "makeshop" })
export class BarotalkConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "barotalk_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  barotalkUse: "" | "Y" | "N";

  @Column("varchar", { name: "channel_logo", length: 200 })
  channelLogo: string;

  @Column("varchar", { name: "business_week", length: 50 })
  businessWeek: string;

  @Column("varchar", { name: "business_time", length: 20 })
  businessTime: string;

  @Column("enum", {
    name: "event_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  eventUse: "" | "Y" | "N";

  @Column("varchar", { name: "use_link", length: 255 })
  useLink: string;

  @Column("enum", {
    name: "receive_alram",
    enum: ["", "Active", "Inactive"],
    default: () => "'Inactive'",
  })
  receiveAlram: "" | "Active" | "Inactive";

  @Column("enum", {
    name: "receive_menu_use",
    enum: ["", "Active", "Inactive"],
    default: () => "'Inactive'",
  })
  receiveMenuUse: "" | "Active" | "Inactive";

  @Column("varchar", { name: "receive_menu_list", length: 120 })
  receiveMenuList: string;

  @Column("enum", {
    name: "cancel_use",
    enum: ["", "Active", "Inactive"],
    default: () => "'Inactive'",
  })
  cancelUse: "" | "Active" | "Inactive";

  @Column("varchar", { name: "cancel_condition", length: 30 })
  cancelCondition: string;

  @Column("varchar", { name: "cancel_order_condition", length: 50 })
  cancelOrderCondition: string;

  @Column("enum", {
    name: "cancel_order_condition_1",
    enum: ["", "P", "S", "C"],
    default: () => "'C'",
  })
  cancelOrderCondition_1: "" | "P" | "S" | "C";

  @Column("enum", {
    name: "exchange_use",
    enum: ["", "Active", "Inactive"],
    default: () => "'Inactive'",
  })
  exchangeUse: "" | "Active" | "Inactive";

  @Column("varchar", { name: "exchange_order_condition", length: 100 })
  exchangeOrderCondition: string;

  @Column("set", {
    name: "exchange_product_range",
    enum: ["same", "other", "none"],
    default: () => ["none"],
  })
  exchangeProductRange: ("same" | "other" | "none")[];

  @Column("varchar", { name: "exchange_board_code", length: 30 })
  exchangeBoardCode: string;

  @Column("enum", {
    name: "refund_use",
    enum: ["", "Active", "Inactive"],
    default: () => "'Inactive'",
  })
  refundUse: "" | "Active" | "Inactive";

  @Column("varchar", { name: "refund_board_code", length: 30 })
  refundBoardCode: string;

  @Column("enum", {
    name: "simple_delivery_use",
    enum: ["", "Active", "Inactive"],
    default: () => "'Inactive'",
  })
  simpleDeliveryUse: "" | "Active" | "Inactive";

  @Column("char", { name: "accept_term_pay", length: 2, default: () => "'7'" })
  acceptTermPay: string;

  @Column("char", {
    name: "accept_term_delivery",
    length: 2,
    default: () => "'7'",
  })
  acceptTermDelivery: string;

  @Column("char", {
    name: "prd_detail_button",
    length: 2,
    default: () => "'1'",
  })
  prdDetailButton: string;

  @Column("enum", {
    name: "wing_banner_button_use",
    enum: ["", "default", "registry"],
    default: () => "'default'",
  })
  wingBannerButtonUse: "" | "default" | "registry";

  @Column("char", { name: "wing_banner_button", length: 2 })
  wingBannerButton: string;

  @Column("varchar", { name: "welcome_on", length: 255 })
  welcomeOn: string;

  @Column("varchar", { name: "welcome_off", length: 255 })
  welcomeOff: string;

  @Column("varchar", { name: "autotalk_on", length: 255 })
  autotalkOn: string;

  @Column("char", {
    name: "autotalk_on_aftertime",
    length: 2,
    default: () => "'2'",
  })
  autotalkOnAftertime: string;

  @Column("varchar", { name: "autotalk_on_unanswer", length: 255 })
  autotalkOnUnanswer: string;

  @Column("varchar", { name: "autotalk_off", length: 255 })
  autotalkOff: string;

  @Column("varchar", { name: "add_refund_type", length: 20 })
  addRefundType: string;

  @Column("varchar", { name: "bankinfo", length: 255 })
  bankinfo: string;

  @Column("varchar", { name: "cancel_message", length: 200 })
  cancelMessage: string;

  @Column("varchar", { name: "exchange_message", length: 200 })
  exchangeMessage: string;

  @Column("varchar", { name: "refund_message", length: 200 })
  refundMessage: string;

  @Column("enum", {
    name: "receive_push",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  receivePush: "" | "Y" | "N";

  @Column("varchar", { name: "push_condition", length: 200 })
  pushCondition: string;

  @Column("enum", {
    name: "faq_use",
    enum: ["", "Active", "Inactive"],
    default: () => "'Inactive'",
  })
  faqUse: "" | "Active" | "Inactive";

  @Column("enum", {
    name: "video_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  videoUse: "" | "Y" | "N";
}
