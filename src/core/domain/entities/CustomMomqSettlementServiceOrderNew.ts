import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_id", ["id"], {})
@Index("issuedate", ["adminuser", "issuedate"], {})
@Index(
  "providerissue",
  ["adminuser", "type", "orderType", "ordernum", "provider", "issuedate"],
  {}
)
@Index(
  "sapcodeissue",
  ["adminuser", "type", "orderType", "ordernum", "sapSaleCode", "issuedate"],
  {}
)
@Index("type2", ["adminuser", "type", "orderType"], {})
@Entity("custom_momq_settlement_service_order_new", { schema: "makeshop" })
export class CustomMomqSettlementServiceOrderNew {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", {
    name: "type",
    nullable: true,
    length: 10,
    default: () => "'prod'",
  })
  type: string | null;

  @Column("char", {
    name: "order_type",
    nullable: true,
    length: 1,
    default: () => "'D'",
  })
  orderType: string | null;

  @Column("varchar", { name: "ordernum", nullable: true, length: 26 })
  ordernum: string | null;

  @Column("int", { name: "basket_num", nullable: true, default: () => "'0'" })
  basketNum: number | null;

  @Column("mediumtext", { name: "basket_set", nullable: true })
  basketSet: string | null;

  @Column("int", { name: "provider", nullable: true, unsigned: true })
  provider: number | null;

  @Column("varchar", { name: "company_name", nullable: true, length: 30 })
  companyName: string | null;

  @Column("varchar", { name: "sap_sale_code", nullable: true, length: 10 })
  sapSaleCode: string | null;

  @Column("varchar", { name: "sap_not_pay_cd", nullable: true, length: 10 })
  sapNotPayCd: string | null;

  @Column("varchar", {
    name: "sap_not_pay_setoff_cd",
    nullable: true,
    length: 10,
  })
  sapNotPaySetoffCd: string | null;

  @Column("mediumint", {
    name: "percent",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  percent: number | null;

  @Column("int", {
    name: "product_uid",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  productUid: number | null;

  @Column("varchar", { name: "product_name", nullable: true, length: 255 })
  productName: string | null;

  @Column("varchar", { name: "vat_type", nullable: true, length: 10 })
  vatType: string | null;

  @Column("smallint", {
    name: "basket_stock",
    nullable: true,
    default: () => "'0'",
  })
  basketStock: number | null;

  @Column("int", { name: "sell_price", nullable: true, default: () => "'0'" })
  sellPrice: number | null;

  @Column("int", { name: "supply_price", nullable: true, default: () => "'0'" })
  supplyPrice: number | null;

  @Column("int", {
    name: "supply_price_vat",
    nullable: true,
    default: () => "'0'",
  })
  supplyPriceVat: number | null;

  @Column("float", {
    name: "supply_price_vat_fl",
    nullable: true,
    precision: 10,
    scale: 1,
    default: () => "'0.0'",
  })
  supplyPriceVatFl: number | null;

  @Column("int", { name: "fees_price", nullable: true, default: () => "'0'" })
  feesPrice: number | null;

  @Column("float", {
    name: "fees_price_fl",
    nullable: true,
    precision: 10,
    scale: 1,
    default: () => "'0.0'",
  })
  feesPriceFl: number | null;

  @Column("int", { name: "deli_price", nullable: true, default: () => "'0'" })
  deliPrice: number | null;

  @Column("int", { name: "sales_price", nullable: true, default: () => "'0'" })
  salesPrice: number | null;

  @Column("int", { name: "calc_price", nullable: true, default: () => "'0'" })
  calcPrice: number | null;

  @Column("float", {
    name: "calc_price_fl",
    nullable: true,
    precision: 12,
    scale: 1,
    default: () => "'0.0'",
  })
  calcPriceFl: number | null;

  @Column("varchar", { name: "issuedate", length: 8 })
  issuedate: string;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;
}
