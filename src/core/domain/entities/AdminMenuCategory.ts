import { Column, Entity, Index } from "typeorm";

@Index("sort_key", ["adminuser", "menuType", "cateCode", "cateSort"], {})
@Entity("admin_menu_category", { schema: "makeshop" })
export class AdminMenuCategory {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    primary: true,
    name: "menu_type",
    enum: ["", "begin", "pro"],
    default: () => "'begin'",
  })
  menuType: "" | "begin" | "pro";

  @Column("varchar", { primary: true, name: "cate_code", length: 255 })
  cateCode: string;

  @Column("int", { name: "cate_sort", default: () => "'0'" })
  cateSort: number;

  @Column("varchar", { name: "cate_name", length: 255 })
  cateName: string;

  @Column("varchar", { name: "cate_url", length: 255 })
  cateUrl: string;

  @Column("varchar", { name: "cate_no", length: 20 })
  cateNo: string;

  @Column("mediumtext", { name: "sub_title", nullable: true })
  subTitle: string | null;
}
