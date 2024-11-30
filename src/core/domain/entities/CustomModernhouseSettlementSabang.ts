import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("coll_ordernum", ["adminuser", "collDate", "ordernum"], {})
@Index("idx_auto_uid", ["uid"], {})
@Index("ordernum", ["adminuser", "ordernum"], {})
@Index("stat_ordernum", ["adminuser", "statDate", "ordernum"], {})
@Entity("custom_modernhouse_settlement_sabang", { schema: "makeshop" })
export class CustomModernhouseSettlementSabang {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("date", { name: "delivery_date", default: () => "'0000-00-00'" })
  deliveryDate: string;

  @Column("int", { name: "sabang_id", unsigned: true, default: () => "'0'" })
  sabangId: number;

  @Column("varchar", { name: "phyplace", length: 100 })
  phyplace: string;

  @Column("varchar", { name: "ordernum", nullable: true, length: 26 })
  ordernum: string | null;

  @Column("varchar", { name: "ordername", nullable: true, length: 255 })
  ordername: string | null;

  @Column("varchar", { name: "coll_date", nullable: true, length: 10 })
  collDate: string | null;

  @Column("varchar", { name: "goods_code", length: 100 })
  goodsCode: string;

  @Column("varchar", { name: "goods_name", nullable: true, length: 255 })
  goodsName: string | null;

  @Column("int", { name: "nor_price", default: () => "'0'" })
  norPrice: number;

  @Column("int", { name: "sale_price", default: () => "'0'" })
  salePrice: number;

  @Column("int", { name: "goods_ea", default: () => "'0'" })
  goodsEa: number;

  @Column("int", {
    name: "sale_price_sum",
    nullable: true,
    default: () => "'0'",
  })
  salePriceSum: number | null;

  @Column("int", { name: "pg_price", nullable: true, default: () => "'0'" })
  pgPrice: number | null;

  @Column("int", { name: "deli_price", nullable: true, default: () => "'0'" })
  deliPrice: number | null;

  @Column("varchar", { name: "deli_price_str", nullable: true, length: 100 })
  deliPriceStr: string | null;

  @Column("varchar", { name: "sabang_cd", nullable: true, length: 100 })
  sabangCd: string | null;

  @Column("varchar", { name: "sabang_order_no", nullable: true, length: 100 })
  sabangOrderNo: string | null;

  @Column("varchar", { name: "goods_name_in", nullable: true, length: 255 })
  goodsNameIn: string | null;

  @Column("varchar", { name: "option_text", nullable: true, length: 255 })
  optionText: string | null;

  @Column("varchar", { name: "order_tel1", nullable: true, length: 30 })
  orderTel1: string | null;

  @Column("varchar", { name: "order_tel2", nullable: true, length: 30 })
  orderTel2: string | null;

  @Column("varchar", { name: "recv_nm", nullable: true, length: 32 })
  recvNm: string | null;

  @Column("varchar", { name: "recv_tel1", nullable: true, length: 30 })
  recvTel1: string | null;

  @Column("varchar", { name: "recv_tel2", nullable: true, length: 30 })
  recvTel2: string | null;

  @Column("varchar", { name: "recv_zip", nullable: true, length: 14 })
  recvZip: string | null;

  @Column("varchar", { name: "recv_addr", nullable: true, length: 255 })
  recvAddr: string | null;

  @Column("varchar", { name: "deli_memo", nullable: true, length: 255 })
  deliMemo: string | null;

  @Column("varchar", { name: "deli_gubun", nullable: true, length: 50 })
  deliGubun: string | null;

  @Column("varchar", { name: "deli_company", nullable: true, length: 50 })
  deliCompany: string | null;

  @Column("varchar", { name: "deli_no", nullable: true, length: 50 })
  deliNo: string | null;

  @Column("varchar", { name: "goods_code2", length: 100 })
  goodsCode2: string;

  @Column("datetime", {
    name: "order_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  orderDate: Date;

  @Column("varchar", { name: "shop_id", length: 50 })
  shopId: string;

  @Column("date", { name: "stat_date", default: () => "'0000-00-00'" })
  statDate: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
