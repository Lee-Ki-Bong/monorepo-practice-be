import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("coll_ordernum", ["adminuser", "collDate", "ordernum"], {})
@Index("idx_auto_uid", ["uid"], {})
@Index("ordernum", ["adminuser", "ordernum"], {})
@Index("stat_ordernum", ["adminuser", "statDate", "ordernum"], {})
@Entity("custom_modernhouse_settlement", { schema: "makeshop" })
export class CustomModernhouseSettlement {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("int", { name: "sabang_uid", unsigned: true, default: () => "'0'" })
  sabangUid: number;

  @Column("varchar", { name: "store_code", nullable: true, length: 20 })
  storeCode: string | null;

  @Column("varchar", { name: "shipping_storage", nullable: true, length: 20 })
  shippingStorage: string | null;

  @Column("varchar", { name: "customer_code", nullable: true, length: 20 })
  customerCode: string | null;

  @Column("varchar", { name: "ordernum", nullable: true, length: 26 })
  ordernum: string | null;

  @Column("varchar", { name: "deli_gubun", nullable: true, length: 50 })
  deliGubun: string | null;

  @Column("varchar", { name: "deli_company", nullable: true, length: 50 })
  deliCompany: string | null;

  @Column("varchar", { name: "coll_date", nullable: true, length: 10 })
  collDate: string | null;

  @Column("varchar", { name: "goods_code", length: 100 })
  goodsCode: string;

  @Column("varchar", { name: "goods_code2", length: 100 })
  goodsCode2: string;

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

  @Column("varchar", { name: "deli_code", nullable: true, length: 20 })
  deliCode: string | null;

  @Column("varchar", { name: "sabang_cd", nullable: true, length: 100 })
  sabangCd: string | null;

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
