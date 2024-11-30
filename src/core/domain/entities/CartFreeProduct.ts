import { Column, Entity } from "typeorm";

@Entity("cart_free_product", { schema: "makeshop" })
export class CartFreeProduct {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "p_uid",
    unsigned: true,
    default: () => "'0'",
  })
  pUid: number;

  @Column("varchar", { name: "p_sort", length: 14 })
  pSort: string;
}
