import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("edpay_id", ["edpayId"], {})
@Index(
  "edpay_paydate",
  ["adminuser", "edId", "edpayPaydate", "edpayPaystatus"],
  {}
)
@Entity("edgeday_payment", { schema: "makeshop" })
export class EdgedayPayment {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "ed_id",
    unsigned: true,
    default: () => "'0'",
  })
  edId: number;

  @PrimaryGeneratedColumn({ type: "int", name: "edpay_id", unsigned: true })
  edpayId: number;

  @Column("datetime", {
    name: "edpay_paydate",
    default: () => "'0000-00-00 00:00:00'",
  })
  edpayPaydate: Date;

  @Column("datetime", {
    name: "edpay_moddate",
    default: () => "'0000-00-00 00:00:00'",
  })
  edpayModdate: Date;

  @Column("enum", {
    name: "edpay_paymethod",
    enum: ["", "CARD", "REALBANK", "HPHONE"],
    default: () => "'CARD'",
  })
  edpayPaymethod: "" | "CARD" | "REALBANK" | "HPHONE";

  @Column("char", { name: "edpay_card_ok_num", length: 15 })
  edpayCardOkNum: string;

  @Column("char", { name: "edpay_paydata", length: 60 })
  edpayPaydata: string;

  @Column("enum", {
    name: "edpay_paystatus",
    enum: ["", "NONE", "FAIL", "CANCEL", "OK"],
    default: () => "'NONE'",
  })
  edpayPaystatus: "" | "NONE" | "FAIL" | "CANCEL" | "OK";

  @Column("int", {
    name: "edpay_payprice",
    unsigned: true,
    default: () => "'0'",
  })
  edpayPayprice: number;

  @Column("mediumint", {
    name: "edpay_amount",
    unsigned: true,
    default: () => "'0'",
  })
  edpayAmount: number;

  @Column("enum", {
    name: "edpay_email",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  edpayEmail: "" | "N" | "Y";

  @Column("char", { name: "edpay_admin_id", length: 12 })
  edpayAdminId: string;
}
