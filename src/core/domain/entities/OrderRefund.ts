import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_sno", ["sno"], {})
@Index("idx_refund1", ["adminuser", "ordernum"], {})
@Entity("order_refund", { schema: "makeshop" })
export class OrderRefund {
  @PrimaryGeneratedColumn({ type: "int", name: "sno", unsigned: true })
  sno: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "ordernum", length: 26 })
  ordernum: string;

  @Column("mediumtext", { name: "basketnum", nullable: true })
  basketnum: string | null;

  @Column("varchar", { name: "id", length: 13 })
  id: string;

  @Column("varchar", { name: "sender", nullable: true, length: 30 })
  sender: string | null;

  @Column("enum", {
    name: "otype",
    enum: ["", "refund", "return", "trade", "trade_s", "trade_n"],
    default: () => "'refund'",
  })
  otype: "" | "refund" | "return" | "trade" | "trade_s" | "trade_n";

  @Column("char", { name: "method", length: 1, default: () => "'B'" })
  method: string;

  @Column("varchar", { name: "account", nullable: true, length: 30 })
  account: string | null;

  @Column("varchar", { name: "acc_bank", nullable: true, length: 30 })
  accBank: string | null;

  @Column("varchar", { name: "acc_name", nullable: true, length: 30 })
  accName: string | null;

  @Column("mediumtext", { name: "memo", nullable: true })
  memo: string | null;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;

  @Column("mediumint", { name: "price_deli", default: () => "'0'" })
  priceDeli: number;

  @Column("mediumint", { name: "refund_cash", default: () => "'0'" })
  refundCash: number;

  @Column("mediumint", { name: "refund_reserve", default: () => "'0'" })
  refundReserve: number;

  @Column("mediumint", { name: "refund_emoney", default: () => "'0'" })
  refundEmoney: number;

  @Column("mediumint", { name: "refund_total", default: () => "'0'" })
  refundTotal: number;

  @Column("datetime", { name: "refund_date", nullable: true })
  refundDate: Date | null;

  @Column("enum", {
    name: "refund_status",
    enum: ["", "O", "X", "H"],
    default: () => "'X'",
  })
  refundStatus: "" | "O" | "X" | "H";

  @Column("mediumtext", { name: "refund_desc", nullable: true })
  refundDesc: string | null;

  @Column("mediumint", { name: "r_use_reserve", nullable: true })
  rUseReserve: number | null;

  @Column("mediumint", { name: "r_use_emoney", nullable: true })
  rUseEmoney: number | null;
}
