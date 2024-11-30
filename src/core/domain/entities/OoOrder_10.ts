import { Column, Entity, Index } from "typeorm";

@Index("banker_idx", ["adminuser", "ordernum", "banker"], {})
@Index("id", ["adminuser", "id"], {})
@Index("id_idx", ["adminuser", "ordernum", "id"], {})
@Index("mobile_idx", ["adminuser", "mobile"], {})
@Index("ordernum", ["ordernum"], {})
@Index("paydate_idx", ["adminuser", "ordernum", "payDate"], {})
@Index("phone_idx", ["adminuser", "phone"], {})
@Index("sender_idx", ["adminuser", "ordernum", "sender"], {})
@Entity("oo_order_10", { schema: "makeshop" })
export class OoOrder_10 {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("varchar", { name: "tempid", length: 32 })
  tempid: string;

  @Column("bigint", { name: "barcode", default: () => "'0'" })
  barcode: string;

  @Column("datetime", {
    name: "order_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  orderDate: Date;

  @Column("varchar", { name: "id", length: 13 })
  id: string;

  @Column("enum", {
    name: "is_member",
    enum: ["", "MEMBER", "GUEST"],
    default: () => "'GUEST'",
  })
  isMember: "" | "MEMBER" | "GUEST";

  @Column("varchar", { name: "group_id", length: 4 })
  groupId: string;

  @Column("int", { name: "start_price", default: () => "'0'" })
  startPrice: number;

  @Column("int", { name: "cal_price", default: () => "'0'" })
  calPrice: number;

  @Column("int", { name: "deli_price", default: () => "'0'" })
  deliPrice: number;

  @Column("int", { name: "used_emoney", default: () => "'0'" })
  usedEmoney: number;

  @Column("int", { name: "used_reserve", default: () => "'0'" })
  usedReserve: number;

  @Column("int", {
    name: "in_card_price",
    unsigned: true,
    default: () => "'0'",
  })
  inCardPrice: number;

  @Column("char", { name: "paymethod", length: 1 })
  paymethod: string;

  @Column("varchar", { name: "paydata", length: 100 })
  paydata: string;

  @Column("datetime", {
    name: "pay_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  payDate: Date;

  @Column("varchar", { name: "card_flag", length: 4 })
  cardFlag: string;

  @Column("char", { name: "admin_card_flag", length: 1, default: () => "'N'" })
  adminCardFlag: string;

  @Column("varchar", { name: "card_ok_num", length: 15 })
  cardOkNum: string;

  @Column("varchar", { name: "card_partcancel_code", length: 4 })
  cardPartcancelCode: string;

  @Column("enum", {
    name: "pay_status",
    enum: ["", "Y", "N", "C"],
    default: () => "'N'",
  })
  payStatus: "" | "Y" | "N" | "C";

  @Column("char", { name: "order_status", length: 1, default: () => "'N'" })
  orderStatus: string;

  @Column("int", { name: "repay_price", default: () => "'0'" })
  repayPrice: number;

  @Column("datetime", {
    name: "repay_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  repayDate: Date;

  @Column("varchar", { name: "banker", length: 40 })
  banker: string;

  @Column("varchar", { name: "bank_account", length: 255 })
  bankAccount: string;

  @Column("varchar", { name: "bank_name", length: 40 })
  bankName: string;

  @Column("varchar", { name: "sender", length: 30 })
  sender: string;

  @Column("varchar", { name: "phone", length: 30 })
  phone: string;

  @Column("varchar", { name: "mobile", length: 30 })
  mobile: string;

  @Column("varchar", { name: "email", length: 50 })
  email: string;

  @Column("varchar", { name: "ip", length: 15 })
  ip: string;

  @Column("enum", {
    name: "b2b_order",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  b2bOrder: "" | "N" | "Y";

  @Column("enum", {
    name: "user_display_opt",
    enum: ["", "N", "Y"],
    default: () => "'Y'",
  })
  userDisplayOpt: "" | "N" | "Y";

  @Column("varchar", { name: "link_id", length: 12 })
  linkId: string;

  @Column("enum", {
    name: "pay_path",
    enum: ["", "WEB", "MOBILE"],
    default: () => "'WEB'",
  })
  payPath: "" | "WEB" | "MOBILE";

  @Column("varchar", { name: "link_url", length: 100 })
  linkUrl: string;

  @Column("varchar", { name: "etctype", length: 255 })
  etctype: string;
}
