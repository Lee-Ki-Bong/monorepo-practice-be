import { Column, Entity, Index } from "typeorm";

@Index("delinum_idx", ["adminuser", "returnDelinum"], {})
@Index("edate_idx", ["adminuser", "endDate"], {})
@Index("rdate_idx", ["adminuser", "requestDate"], {})
@Entity("oo_return", { schema: "makeshop" })
export class OoReturn {
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

  @Column("date", { name: "request_date", default: () => "'0000-00-00'" })
  requestDate: string;

  @Column("date", { name: "end_date", default: () => "'0000-00-00'" })
  endDate: string;

  @Column("char", { name: "return_reason", length: 1 })
  returnReason: string;

  @Column("varchar", { name: "return_memo", length: 255 })
  returnMemo: string;

  @Column("date", { name: "defer_set_date", default: () => "'0000-00-00'" })
  deferSetDate: string;

  @Column("date", {
    name: "defer_schedule_date",
    default: () => "'0000-00-00'",
  })
  deferScheduleDate: string;

  @Column("char", { name: "defer_reason", length: 1 })
  deferReason: string;

  @Column("varchar", { name: "defer_memo", length: 255 })
  deferMemo: string;

  @Column("date", { name: "refusal_set_date", default: () => "'0000-00-00'" })
  refusalSetDate: string;

  @Column("char", { name: "refusal_reason", length: 1 })
  refusalReason: string;

  @Column("varchar", { name: "refusal_memo", length: 255 })
  refusalMemo: string;

  @Column("varchar", { name: "return_post", length: 6 })
  returnPost: string;

  @Column("varchar", { name: "return_address", length: 100 })
  returnAddress: string;

  @Column("varchar", { name: "return_address2", length: 100 })
  returnAddress2: string;

  @Column("enum", {
    name: "restore_stock",
    enum: ["", "INTERNET", "BREAK", "MISS", "STOCK", "ETC"],
    default: () => "'INTERNET'",
  })
  restoreStock: "" | "INTERNET" | "BREAK" | "MISS" | "STOCK" | "ETC";

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
