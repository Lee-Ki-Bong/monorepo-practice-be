import { Column, Entity } from "typeorm";

@Entity("highlight_config", { schema: "makeshop" })
export class HighlightConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "hc_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  hcUse: "" | "Y" | "N";

  @Column("mediumint", {
    name: "hc_total_width",
    unsigned: true,
    default: () => "'0'",
  })
  hcTotalWidth: number;

  @Column("mediumint", {
    name: "hc_total_height",
    unsigned: true,
    default: () => "'0'",
  })
  hcTotalHeight: number;

  @Column("enum", {
    name: "hc_item_image_type",
    enum: ["", "list", "detail", "max", "mobile"],
    default: () => "'list'",
  })
  hcItemImageType: "" | "list" | "detail" | "max" | "mobile";

  @Column("mediumint", {
    name: "hc_item_width",
    unsigned: true,
    default: () => "'0'",
  })
  hcItemWidth: number;

  @Column("mediumint", {
    name: "hc_item_height",
    unsigned: true,
    default: () => "'0'",
  })
  hcItemHeight: number;

  @Column("varchar", { name: "hc_item_row_col", length: 6 })
  hcItemRowCol: string;

  @Column("mediumint", {
    name: "hc_item_margin_width",
    unsigned: true,
    default: () => "'0'",
  })
  hcItemMarginWidth: number;

  @Column("mediumint", {
    name: "hc_item_margin_height",
    unsigned: true,
    default: () => "'0'",
  })
  hcItemMarginHeight: number;

  @Column("smallint", {
    name: "hc_speed",
    unsigned: true,
    default: () => "'1'",
  })
  hcSpeed: number;

  @Column("smallint", {
    name: "hc_item_border",
    unsigned: true,
    default: () => "'0'",
  })
  hcItemBorder: number;

  @Column("varchar", { name: "hc_item_border_color", length: 6 })
  hcItemBorderColor: string;

  @Column("enum", {
    name: "hc_item_name_display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  hcItemNameDisplay: "" | "Y" | "N";

  @Column("varchar", { name: "hc_item_name_font", length: 10 })
  hcItemNameFont: string;

  @Column("smallint", {
    name: "hc_item_name_font_size",
    unsigned: true,
    default: () => "'10'",
  })
  hcItemNameFontSize: number;

  @Column("varchar", { name: "hc_item_name_font_color", length: 6 })
  hcItemNameFontColor: string;

  @Column("enum", {
    name: "hc_item_name_font_align",
    enum: ["", "left", "center", "right"],
    default: () => "'left'",
  })
  hcItemNameFontAlign: "" | "left" | "center" | "right";

  @Column("enum", {
    name: "hc_item_name_font_length",
    enum: ["", "all", "cut"],
    default: () => "'all'",
  })
  hcItemNameFontLength: "" | "all" | "cut";

  @Column("enum", {
    name: "hc_item_price_display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  hcItemPriceDisplay: "" | "Y" | "N";

  @Column("varchar", { name: "hc_item_price_font", length: 10 })
  hcItemPriceFont: string;

  @Column("smallint", {
    name: "hc_item_price_font_size",
    unsigned: true,
    default: () => "'10'",
  })
  hcItemPriceFontSize: number;

  @Column("varchar", { name: "hc_item_price_font_color", length: 6 })
  hcItemPriceFontColor: string;

  @Column("enum", {
    name: "hc_item_price_font_align",
    enum: ["", "left", "center", "right"],
    default: () => "'left'",
  })
  hcItemPriceFontAlign: "" | "left" | "center" | "right";

  @Column("enum", {
    name: "hc_btn_arrow_use",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  hcBtnArrowUse: "" | "Y" | "N";

  @Column("enum", {
    name: "hc_btn_arrow_type",
    enum: ["", "1", "2", "3", "4"],
    default: () => "'1'",
  })
  hcBtnArrowType: "" | "1" | "2" | "3" | "4";

  @Column("varchar", { name: "hc_btn_arrow_color", length: 6 })
  hcBtnArrowColor: string;

  @Column("varchar", { name: "hc_btn_arrow_over_color", length: 6 })
  hcBtnArrowOverColor: string;

  @Column("enum", {
    name: "hc_btn_arrow_hidden",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  hcBtnArrowHidden: "" | "N" | "Y";

  @Column("char", {
    name: "hc_btn_arrow_size",
    length: 3,
    default: () => "'20'",
  })
  hcBtnArrowSize: string;

  @Column("enum", {
    name: "hc_btn_arrow_position",
    enum: ["", "h-t", "h-m", "h-b"],
    default: () => "'h-m'",
  })
  hcBtnArrowPosition: "" | "h-t" | "h-m" | "h-b";

  @Column("enum", {
    name: "hc_item_sort_type",
    enum: ["", "list", "random", "first"],
    default: () => "'list'",
  })
  hcItemSortType: "" | "list" | "random" | "first";

  @Column("mediumtext", { name: "hc_prd_list" })
  hcPrdList: string;
}
