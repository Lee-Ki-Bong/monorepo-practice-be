import { Column, Entity } from "typeorm";

@Entity("wish_option", { schema: "makeshop" })
export class WishOption {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("int", {
    primary: true,
    name: "wish_id",
    unsigned: true,
    default: () => "'0'",
  })
  wishId: number;

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

  @Column("mediumtext", { name: "opt_value" })
  optValue: string;

  @Column("int", { name: "opt_price", default: () => "'0'" })
  optPrice: number;

  @Column("int", { name: "opt_stock", unsigned: true, default: () => "'0'" })
  optStock: number;
}
