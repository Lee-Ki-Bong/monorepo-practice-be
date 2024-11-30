import { Column, Entity } from "typeorm";

@Entity("cart_option_quickpay", { schema: "makeshop" })
export class CartOptionQuickpay {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "tempid", length: 32 })
  tempid: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("int", {
    primary: true,
    name: "cart_id",
    unsigned: true,
    default: () => "'0'",
  })
  cartId: number;

  @Column("varchar", { primary: true, name: "opt_id", length: 50 })
  optId: string;

  @Column("int", {
    primary: true,
    name: "sto_id",
    unsigned: true,
    default: () => "'0'",
  })
  stoId: number;

  @Column("enum", {
    name: "sto_type",
    enum: ["", "BASIC", "ADDITION"],
    default: () => "'BASIC'",
  })
  stoType: "" | "BASIC" | "ADDITION";

  @Column("varchar", { name: "sto_code", length: 50 })
  stoCode: string;

  @Column("mediumtext", { name: "opt_value" })
  optValue: string;

  @Column("int", { name: "opt_price", default: () => "'0'" })
  optPrice: number;

  @Column("int", { name: "opt_stock", unsigned: true, default: () => "'0'" })
  optStock: number;
}
