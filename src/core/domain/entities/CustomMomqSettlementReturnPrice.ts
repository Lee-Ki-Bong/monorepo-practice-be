import { Column, Entity } from "typeorm";

@Entity("custom_momq_settlement_return_price", { schema: "makeshop" })
export class CustomMomqSettlementReturnPrice {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("date", {
    primary: true,
    name: "stat_date",
    default: () => "'0000-00-00'",
  })
  statDate: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", { primary: true, name: "num", default: () => "'0'" })
  num: number;

  @Column("int", { primary: true, name: "return_num", default: () => "'0'" })
  returnNum: number;

  @Column("int", {
    primary: true,
    name: "item_cd",
    unsigned: true,
    default: () => "'0'",
  })
  itemCd: number;

  @Column("int", { name: "ori_stock", default: () => "'0'" })
  oriStock: number;

  @Column("int", { name: "ori_prod_price", default: () => "'0'" })
  oriProdPrice: number;

  @Column("int", { name: "ori_discount_price", default: () => "'0'" })
  oriDiscountPrice: number;

  @Column("int", { name: "ori_pay_price", default: () => "'0'" })
  oriPayPrice: number;

  @Column("int", { name: "ori_supply_price", default: () => "'0'" })
  oriSupplyPrice: number;

  @Column("int", { name: "stock", default: () => "'0'" })
  stock: number;

  @Column("int", { name: "prod_price", default: () => "'0'" })
  prodPrice: number;

  @Column("int", { name: "discount_price", default: () => "'0'" })
  discountPrice: number;

  @Column("int", { name: "pay_price", default: () => "'0'" })
  payPrice: number;

  @Column("int", { name: "supply_price", default: () => "'0'" })
  supplyPrice: number;

  @Column("int", { name: "deli_price", default: () => "'0'" })
  deliPrice: number;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
