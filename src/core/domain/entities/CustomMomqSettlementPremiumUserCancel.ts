import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Index("stat_month", ["adminuser", "statMonth"], {})
@Index(
  "stat_sap_c",
  ["adminuser", "statMonth", "sapCMomqOrdNo", "sapCMomqItemCd"],
  {}
)
@Index(
  "stat_sap_cd",
  ["adminuser", "statMonth", "sapDMomqOrdNo", "sapDMomqItemCd"],
  {}
)
@Index("user_ms", ["adminuser", "userId", "msId"], {})
@Entity("custom_momq_settlement_premium_user_cancel", { schema: "makeshop" })
export class CustomMomqSettlementPremiumUserCancel {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "stat_month", length: 7 })
  statMonth: string;

  @Column("varchar", { name: "user_id", length: 20 })
  userId: string;

  @Column("int", { name: "ms_id", unsigned: true, default: () => "'0'" })
  msId: number;

  @Column("int", { name: "pre_id", unsigned: true, default: () => "'0'" })
  preId: number;

  @Column("varchar", { name: "ms_name", length: 255 })
  msName: string;

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

  @Column("int", { name: "join_price", unsigned: true, default: () => "'0'" })
  joinPrice: number;

  @Column("varchar", { name: "ms_term", length: 5 })
  msTerm: string;

  @Column("date", { name: "pre_cancel_date", default: () => "'0000-00-00'" })
  preCancelDate: string;

  @Column("varchar", { name: "cancel_term", length: 5 })
  cancelTerm: string;

  @Column("char", { name: "return_flag", length: 2, default: () => "'N'" })
  returnFlag: string;

  @Column("int", {
    name: "return_reserve",
    unsigned: true,
    default: () => "'0'",
  })
  returnReserve: number;

  @Column("int", {
    name: "no_return_reserve",
    unsigned: true,
    default: () => "'0'",
  })
  noReturnReserve: number;

  @Column("int", { name: "refund_price", unsigned: true, default: () => "'0'" })
  refundPrice: number;

  @Column("int", {
    name: "return_stat_price",
    unsigned: true,
    default: () => "'0'",
  })
  returnStatPrice: number;

  @Column("int", {
    name: "return_stat_supply",
    unsigned: true,
    default: () => "'0'",
  })
  returnStatSupply: number;

  @Column("int", { name: "etc_profit", default: () => "'0'" })
  etcProfit: number;

  @Column("int", { name: "etc_profit_supply", default: () => "'0'" })
  etcProfitSupply: number;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("varchar", { name: "sap_c_momq_ord_no", nullable: true, length: 200 })
  sapCMomqOrdNo: string | null;

  @Column("varchar", { name: "sap_c_momq_item_cd", nullable: true, length: 10 })
  sapCMomqItemCd: string | null;

  @Column("varchar", { name: "sap_c_ord_no", nullable: true, length: 200 })
  sapCOrdNo: string | null;

  @Column("varchar", { name: "sap_c_invoice_no", nullable: true, length: 200 })
  sapCInvoiceNo: string | null;

  @Column("varchar", {
    name: "sap_c_invoice_date",
    nullable: true,
    length: 200,
  })
  sapCInvoiceDate: string | null;

  @Column("varchar", { name: "sap_c_line_no", nullable: true, length: 200 })
  sapCLineNo: string | null;

  @Column("varchar", { name: "sap_c_billed_qty", nullable: true, length: 200 })
  sapCBilledQty: string | null;

  @Column("varchar", { name: "sap_c_net_price", nullable: true, length: 200 })
  sapCNetPrice: string | null;

  @Column("varchar", { name: "sap_c_tax", nullable: true, length: 200 })
  sapCTax: string | null;

  @Column("varchar", { name: "sap_d_momq_ord_no", nullable: true, length: 200 })
  sapDMomqOrdNo: string | null;

  @Column("varchar", { name: "sap_d_momq_item_cd", nullable: true, length: 10 })
  sapDMomqItemCd: string | null;

  @Column("varchar", { name: "sap_d_ord_no", nullable: true, length: 200 })
  sapDOrdNo: string | null;

  @Column("varchar", { name: "sap_d_invoice_no", nullable: true, length: 200 })
  sapDInvoiceNo: string | null;

  @Column("varchar", {
    name: "sap_d_invoice_date",
    nullable: true,
    length: 200,
  })
  sapDInvoiceDate: string | null;

  @Column("varchar", { name: "sap_d_line_no", nullable: true, length: 200 })
  sapDLineNo: string | null;

  @Column("varchar", { name: "sap_d_billed_qty", nullable: true, length: 200 })
  sapDBilledQty: string | null;

  @Column("varchar", { name: "sap_d_net_price", nullable: true, length: 200 })
  sapDNetPrice: string | null;

  @Column("varchar", { name: "sap_d_tax", nullable: true, length: 200 })
  sapDTax: string | null;

  @Column("varchar", { name: "is_present_id", length: 20 })
  isPresentId: string;

  @Column("varchar", { name: "is_present_to_id", length: 20 })
  isPresentToId: string;

  @Column("char", { name: "is_present", length: 1, default: () => "'N'" })
  isPresent: string;

  @Column("char", { name: "is_display", length: 1, default: () => "'Y'" })
  isDisplay: string;
}
