import { Column, Entity } from "typeorm";

@Entity("code_option", { schema: "makeshop" })
export class CodeOption {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("char", {
    primary: true,
    name: "cate1",
    length: 3,
    default: () => "'001'",
  })
  cate1: string;

  @Column("char", {
    primary: true,
    name: "cate2",
    length: 3,
    default: () => "'000'",
  })
  cate2: string;

  @Column("char", { primary: true, name: "cate3", length: 3 })
  cate3: string;

  @Column("mediumtext", { name: "category_html", nullable: true })
  categoryHtml: string | null;

  @Column("mediumtext", { name: "category_html_mobile", nullable: true })
  categoryHtmlMobile: string | null;

  @Column("mediumtext", { name: "brand_html", nullable: true })
  brandHtml: string | null;

  @Column("mediumtext", { name: "brand_html_mobile", nullable: true })
  brandHtmlMobile: string | null;

  @Column("tinyint", { name: "brand_sort", default: () => "'0'" })
  brandSort: number;
}
