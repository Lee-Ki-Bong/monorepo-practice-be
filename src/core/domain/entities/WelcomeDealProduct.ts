import { Column, Entity } from "typeorm";

@Entity("welcome_deal_product", { schema: "makeshop" })
export class WelcomeDealProduct {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "h_id", length: 12 })
  hId: string;

  @Column("varchar", { primary: true, name: "product_uid", length: 12 })
  productUid: string;

  @Column("mediumint", { name: "product_sort", nullable: true, unsigned: true })
  productSort: number | null;
}
