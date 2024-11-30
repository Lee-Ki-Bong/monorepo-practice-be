import { Column, Entity, Index } from "typeorm";

@Index("product_uid", ["adminuser", "ordernum", "productUid"], {})
@Entity("cart_free_order", { schema: "makeshop" })
export class CartFreeOrder {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", { primary: true, name: "basket_num", default: () => "'0'" })
  basketNum: number;

  @Column("varchar", { name: "user_id", length: 20 })
  userId: string;

  @Column("int", { name: "product_uid", unsigned: true, default: () => "'0'" })
  productUid: number;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
