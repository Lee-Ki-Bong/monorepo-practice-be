import { Column, Entity } from "typeorm";

@Entity("order_discount_text", { schema: "makeshop" })
export class OrderDiscountText {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", {
    primary: true,
    name: "num",
    unsigned: true,
    default: () => "'0'",
  })
  num: number;

  @Column("mediumtext", { name: "discount_text" })
  discountText: string;
}
