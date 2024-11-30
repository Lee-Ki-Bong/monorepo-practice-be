import { Column, Entity, Index } from "typeorm";

@Index("delinum_idx", ["adminuser", "returnDelinum"], {})
@Index("edate_idx", ["adminuser", "endDate"], {})
@Index("rdate_idx", ["adminuser", "requestDate"], {})
@Entity("oo_trade", { schema: "makeshop" })
export class OoTrade {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", {
    primary: true,
    name: "basket_num",
    unsigned: true,
    default: () => "'0'",
  })
  basketNum: number;

  @Column("varchar", { name: "custom_request", length: 255 })
  customRequest: string;

  @Column("varchar", { name: "receive_refusal_reason", length: 255 })
  receiveRefusalReason: string;

  @Column("bigint", {
    name: "resend_price",
    unsigned: true,
    default: () => "'0'",
  })
  resendPrice: string;

  @Column("varchar", { name: "payment_name", length: 30 })
  paymentName: string;

  @Column("varchar", { name: "payment_bank", length: 30 })
  paymentBank: string;

  @Column("varchar", {
    name: "trade_reason",
    length: 20,
    default: () => "'ETC'",
  })
  tradeReason: string;

  @Column("varchar", { name: "trade_memo", length: 255 })
  tradeMemo: string;

  @Column("date", { name: "request_date", default: () => "'0000-00-00'" })
  requestDate: string;

  @Column("date", { name: "end_date", default: () => "'0000-00-00'" })
  endDate: string;

  @Column("varchar", { name: "receiver_name", length: 32 })
  receiverName: string;

  @Column("varchar", { name: "receiver_phone", length: 30 })
  receiverPhone: string;

  @Column("varchar", { name: "receiver_mobile", length: 30 })
  receiverMobile: string;

  @Column("varchar", { name: "receiver_post", length: 6 })
  receiverPost: string;

  @Column("varchar", { name: "receiver_address", length: 100 })
  receiverAddress: string;

  @Column("varchar", { name: "receiver_address2", length: 100 })
  receiverAddress2: string;

  @Column("varchar", { name: "receiver_memo", length: 255 })
  receiverMemo: string;

  @Column("enum", {
    name: "restore_stock",
    enum: ["", "INTERNET", "BREAK", "MISS", "STOCK", "ETC"],
    default: () => "'INTERNET'",
  })
  restoreStock: "" | "INTERNET" | "BREAK" | "MISS" | "STOCK" | "ETC";

  @Column("date", { name: "ready_set_date", default: () => "'0000-00-00'" })
  readySetDate: string;

  @Column("date", {
    name: "ready_schedule_date",
    default: () => "'0000-00-00'",
  })
  readyScheduleDate: string;

  @Column("varchar", {
    name: "ready_reason",
    length: 20,
    default: () => "'ETC'",
  })
  readyReason: string;

  @Column("varchar", { name: "ready_memo", length: 255 })
  readyMemo: string;

  @Column("date", { name: "refusal_set_date", default: () => "'0000-00-00'" })
  refusalSetDate: string;

  @Column("date", {
    name: "refusal_schedule_date",
    default: () => "'0000-00-00'",
  })
  refusalScheduleDate: string;

  @Column("varchar", {
    name: "refusal_reason",
    length: 20,
    default: () => "'ETC'",
  })
  refusalReason: string;

  @Column("varchar", { name: "refusal_memo", length: 255 })
  refusalMemo: string;

  @Column("varchar", { name: "sub_id", length: 12 })
  subId: string;

  @Column("varchar", { name: "admin_memo", length: 255 })
  adminMemo: string;

  @Column("enum", {
    name: "return_deli_type",
    enum: ["", "CUSTOMER", "CONTRACT", "SHOP"],
    default: () => "'CUSTOMER'",
  })
  returnDeliType: "" | "CUSTOMER" | "CONTRACT" | "SHOP";

  @Column("varchar", { name: "return_delinum", length: 20 })
  returnDelinum: string;

  @Column("tinyint", { name: "return_deli_code", default: () => "'0'" })
  returnDeliCode: number;

  @Column("varchar", { name: "return_request_memo", length: 255 })
  returnRequestMemo: string;

  @Column("varchar", { name: "return_hname", length: 30 })
  returnHname: string;
}
