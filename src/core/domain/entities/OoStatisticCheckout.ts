import { Column, Entity } from "typeorm";

@Entity("oo_statistic_checkout", { schema: "makeshop" })
export class OoStatisticCheckout {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("date", {
    primary: true,
    name: "s_date",
    default: () => "'0000-00-00'",
  })
  sDate: string;

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

  @Column("int", { name: "dc_product", default: () => "'0'" })
  dcProduct: number;

  @Column("int", { name: "dc_order", default: () => "'0'" })
  dcOrder: number;

  @Column("int", { name: "dc_delivery", default: () => "'0'" })
  dcDelivery: number;

  @Column("int", { name: "nhn_mileage", default: () => "'0'" })
  nhnMileage: number;

  @Column("int", { name: "nhn_emoney", default: () => "'0'" })
  nhnEmoney: number;

  @Column("int", { name: "add_price", default: () => "'0'" })
  addPrice: number;

  @Column("int", { name: "deli_price", default: () => "'0'" })
  deliPrice: number;

  @Column("datetime", {
    name: "update_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  updateDate: Date;
}
