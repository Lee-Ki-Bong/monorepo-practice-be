import { Column, Entity, Index } from "typeorm";

@Index("product_uid", ["productUid"], {})
@Entity("review_best_except_list", { schema: "makeshop" })
export class ReviewBestExceptList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "product_uid",
    unsigned: true,
    default: () => "'0'",
  })
  productUid: number;

  @Column("varchar", { name: "prd_uid", length: 100 })
  prdUid: string;

  @Column("varchar", { name: "brandcode", length: 12 })
  brandcode: string;

  @Column("varchar", { name: "product_name", length: 255 })
  productName: string;

  @Column("int", { name: "sell_price", default: () => "'0'" })
  sellPrice: number;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
