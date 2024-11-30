import { Column, Entity } from "typeorm";

@Entity("cart_free", { schema: "makeshop" })
export class CartFree {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "select_product",
    enum: ["", "ALL", "CATEGORY", "PRODUCT"],
    default: () => "'ALL'",
  })
  selectProduct: "" | "ALL" | "CATEGORY" | "PRODUCT";

  @Column("enum", {
    name: "price_range_set",
    enum: ["", "ALL", "RANGE"],
    default: () => "'ALL'",
  })
  priceRangeSet: "" | "ALL" | "RANGE";

  @Column("enum", {
    name: "product_sort",
    enum: ["", "BEST", "NEW"],
    default: () => "'BEST'",
  })
  productSort: "" | "BEST" | "NEW";

  @Column("set", { name: "version", nullable: true, enum: ["PC", "MOBILE"] })
  version: ("PC" | "MOBILE")[] | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "update_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  updateDate: Date;

  @Column("int", { name: "price_range_start", default: () => "'0'" })
  priceRangeStart: number;

  @Column("int", { name: "price_range_end", default: () => "'0'" })
  priceRangeEnd: number;
}
