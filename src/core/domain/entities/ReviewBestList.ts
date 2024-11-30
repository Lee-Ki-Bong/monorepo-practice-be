import { Column, Entity, Index } from "typeorm";

@Index("product_uid", ["adminuser", "productUid"], {})
@Entity("review_best_list", { schema: "makeshop" })
export class ReviewBestList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "product_uid",
    unsigned: true,
    default: () => "'0'",
  })
  productUid: number;

  @Column("varchar", { primary: true, name: "review_num", length: 7 })
  reviewNum: string;

  @Column("int", { name: "r_no", nullable: true, unsigned: true })
  rNo: number | null;

  @Column("int", { name: "r_rank", nullable: true, unsigned: true })
  rRank: number | null;

  @Column("mediumtext", { name: "content", nullable: true })
  content: string | null;

  @Column("varchar", { name: "id", nullable: true, length: 20 })
  id: string | null;

  @Column("varchar", { name: "attach1", length: 255 })
  attach1: string;

  @Column("varchar", { name: "attach2", length: 255 })
  attach2: string;

  @Column("varchar", { name: "attach3", length: 255 })
  attach3: string;

  @Column("varchar", { name: "attach4", length: 255 })
  attach4: string;

  @Column("int", { name: "recmd", unsigned: true, default: () => "'0'" })
  recmd: number;

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

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
