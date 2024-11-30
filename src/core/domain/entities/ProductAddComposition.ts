import { Column, Entity } from "typeorm";

@Entity("product_add_composition", { schema: "makeshop" })
export class ProductAddComposition {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "main_uid",
    unsigned: true,
    default: () => "'0'",
  })
  mainUid: number;

  @Column("int", {
    primary: true,
    name: "composition_uid",
    unsigned: true,
    default: () => "'0'",
  })
  compositionUid: number;

  @Column("smallint", {
    name: "sort_num",
    unsigned: true,
    default: () => "'1'",
  })
  sortNum: number;

  @Column("enum", {
    name: "extra_require",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  extraRequire: "" | "Y" | "N";

  @Column("enum", {
    name: "use_product_info",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useProductInfo: "" | "Y" | "N";

  @Column("mediumint", {
    name: "min_order_count",
    unsigned: true,
    default: () => "'0'",
  })
  minOrderCount: number;

  @Column("int", { name: "discount_price", nullable: true })
  discountPrice: number | null;
}
