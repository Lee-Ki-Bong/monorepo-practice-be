import { Column, Entity, Index } from "typeorm";

@Index("order_date", ["adminuser", "orderDate"], {})
@Entity("order_provide_nsale_history", { schema: "makeshop" })
export class OrderProvideNsaleHistory {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("date", {
    primary: true,
    name: "order_date",
    default: () => "'0000-00-00'",
  })
  orderDate: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("int", {
    primary: true,
    name: "sto_id",
    unsigned: true,
    default: () => "'0'",
  })
  stoId: number;

  @Column("int", { name: "supply", nullable: true, unsigned: true })
  supply: number | null;

  @Column("int", { name: "order_count", default: () => "'0'" })
  orderCount: number;

  @Column("int", { name: "order_price", default: () => "'0'" })
  orderPrice: number;

  @Column("int", { name: "pay_price", default: () => "'0'" })
  payPrice: number;

  @Column("int", { name: "delivery_price", default: () => "'0'" })
  deliveryPrice: number;

  @Column("int", { name: "provide_price", default: () => "'0'" })
  providePrice: number;

  @Column("int", { name: "provide_delivery_price", default: () => "'0'" })
  provideDeliveryPrice: number;

  @Column("int", { name: "pg_account", default: () => "'0'" })
  pgAccount: number;

  @Column("int", { name: "card_price", default: () => "'0'" })
  cardPrice: number;

  @Column("int", { name: "mobile_price", default: () => "'0'" })
  mobilePrice: number;
}
