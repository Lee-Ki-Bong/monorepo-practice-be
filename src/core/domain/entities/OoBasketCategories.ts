import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index(
  "order_product_cate",
  ["adminuser", "ordernum", "category", "productUid"],
  { unique: true }
)
@Entity("oo_basket_categories", { schema: "makeshop" })
export class OoBasketCategories {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", { name: "product_uid", unsigned: true, default: () => "'0'" })
  productUid: number;

  @Column("varchar", { name: "category", length: 9 })
  category: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'1001-01-01 00:00:00'",
  })
  regDate: Date;
}
