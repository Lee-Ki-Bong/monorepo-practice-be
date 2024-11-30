import { Column, Entity } from "typeorm";

@Entity("product_pagekin", { schema: "makeshop" })
export class ProductPagekin {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("int", {
    primary: true,
    name: "pagekin_seq",
    unsigned: true,
    default: () => "'0'",
  })
  pagekinSeq: number;

  @Column("varchar", { name: "pagekin_img", nullable: true, length: 255 })
  pagekinImg: string | null;

  @Column("varchar", { name: "pagekin_code", nullable: true, length: 20 })
  pagekinCode: string | null;

  @Column("varchar", { name: "pagekin_title", nullable: true, length: 255 })
  pagekinTitle: string | null;

  @Column("int", { name: "pagekin_sort", unsigned: true, default: () => "'0'" })
  pagekinSort: number;

  @Column("datetime", {
    name: "pagekin_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pagekinDate: Date;
}
