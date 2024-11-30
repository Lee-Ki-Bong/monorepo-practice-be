import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_addition_uid", ["additionUid"], {})
@Index("idx_refund_uid", ["adminuser", "refundUid"], {})
@Entity("oo_refund_addition", { schema: "makeshop" })
export class OoRefundAddition {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "addition_uid", unsigned: true })
  additionUid: number;

  @Column("int", { name: "refund_uid", unsigned: true, default: () => "'0'" })
  refundUid: number;

  @Column("int", { name: "price", unsigned: true, default: () => "'0'" })
  price: number;

  @Column("char", { name: "method", length: 1, default: () => "'B'" })
  method: string;

  @Column("varchar", { name: "bank_info", nullable: true, length: 90 })
  bankInfo: string | null;

  @Column("bigint", {
    name: "used_reserve",
    unsigned: true,
    default: () => "'0'",
  })
  usedReserve: string;

  @Column("bigint", {
    name: "used_emoney",
    unsigned: true,
    default: () => "'0'",
  })
  usedEmoney: string;

  @Column("varchar", { name: "memo", nullable: true, length: 255 })
  memo: string | null;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;

  @Column("varchar", { name: "worker", length: 12 })
  worker: string;
}
