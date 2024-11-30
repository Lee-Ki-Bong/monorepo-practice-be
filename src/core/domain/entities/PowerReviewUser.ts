import { Column, Entity, Index } from "typeorm";

@Index("index_order", ["adminuser", "ordernum", "basketnum"], {})
@Index("user", ["adminuser", "id"], {})
@Entity("power_review_user", { schema: "makeshop" })
export class PowerReviewUser {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "id", length: 20 })
  id: string;

  @Column("int", { name: "product_uid", default: () => "'0'" })
  productUid: number;

  @Column("varchar", { name: "ordernum", length: 50 })
  ordernum: string;

  @Column("int", { name: "basketnum", default: () => "'0'" })
  basketnum: number;

  @Column("varchar", { primary: true, name: "code", length: 24 })
  code: string;

  @Column("varchar", { primary: true, name: "num1", length: 7 })
  num1: string;

  @Column("varchar", { primary: true, name: "num2", length: 5 })
  num2: string;
}
