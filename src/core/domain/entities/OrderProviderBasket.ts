import { Column, Entity, Index } from "typeorm";

@Index("provider", ["adminuser", "provider"], {})
@Index(
  "pvd_cal_complete",
  ["adminuser", "ordernum", "basketNum", "pvdCalComplete"],
  {}
)
@Entity("order_provider_basket", { schema: "makeshop" })
export class OrderProviderBasket {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("char", { primary: true, name: "ordernum", length: 50 })
  ordernum: string;

  @Column("int", {
    primary: true,
    name: "basket_num",
    unsigned: true,
    default: () => "'1'",
  })
  basketNum: number;

  @Column("mediumint", {
    name: "provider",
    unsigned: true,
    default: () => "'0'",
  })
  provider: number;

  @Column("int", { name: "product_price", default: () => "'0'" })
  productPrice: number;

  @Column("int", { name: "product_buyprice", default: () => "'0'" })
  productBuyprice: number;

  @Column("float", {
    name: "pvd_commission",
    unsigned: true,
    precision: 12,
    default: () => "'0'",
  })
  pvdCommission: number;

  @Column("enum", {
    name: "pvd_burden",
    enum: ["", "SHOP", "PROVIDER"],
    default: () => "'SHOP'",
  })
  pvdBurden: "" | "SHOP" | "PROVIDER";

  @Column("enum", {
    name: "pvd_delivery",
    enum: ["", "SHOP", "PROVIDER"],
    default: () => "'SHOP'",
  })
  pvdDelivery: "" | "SHOP" | "PROVIDER";

  @Column("enum", {
    name: "pvd_gift",
    enum: ["", "SHOP", "PROVIDER"],
    default: () => "'SHOP'",
  })
  pvdGift: "" | "SHOP" | "PROVIDER";

  @Column("enum", {
    name: "pvd_cal_complete",
    enum: ["", "WAIT", "REQUEST", "DONE", "CANCEL"],
    default: () => "'WAIT'",
  })
  pvdCalComplete: "" | "WAIT" | "REQUEST" | "DONE" | "CANCEL";
}
