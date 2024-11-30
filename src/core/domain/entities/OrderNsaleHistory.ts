import { Column, Entity } from "typeorm";

@Entity("order_nsale_history", { schema: "makeshop" })
export class OrderNsaleHistory {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("date", {
    primary: true,
    name: "order_date",
    default: () => "'0000-00-00'",
  })
  orderDate: string;

  @Column("enum", {
    primary: true,
    name: "order_supply",
    enum: ["", "M", "S"],
    default: () => "'M'",
  })
  orderSupply: "" | "M" | "S";

  @Column("int", { name: "order_count", default: () => "'0'" })
  orderCount: number;

  @Column("int", { name: "order_price", default: () => "'0'" })
  orderPrice: number;

  @Column("int", { name: "not_paid", default: () => "'0'" })
  notPaid: number;

  @Column("int", { name: "total_price", default: () => "'0'" })
  totalPrice: number;

  @Column("int", { name: "order_cancel", default: () => "'0'" })
  orderCancel: number;

  @Column("int", { name: "delivery_price", default: () => "'0'" })
  deliveryPrice: number;

  @Column("int", { name: "pg_account", default: () => "'0'" })
  pgAccount: number;

  @Column("int", { name: "account_price", default: () => "'0'" })
  accountPrice: number;

  @Column("int", { name: "card_price", default: () => "'0'" })
  cardPrice: number;

  @Column("int", { name: "mobile_price", default: () => "'0'" })
  mobilePrice: number;

  @Column("int", { name: "cash_price", default: () => "'0'" })
  cashPrice: number;

  @Column("int", { name: "escrow_price", default: () => "'0'" })
  escrowPrice: number;

  @Column("int", { name: "transfer_price", default: () => "'0'" })
  transferPrice: number;

  @Column("int", { name: "reserve_price", default: () => "'0'" })
  reservePrice: number;

  @Column("int", { name: "okcashbag_price", default: () => "'0'" })
  okcashbagPrice: number;

  @Column("int", { name: "emoney_price", default: () => "'0'" })
  emoneyPrice: number;

  @Column("int", { name: "other_price", default: () => "'0'" })
  otherPrice: number;
}
