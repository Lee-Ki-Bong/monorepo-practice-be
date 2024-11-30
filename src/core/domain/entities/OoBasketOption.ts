import { Column, Entity } from "typeorm";

@Entity("oo_basket_option", { schema: "makeshop" })
export class OoBasketOption {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", {
    primary: true,
    name: "basket_num",
    unsigned: true,
    default: () => "'0'",
  })
  basketNum: number;

  @Column("int", {
    primary: true,
    name: "product_uid",
    unsigned: true,
    default: () => "'0'",
  })
  productUid: number;

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
    name: "opt_type",
    enum: ["", "BASIC", "ADDITION", "HYBRID"],
    default: () => "'BASIC'",
  })
  optType: "" | "BASIC" | "ADDITION" | "HYBRID";

  @Column("varchar", { name: "sto_code", length: 50 })
  stoCode: string;

  @Column("mediumtext", { name: "opt_value" })
  optValue: string;

  @Column("int", { name: "opt_price", default: () => "'0'" })
  optPrice: number;

  @Column("int", { name: "opt_stock", unsigned: true, default: () => "'0'" })
  optStock: number;
}