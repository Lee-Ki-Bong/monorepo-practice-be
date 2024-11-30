import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Index("index_ord_id_type", ["adminuser", "channelOrdId", "ordType"], {})
@Index("index_ord_type", ["adminuser", "ordType"], {})
@Index("index_search_date", ["adminuser", "searchDate"], {})
@Entity("custom_momq_order_detail", { schema: "makeshop" })
export class CustomMomqOrderDetail {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "channel_ord_id", length: 26 })
  channelOrdId: string;

  @Column("varchar", { name: "channel_prd_ord_id", length: 30 })
  channelPrdOrdId: string;

  @Column("int", { name: "num", nullable: true })
  num: number | null;

  @Column("varchar", { name: "it_id", length: 15 })
  itId: string;

  @Column("int", { name: "ord_qty", unsigned: true, default: () => "'1'" })
  ordQty: number;

  @Column("varchar", { name: "ord_type_nm", length: 50 })
  ordTypeNm: string;

  @Column("int", { name: "item_price", default: () => "'0'" })
  itemPrice: number;

  @Column("int", { name: "no", unsigned: true, default: () => "'0'" })
  no: number;

  @Column("date", { name: "ord_date", default: () => "'0000-00-00'" })
  ordDate: string;

  @Column("date", { name: "search_date", nullable: true })
  searchDate: string | null;

  @Column("varchar", { name: "channel_cd", nullable: true, length: 20 })
  channelCd: string | null;

  @Column("int", { name: "exp_price", default: () => "'0'" })
  expPrice: number;

  @Column("datetime", { name: "send_dttm", nullable: true })
  sendDttm: Date | null;

  @Column("int", {
    name: "item_local_num",
    unsigned: true,
    default: () => "'0'",
  })
  itemLocalNum: number;

  @Column("int", { name: "sales_price", default: () => "'0'" })
  salesPrice: number;

  @Column("int", { name: "exp_add_price", default: () => "'0'" })
  expAddPrice: number;

  @Column("int", { name: "item_cd", unsigned: true, default: () => "'0'" })
  itemCd: number;

  @Column("varchar", { name: "item_local", length: 10 })
  itemLocal: string;

  @Column("int", { name: "plant_no", unsigned: true, default: () => "'0'" })
  plantNo: number;

  @Column("varchar", { name: "item_name", length: 255 })
  itemName: string;

  @Column("char", { name: "data_type", nullable: true, length: 1 })
  dataType: string | null;

  @Column("int", { name: "discount_price", default: () => "'0'" })
  discountPrice: number;

  @Column("varchar", { name: "tax_yn", length: 10 })
  taxYn: string;

  @Column("char", { name: "ord_type", length: 1 })
  ordType: string;

  @Column("varchar", { name: "sap_d2mp_ord_no", nullable: true, length: 200 })
  sapD2mpOrdNo: string | null;

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

  @Column("varchar", {
    name: "sap_item_net_price",
    nullable: true,
    length: 200,
  })
  sapItemNetPrice: string | null;

  @Column("varchar", { name: "sap_tax", nullable: true, length: 200 })
  sapTax: string | null;

  @Column("date", { name: "in_search_date", nullable: true })
  inSearchDate: string | null;

  @Column("datetime", { name: "reg_date", nullable: true })
  regDate: Date | null;
}
