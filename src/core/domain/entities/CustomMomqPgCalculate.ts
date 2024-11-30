import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("calculate_type", ["adminuser", "calculateType"], {})
@Index("idx_auto_uid", ["uid"], {})
@Index("ordernum", ["adminuser", "ordernum"], {})
@Index("search_date", ["adminuser", "searchDate"], {})
@Entity("custom_momq_pg_calculate", { schema: "makeshop" })
export class CustomMomqPgCalculate {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("char", { name: "calculate_type", length: 1, default: () => "'1'" })
  calculateType: string;

  @Column("varchar", { name: "ordernum", nullable: true, length: 26 })
  ordernum: string | null;

  @Column("char", { name: "paymethod", nullable: true, length: 2 })
  paymethod: string | null;

  @Column("varchar", { name: "mid", nullable: true, length: 10 })
  mid: string | null;

  @Column("varchar", { name: "deposit_date", nullable: true, length: 8 })
  depositDate: string | null;

  @Column("char", { name: "buyer_code", nullable: true, length: 3 })
  buyerCode: string | null;

  @Column("char", { name: "approver_code", nullable: true, length: 2 })
  approverCode: string | null;

  @Column("varchar", { name: "tid", nullable: true, length: 40 })
  tid: string | null;

  @Column("varchar", { name: "original_tid", nullable: true, length: 40 })
  originalTid: string | null;

  @Column("char", { name: "order_type", nullable: true, length: 1 })
  orderType: string | null;

  @Column("varchar", { name: "approval_date", nullable: true, length: 14 })
  approvalDate: string | null;

  @Column("varchar", { name: "cancel_date", nullable: true, length: 14 })
  cancelDate: string | null;

  @Column("varchar", { name: "apploval_num", nullable: true, length: 20 })
  applovalNum: string | null;

  @Column("char", { name: "currency", length: 3, default: () => "'KRW'" })
  currency: string;

  @Column("int", { name: "calculate_price", default: () => "'0'" })
  calculatePrice: number;

  @Column("int", { name: "commission", default: () => "'0'" })
  commission: number;

  @Column("int", { name: "vat", default: () => "'0'" })
  vat: number;

  @Column("int", { name: "hold_price", nullable: true })
  holdPrice: number | null;

  @Column("int", { name: "deposit_price", default: () => "'0'" })
  depositPrice: number;

  @Column("char", { name: "budo", nullable: true, length: 2 })
  budo: string | null;

  @Column("varchar", { name: "search_date", length: 8 })
  searchDate: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
