import { Column, Entity, Index } from "typeorm";

@Index("code", ["adminuser", "cateCode"], {})
@Index("product_uid", ["adminuser", "productUid"], {})
@Entity("sale_best_list", { schema: "makeshop" })
export class SaleBestList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", {
    primary: true,
    name: "cate_code",
    length: 6,
    default: () => "'0'",
  })
  cateCode: string;

  @Column("varchar", {
    primary: true,
    name: "original_cate_code",
    length: 6,
    default: () => "'0'",
  })
  originalCateCode: string;

  @Column("varchar", { name: "cate_type", length: 10, default: () => "'ALL'" })
  cateType: string;

  @Column("int", {
    primary: true,
    name: "product_uid",
    unsigned: true,
    default: () => "'0'",
  })
  productUid: number;

  @Column("varchar", { name: "product_name", length: 255 })
  productName: string;

  @Column("int", { name: "view_no", nullable: true, unsigned: true })
  viewNo: number | null;

  @Column("int", { name: "rank", nullable: true, unsigned: true })
  rank: number | null;

  @Column("int", { name: "sell_price", default: () => "'0'" })
  sellPrice: number;

  @Column("int", { name: "sale_cnt", unsigned: true, default: () => "'0'" })
  saleCnt: number;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("char", { name: "fix_no", nullable: true, length: 2 })
  fixNo: string | null;
}
