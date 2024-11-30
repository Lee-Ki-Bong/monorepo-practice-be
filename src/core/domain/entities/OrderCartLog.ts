import { Column, Entity } from "typeorm";

@Entity("order_cart_log", { schema: "makeshop" })
export class OrderCartLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 50 })
  ordernum: string;

  @Column("int", {
    primary: true,
    name: "num",
    unsigned: true,
    default: () => "'0'",
  })
  num: number;

  @Column("varchar", { name: "ad_url", nullable: true, length: 100 })
  adUrl: string | null;

  @Column("varchar", { name: "search", nullable: true, length: 100 })
  search: string | null;

  @Column("enum", {
    name: "pay_path",
    enum: ["", "WEB", "MOBILE", "POWERAPP"],
    default: () => "'WEB'",
  })
  payPath: "" | "WEB" | "MOBILE" | "POWERAPP";

  @Column("varchar", { name: "cart_date", nullable: true, length: 12 })
  cartDate: string | null;
}
