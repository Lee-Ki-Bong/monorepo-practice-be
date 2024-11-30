import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("api", ["adminuser", "payDate", "payType"], {})
@Index("idx_auto_pay_log_uid", ["payLogUid"], {})
@Entity("oo_pay_log", { schema: "makeshop" })
export class OoPayLog {
  @PrimaryGeneratedColumn({ type: "int", name: "pay_log_uid", unsigned: true })
  payLogUid: number;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { name: "total_price", default: () => "'0'" })
  totalPrice: number;

  @Column("int", { name: "cal_price", default: () => "'0'" })
  calPrice: number;

  @Column("varchar", { name: "sale_price", length: 255 })
  salePrice: string;

  @Column("varchar", { name: "plus_price", length: 255 })
  plusPrice: string;

  @Column("int", { name: "in_pay_price", default: () => "'0'" })
  inPayPrice: number;

  @Column("int", { name: "in_emoney_price", default: () => "'0'" })
  inEmoneyPrice: number;

  @Column("int", { name: "in_reserve", default: () => "'0'" })
  inReserve: number;

  @Column("int", { name: "in_deli_price", default: () => "'0'" })
  inDeliPrice: number;

  @Column("char", { name: "paymethod", length: 1 })
  paymethod: string;

  @Column("enum", {
    name: "pay_type",
    nullable: true,
    enum: [
      "",
      "PAY",
      "REPAY",
      "REFUND",
      "CANCEL",
      "REPAY_CANCEL",
      "ALLCANCEL",
      "AUTOCANCEL",
      "REFUND_CANCEL",
    ],
  })
  payType:
    | ""
    | "PAY"
    | "REPAY"
    | "REFUND"
    | "CANCEL"
    | "REPAY_CANCEL"
    | "ALLCANCEL"
    | "AUTOCANCEL"
    | "REFUND_CANCEL"
    | null;

  @Column("datetime", {
    name: "pay_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  payDate: Date;

  @Column("varchar", { name: "pay_memo", length: 30 })
  payMemo: string;

  @Column("varchar", { name: "sub_id", length: 12 })
  subId: string;

  @Column("enum", {
    name: "hand_type",
    enum: ["", "HAND", "AUTO"],
    default: () => "'AUTO'",
  })
  handType: "" | "HAND" | "AUTO";
}
