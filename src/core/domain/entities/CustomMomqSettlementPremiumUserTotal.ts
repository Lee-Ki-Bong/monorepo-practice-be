import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Index("stat_month", ["adminuser", "statMonth"], {})
@Index("stat_month_type", ["adminuser", "statMonth", "statType"], {})
@Index(
  "stat_ord_line",
  ["adminuser", "statMonth", "sapMomqOrdNo", "itemCd"],
  {}
)
@Entity("custom_momq_settlement_premium_user_total", { schema: "makeshop" })
export class CustomMomqSettlementPremiumUserTotal {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "stat_month", length: 7 })
  statMonth: string;

  @Column("char", { name: "stat_type", length: 2, default: () => "'D'" })
  statType: string;

  @Column("date", { name: "stat_date", default: () => "'0000-00-00'" })
  statDate: string;

  @Column("int", { name: "ms_id", unsigned: true, default: () => "'0'" })
  msId: number;

  @Column("varchar", { name: "ms_name", length: 255 })
  msName: string;

  @Column("int", { name: "join_price", unsigned: true, default: () => "'0'" })
  joinPrice: number;

  @Column("int", { name: "stat_price", default: () => "'0'" })
  statPrice: number;

  @Column("int", { name: "stat_supply", default: () => "'0'" })
  statSupply: number;

  @Column("int", { name: "stat_vat", default: () => "'0'" })
  statVat: number;

  @Column("int", { name: "item_cd", unsigned: true, default: () => "'0'" })
  itemCd: number;

  @Column("varchar", { name: "item_local", length: 10, default: () => "'CS'" })
  itemLocal: string;

  @Column("int", { name: "plant_no", unsigned: true, default: () => "'0'" })
  plantNo: number;

  @Column("varchar", { name: "sap_momq_ord_no", nullable: true, length: 200 })
  sapMomqOrdNo: string | null;

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

  @Column("char", { name: "is_display", length: 1, default: () => "'Y'" })
  isDisplay: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
