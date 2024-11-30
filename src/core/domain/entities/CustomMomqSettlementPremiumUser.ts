import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Index("stat_month", ["adminuser", "statMonth"], {})
@Index(
  "stat_month_sap",
  ["adminuser", "statMonth", "sapMomqOrdNo", "sapMomqItemCd"],
  {}
)
@Index("stat_month_type", ["adminuser", "statMonth", "statType"], {})
@Index("user_ms_pre_stat_type", ["adminuser", "userId", "msId", "preId"], {})
@Entity("custom_momq_settlement_premium_user", { schema: "makeshop" })
export class CustomMomqSettlementPremiumUser {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "user_id", length: 20 })
  userId: string;

  @Column("int", { name: "ms_id", unsigned: true, default: () => "'0'" })
  msId: number;

  @Column("int", { name: "pre_id", unsigned: true, default: () => "'0'" })
  preId: number;

  @Column("varchar", { name: "ms_name", length: 255 })
  msName: string;

  @Column("varchar", { name: "in_stat_month", length: 7 })
  inStatMonth: string;

  @Column("varchar", { name: "stat_month", length: 7 })
  statMonth: string;

  @Column("int", { name: "stat_count", unsigned: true, default: () => "'0'" })
  statCount: number;

  @Column("datetime", {
    name: "pre_join_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  preJoinDate: Date;

  @Column("date", { name: "pre_start_date", default: () => "'0000-00-00'" })
  preStartDate: string;

  @Column("date", { name: "pre_end_date", default: () => "'0000-00-00'" })
  preEndDate: string;

  @Column("varchar", { name: "ordernum", length: 26 })
  ordernum: string;

  @Column("varchar", { name: "ms_term", length: 5 })
  msTerm: string;

  @Column("int", { name: "join_price", unsigned: true, default: () => "'0'" })
  joinPrice: number;

  @Column("int", { name: "stat_price", unsigned: true, default: () => "'0'" })
  statPrice: number;

  @Column("int", { name: "stat_supply", unsigned: true, default: () => "'0'" })
  statSupply: number;

  @Column("int", { name: "stat_vat", unsigned: true, default: () => "'0'" })
  statVat: number;

  @Column("char", { name: "stat_type", length: 2, default: () => "'W'" })
  statType: string;

  @Column("varchar", { name: "stat_cancel_month", length: 7 })
  statCancelMonth: string;

  @Column("date", { name: "stat_cancel_date", default: () => "'0000-00-00'" })
  statCancelDate: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "upd_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  updDate: Date;

  @Column("varchar", { name: "sap_momq_ord_no", nullable: true, length: 200 })
  sapMomqOrdNo: string | null;

  @Column("varchar", { name: "sap_momq_item_cd", nullable: true, length: 10 })
  sapMomqItemCd: string | null;

  @Column("varchar", { name: "sap_ord_no", nullable: true, length: 200 })
  sapOrdNo: string | null;

  @Column("varchar", { name: "sap_invoice_no", nullable: true, length: 200 })
  sapInvoiceNo: string | null;

  @Column("varchar", { name: "sap_invoice_date", nullable: true, length: 200 })
  sapInvoiceDate: string | null;

  @Column("varchar", { name: "sap_line_no", nullable: true, length: 200 })
  sapLineNo: string | null;

  @Column("varchar", { name: "sap_billed_qty", nullable: true, length: 200 })
  sapBilledQty: string | null;

  @Column("varchar", { name: "sap_net_price", nullable: true, length: 200 })
  sapNetPrice: string | null;

  @Column("varchar", { name: "sap_tax", nullable: true, length: 200 })
  sapTax: string | null;

  @Column("varchar", { name: "is_present_id", length: 20 })
  isPresentId: string;

  @Column("varchar", { name: "is_present_to_id", length: 20 })
  isPresentToId: string;

  @Column("char", { name: "is_present", length: 1, default: () => "'N'" })
  isPresent: string;

  @Column("char", { name: "is_display", length: 1, default: () => "'Y'" })
  isDisplay: string;
}
