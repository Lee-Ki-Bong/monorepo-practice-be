import { Column, Entity, Index } from "typeorm";

@Index("ord_date", ["adminuser", "ordDate"], {})
@Index("reg_date", ["adminuser", "regDate"], {})
@Index("year_month", ["adminuser", "yearMonth"], {})
@Entity("custom_momq_remain_detail_ea", { schema: "makeshop" })
export class CustomMomqRemainDetailEa {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "channel_ord_id", length: 26 })
  channelOrdId: string;

  @Column("varchar", { primary: true, name: "channel_prd_ord_id", length: 30 })
  channelPrdOrdId: string;

  @Column("varchar", { name: "it_id", length: 15 })
  itId: string;

  @Column("int", { name: "ord_qty", unsigned: true, default: () => "'1'" })
  ordQty: number;

  @Column("varchar", { name: "ord_type_nm", length: 50 })
  ordTypeNm: string;

  @Column("int", { name: "item_price", default: () => "'0'" })
  itemPrice: number;

  @Column("int", {
    primary: true,
    name: "no",
    unsigned: true,
    default: () => "'0'",
  })
  no: number;

  @Column("date", { name: "ord_date", default: () => "'0000-00-00'" })
  ordDate: string;

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

  @Column("varchar", { name: "eol_yn", nullable: true, length: 10 })
  eolYn: string | null;

  @Column("varchar", { primary: true, name: "year_month", length: 7 })
  yearMonth: string;

  @Column("datetime", { name: "reg_date", nullable: true })
  regDate: Date | null;
}
