import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_id", ["id"], {})
@Index("ordernum", ["adminuser", "ordernum"], {})
@Entity("linkprice_order_basket", { schema: "makeshop" })
export class LinkpriceOrderBasket {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "ordernum", length: 50 })
  ordernum: string;

  @Column("int", { name: "num", default: () => "'0'" })
  num: number;

  @Column("int", { name: "price", default: () => "'0'" })
  price: number;

  @Column("int", { name: "stock", unsigned: true, default: () => "'0'" })
  stock: number;

  @Column("int", { name: "product_id", unsigned: true, default: () => "'0'" })
  productId: number;
}
