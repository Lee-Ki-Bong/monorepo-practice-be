import { Column, Entity } from "typeorm";

@Entity("oo_statistic", { schema: "makeshop" })
export class OoStatistic {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("date", {
    primary: true,
    name: "s_date",
    default: () => "'0000-00-00'",
  })
  sDate: string;

  @Column("varchar", {
    primary: true,
    name: "order_type",
    length: 20,
    default: () => "'all'",
  })
  orderType: string;

  @Column("mediumint", {
    name: "order_cnt",
    unsigned: true,
    default: () => "'0'",
  })
  orderCnt: number;

  @Column("mediumint", {
    name: "basket_cnt",
    unsigned: true,
    default: () => "'0'",
  })
  basketCnt: number;

  @Column("int", { name: "order_price", default: () => "'0'" })
  orderPrice: number;

  @Column("mediumint", { name: "deli_price", default: () => "'0'" })
  deliPrice: number;

  @Column("int", { name: "basket_price", default: () => "'0'" })
  basketPrice: number;

  @Column("mediumint", { name: "dc_price", default: () => "'0'" })
  dcPrice: number;

  @Column("int", { name: "real_price", default: () => "'0'" })
  realPrice: number;

  @Column("mediumint", {
    name: "in_order_cnt",
    unsigned: true,
    default: () => "'0'",
  })
  inOrderCnt: number;

  @Column("int", { name: "in_order_price", default: () => "'0'" })
  inOrderPrice: number;

  @Column("mediumint", {
    name: "refund_cnt",
    unsigned: true,
    default: () => "'0'",
  })
  refundCnt: number;

  @Column("int", { name: "refund_price", default: () => "'0'" })
  refundPrice: number;

  @Column("datetime", {
    name: "update_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  updateDate: Date;
}
