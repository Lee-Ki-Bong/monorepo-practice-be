import { Column, Entity, Index } from "typeorm";

@Index("sort_key", ["menuType", "cateCode", "cateSort"], {})
@Entity("admin_menu_basic_category", { schema: "makeshop" })
export class AdminMenuBasicCategory {
  @Column("enum", {
    primary: true,
    name: "menu_type",
    enum: ["", "old", "new"],
    default: () => "'new'",
  })
  menuType: "" | "old" | "new";

  @Column("enum", {
    name: "order_manager",
    nullable: true,
    enum: ["", "S1", "S2", "oo"],
    default: () => "'S1'",
  })
  orderManager: "" | "S1" | "S2" | "oo" | null;

  @Column("varchar", { primary: true, name: "cate_code", length: 255 })
  cateCode: string;

  @Column("int", { name: "cate_sort", default: () => "'0'" })
  cateSort: number;

  @Column("varchar", { name: "cate_name", length: 255 })
  cateName: string;

  @Column("varchar", { name: "cate_url", length: 255 })
  cateUrl: string;

  @Column("varchar", { name: "cate_no", nullable: true, length: 20 })
  cateNo: string | null;

  @Column("mediumtext", { name: "sub_title", nullable: true })
  subTitle: string | null;

  @Column("enum", {
    name: "display",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  display: "" | "Y" | "N" | null;
}
