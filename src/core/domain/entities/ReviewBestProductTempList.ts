import { Column, Entity, Index } from "typeorm";

@Index("product_uid", ["adminuser", "productUid"], {})
@Entity("review_best_product_temp_list", { schema: "makeshop" })
export class ReviewBestProductTempList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "product_uid",
    unsigned: true,
    default: () => "'0'",
  })
  productUid: number;

  @Column("int", { name: "view_no", nullable: true, unsigned: true })
  viewNo: number | null;

  @Column("int", { name: "rank", nullable: true, unsigned: true })
  rank: number | null;

  @Column("varchar", { name: "product_name", length: 255 })
  productName: string;

  @Column("enum", {
    name: "display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  display: "" | "Y" | "N";

  @Column("float", {
    name: "score",
    nullable: true,
    precision: 12,
    default: () => "'0'",
  })
  score: number | null;

  @Column("enum", {
    name: "status",
    enum: ["", "A", "O"],
    default: () => "'A'",
  })
  status: "" | "A" | "O";

  @Column("smallint", { name: "review_cnt", default: () => "'0'" })
  reviewCnt: number;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
