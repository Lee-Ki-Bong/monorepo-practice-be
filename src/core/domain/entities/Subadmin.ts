import { Column, Entity } from "typeorm";

@Entity("subadmin", { schema: "makeshop" })
export class Subadmin {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("varchar", { name: "password", nullable: true, length: 128 })
  password: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 30 })
  name: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 50 })
  email: string | null;

  @Column("char", {
    name: "adminok",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  adminok: string | null;

  @Column("char", {
    name: "type",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  type: string | null;

  @Column("varchar", { name: "ipaddress", nullable: true, length: 250 })
  ipaddress: string | null;

  @Column("char", {
    name: "makeshop",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  makeshop: string | null;

  @Column("char", {
    name: "main",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  main: string | null;

  @Column("char", {
    name: "product",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  product: string | null;

  @Column("char", {
    name: "design",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  design: string | null;

  @Column("char", {
    name: "orders",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  orders: string | null;

  @Column("char", {
    name: "users",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  users: string | null;

  @Column("char", {
    name: "userpromotion",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  userpromotion: string | null;

  @Column("char", {
    name: "crm",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  crm: string | null;

  @Column("char", {
    name: "event",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  event: string | null;

  @Column("char", { name: "mail", nullable: true, length: 1 })
  mail: string | null;

  @Column("char", {
    name: "naver",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  naver: string | null;

  @Column("char", {
    name: "malltb",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  malltb: string | null;

  @Column("char", {
    name: "count",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  count: string | null;

  @Column("char", {
    name: "board",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  board: string | null;

  @Column("char", {
    name: "prodel",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  prodel: string | null;

  @Column("char", {
    name: "userdel",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  userdel: string | null;

  @Column("char", {
    name: "orderdel",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  orderdel: string | null;

  @Column("char", {
    name: "reservein",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  reservein: string | null;

  @Column("char", {
    name: "couponin",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  couponin: string | null;

  @Column("char", {
    name: "bankok",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  bankok: string | null;

  @Column("char", { name: "repayok", length: 1, default: () => "'Y'" })
  repayok: string;

  @Column("char", {
    name: "cardok",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  cardok: string | null;

  @Column("char", {
    name: "ordercan",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  ordercan: string | null;

  @Column("char", {
    name: "userupdate",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  userupdate: string | null;

  @Column("char", {
    name: "userdown",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  userdown: string | null;

  @Column("enum", {
    name: "smssend",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  smssend: "" | "N" | "Y";

  @Column("enum", {
    name: "emailsend",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  emailsend: "" | "N" | "Y";

  @Column("enum", {
    name: "sms_cal",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  smsCal: "" | "N" | "Y";

  @Column("char", {
    name: "priceok",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  priceok: string | null;

  @Column("char", {
    name: "prodown",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  prodown: string | null;

  @Column("char", {
    name: "ordown",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  ordown: string | null;

  @Column("varchar", { name: "supply", length: 255, default: () => "'N'" })
  supply: string;

  @Column("char", {
    name: "beebank",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  beebank: string | null;

  @Column("char", {
    name: "beebankok",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  beebankok: string | null;

  @Column("enum", {
    name: "beebankexcel",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  beebankexcel: "" | "Y" | "N";

  @Column("enum", {
    name: "beebankin",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  beebankin: "" | "N" | "Y";

  @Column("enum", {
    name: "beebankout",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  beebankout: "" | "N" | "Y";

  @Column("char", { name: "emoney", length: 1, default: () => "'N'" })
  emoney: string;

  @Column("enum", {
    name: "prodisplay",
    enum: ["", "N", "Y"],
    default: () => "'Y'",
  })
  prodisplay: "" | "N" | "Y";

  @Column("char", {
    name: "provider",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  provider: string | null;

  @Column("char", {
    name: "boardset",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  boardset: string | null;

  @Column("char", {
    name: "usernote",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  usernote: string | null;

  @Column("char", {
    name: "refund_act",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  refundAct: string | null;

  @Column("enum", {
    name: "refund_act_B",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  refundActB: "" | "Y" | "N" | null;

  @Column("char", {
    name: "ipin",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  ipin: string | null;

  @Column("enum", { name: "point", enum: ["", "N", "Y"], default: () => "'N'" })
  point: "" | "N" | "Y";

  @Column("varchar", {
    name: "board_reply",
    nullable: true,
    length: 255,
    default: () => "'N'",
  })
  boardReply: string | null;

  @Column("varchar", { name: "tempkey", nullable: true, length: 32 })
  tempkey: string | null;

  @Column("varchar", { name: "auth_key", nullable: true, length: 255 })
  authKey: string | null;

  @Column("varchar", { name: "loginip", nullable: true, length: 15 })
  loginip: string | null;

  @Column("varchar", { name: "workdate", nullable: true, length: 14 })
  workdate: string | null;

  @Column("char", {
    name: "worktime",
    nullable: true,
    length: 2,
    default: () => "'0'",
  })
  worktime: string | null;

  @Column("varchar", { name: "logincheckip", nullable: true, length: 15 })
  logincheckip: string | null;

  @Column("varchar", { name: "logindate", nullable: true, length: 14 })
  logindate: string | null;

  @Column("varchar", { name: "changepassdate", nullable: true, length: 8 })
  changepassdate: string | null;

  @Column("varchar", { name: "changepassdelay", length: 10 })
  changepassdelay: string;

  @Column("varchar", { name: "subjoindate", nullable: true, length: 14 })
  subjoindate: string | null;

  @Column("varchar", { name: "changedate", nullable: true, length: 14 })
  changedate: string | null;

  @Column("char", { name: "cti", nullable: true, length: 1 })
  cti: string | null;

  @Column("varchar", { name: "extension", nullable: true, length: 4 })
  extension: string | null;

  @Column("enum", {
    name: "cash_receipt",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  cashReceipt: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "ctiadmin",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  ctiadmin: "" | "N" | "Y";

  @Column("enum", {
    name: "crmcenter",
    enum: ["", "N", "Y"],
    default: () => "'Y'",
  })
  crmcenter: "" | "N" | "Y";

  @Column("enum", {
    name: "power_review",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  powerReview: "" | "Y" | "N";

  @Column("varchar", {
    name: "order_statistic",
    length: 255,
    default: () => "'ALL'",
  })
  orderStatistic: string;

  @Column("enum", {
    name: "mobile_auth",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mobileAuth: "" | "Y" | "N";

  @Column("enum", {
    name: "order_info",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  orderInfo: "" | "Y" | "N";

  @Column("char", {
    name: "buyprice",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  buyprice: string | null;

  @Column("enum", {
    name: "counsel",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  counsel: "" | "Y" | "N";

  @Column("enum", {
    name: "privacy",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  privacy: "" | "Y" | "N";

  @Column("enum", {
    name: "dormant",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  dormant: "" | "Y" | "N";

  @Column("datetime", {
    name: "powerpack_access_date_log",
    default: () => "'0000-00-00 00:00:00'",
  })
  powerpackAccessDateLog: Date;

  @Column("enum", {
    name: "pre_regist_number",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  preRegistNumber: "" | "Y" | "N";

  @Column("enum", {
    name: "mobileapp",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  mobileapp: "" | "Y" | "N";

  @Column("enum", {
    name: "powerapp_chart",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  powerappChart: "" | "Y" | "N";

  @Column("enum", {
    name: "powerapp_ad",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  powerappAd: "" | "Y" | "N";

  @Column("enum", {
    name: "powerapp_stats",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  powerappStats: "" | "Y" | "N";

  @Column("enum", {
    name: "powerapp_message",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  powerappMessage: "" | "Y" | "N";

  @Column("enum", { name: "OTP", enum: ["", "Y", "N"], default: () => "'Y'" })
  otp: "" | "Y" | "N";

  @Column("set", {
    name: "m_manager_access",
    nullable: true,
    enum: [
      "M_MAIN",
      "M_PRODUCT",
      "M_ORDER",
      "M_USER",
      "M_BOARD",
      "M_ADDSERVICE",
      "M_SAMSUNGPASS",
    ],
  })
  mManagerAccess:
    | (
        | "M_MAIN"
        | "M_PRODUCT"
        | "M_ORDER"
        | "M_USER"
        | "M_BOARD"
        | "M_ADDSERVICE"
        | "M_SAMSUNGPASS"
      )[]
    | null;

  @Column("mediumint", {
    name: "user_check_period",
    unsigned: true,
    default: () => "'0'",
  })
  userCheckPeriod: number;

  @Column("int", {
    name: "user_check_maxcnt",
    unsigned: true,
    default: () => "'0'",
  })
  userCheckMaxcnt: number;

  @Column("smallint", {
    name: "user_limit_down",
    unsigned: true,
    default: () => "'0'",
  })
  userLimitDown: number;

  @Column("smallint", {
    name: "order_limit_down",
    unsigned: true,
    default: () => "'0'",
  })
  orderLimitDown: number;

  @Column("mediumint", {
    name: "order_check_period",
    unsigned: true,
    default: () => "'0'",
  })
  orderCheckPeriod: number;

  @Column("int", {
    name: "order_check_maxcnt",
    unsigned: true,
    default: () => "'0'",
  })
  orderCheckMaxcnt: number;

  @Column("enum", {
    name: "mobileshop",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  mobileshop: "" | "Y" | "N";

  @Column("enum", {
    name: "global",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  global: "" | "Y" | "N";

  @Column("enum", {
    name: "divide_order",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  divideOrder: "" | "Y" | "N";

  @Column("enum", {
    name: "refund_backtrack",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  refundBacktrack: "" | "Y" | "N";

  @Column("enum", {
    name: "dueday_setting",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  duedaySetting: "" | "Y" | "N";

  @Column("enum", {
    name: "force_change_password",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  forceChangePassword: "" | "Y" | "N";
}
