import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("deposit_pg", ["adminuser", "depositDate", "pgType"], {})
@Index("idx_auto_uid", ["uid"], {})
@Index("ordernum", ["adminuser", "ordernum"], {})
@Index("ordernum_type", ["adminuser", "ordernum", "type"], {})
@Index("pay_pg", ["adminuser", "payDate", "pgType"], {})
@Index("pay_trans_pg", ["adminuser", "payDate", "transDate", "pgType"], {})
@Index(
  "pg_pay_trans",
  ["adminuser", "pgType", "payDate", "transDate", "ordernum"],
  {}
)
@Entity("custom_modernhouse_settlement_pg", { schema: "makeshop" })
export class CustomModernhouseSettlementPg {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "pg_type", length: 10 })
  pgType: string;

  @Column("varchar", { name: "ordernum", nullable: true, length: 26 })
  ordernum: string | null;

  @Column("varchar", { name: "api_ordernum", nullable: true, length: 50 })
  apiOrdernum: string | null;

  @Column("varchar", { name: "deposit_date", nullable: true, length: 10 })
  depositDate: string | null;

  @Column("varchar", { name: "approval_date", nullable: true, length: 10 })
  approvalDate: string | null;

  @Column("varchar", { name: "pay_date", nullable: true, length: 10 })
  payDate: string | null;

  @Column("varchar", { name: "trans_date", nullable: true, length: 30 })
  transDate: string | null;

  @Column("varchar", { name: "tid", nullable: true, length: 40 })
  tid: string | null;

  @Column("varchar", { name: "original_tid", nullable: true, length: 40 })
  originalTid: string | null;

  @Column("char", {
    name: "type",
    nullable: true,
    length: 3,
    default: () => "'PAY'",
  })
  type: string | null;

  @Column("varchar", { name: "pay_status", nullable: true, length: 10 })
  payStatus: string | null;

  @Column("varchar", { name: "apploval_num", nullable: true, length: 20 })
  applovalNum: string | null;

  @Column("char", { name: "currency", length: 3, default: () => "'KRW'" })
  currency: string;

  @Column("int", { name: "total_price", default: () => "'0'" })
  totalPrice: number;

  @Column("int", { name: "pay_price", default: () => "'0'" })
  payPrice: number;

  @Column("int", { name: "commission", default: () => "'0'" })
  commission: number;

  @Column("int", { name: "vat", default: () => "'0'" })
  vat: number;

  @Column("int", { name: "hold_price", nullable: true })
  holdPrice: number | null;

  @Column("int", { name: "deposit_price", default: () => "'0'" })
  depositPrice: number;

  @Column("date", { name: "stat_date", default: () => "'0000-00-00'" })
  statDate: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
