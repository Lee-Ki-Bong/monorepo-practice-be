import { Column, Entity } from "typeorm";

@Entity("product_category_set", { schema: "makeshop" })
export class ProductCategorySet {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "image_view_pc",
    enum: ["", "MAX", "MIN", "TINY"],
    default: () => "'TINY'",
  })
  imageViewPc: "" | "MAX" | "MIN" | "TINY";

  @Column("enum", {
    name: "image_view_mobile",
    enum: ["", "MAX", "MIN", "TINY", "APP"],
    default: () => "'TINY'",
  })
  imageViewMobile: "" | "MAX" | "MIN" | "TINY" | "APP";

  @Column("enum", {
    name: "image_rate_pc",
    enum: ["", "1:1", "3:4", "4:3"],
    default: () => "'3:4'",
  })
  imageRatePc: "" | "1:1" | "3:4" | "4:3";

  @Column("enum", {
    name: "image_rate_mobile",
    enum: ["", "1:1", "3:4", "4:3"],
    default: () => "'3:4'",
  })
  imageRateMobile: "" | "1:1" | "3:4" | "4:3";

  @Column("enum", {
    name: "use_grid_map",
    enum: ["", "CHANGE", "INTERRUPT", "INTERRUPT_MULTI"],
    default: () => "'CHANGE'",
  })
  useGridMap: "" | "CHANGE" | "INTERRUPT" | "INTERRUPT_MULTI";

  @Column("varchar", {
    name: "click_color",
    length: 6,
    default: () => "'484c55'",
  })
  clickColor: string;

  @Column("smallint", {
    name: "click_width",
    unsigned: true,
    default: () => "'3'",
  })
  clickWidth: number;

  @Column("varchar", {
    name: "auto_color",
    length: 6,
    default: () => "'ea4335'",
  })
  autoColor: string;

  @Column("smallint", {
    name: "auto_width",
    unsigned: true,
    default: () => "'1'",
  })
  autoWidth: number;

  @Column("varchar", {
    name: "search_color",
    length: 6,
    default: () => "'ffff00'",
  })
  searchColor: string;

  @Column("smallint", {
    name: "search_width",
    unsigned: true,
    default: () => "'1'",
  })
  searchWidth: number;

  @Column("varchar", {
    name: "now_color",
    length: 6,
    default: () => "'ffa500'",
  })
  nowColor: string;

  @Column("smallint", {
    name: "now_width",
    unsigned: true,
    default: () => "'3'",
  })
  nowWidth: number;

  @Column("smallint", {
    name: "page_cell_pc",
    unsigned: true,
    default: () => "'4'",
  })
  pageCellPc: number;

  @Column("smallint", {
    name: "page_cell_mobile",
    unsigned: true,
    default: () => "'2'",
  })
  pageCellMobile: number;

  @Column("smallint", {
    name: "page_row_pc",
    unsigned: true,
    default: () => "'15'",
  })
  pageRowPc: number;

  @Column("smallint", {
    name: "page_row_mobile",
    unsigned: true,
    default: () => "'15'",
  })
  pageRowMobile: number;
}
