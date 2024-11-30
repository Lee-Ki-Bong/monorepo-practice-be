import { Column, Entity } from "typeorm";

@Entity("headline_rolling_config", { schema: "makeshop" })
export class HeadlineRollingConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "hrc_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  hrcUse: "" | "Y" | "N";

  @Column("enum", {
    name: "hrc_thumb_position",
    enum: ["", "left", "right", "bottom"],
    default: () => "'left'",
  })
  hrcThumbPosition: "" | "left" | "right" | "bottom";

  @Column("enum", {
    name: "hrc_thumb_type",
    enum: ["", "total", "thumb", "text"],
    default: () => "'total'",
  })
  hrcThumbType: "" | "total" | "thumb" | "text";

  @Column("smallint", {
    name: "hrc_thumb_cnt",
    unsigned: true,
    default: () => "'3'",
  })
  hrcThumbCnt: number;

  @Column("mediumint", {
    name: "hrc_thumb_width",
    unsigned: true,
    default: () => "'0'",
  })
  hrcThumbWidth: number;

  @Column("mediumint", {
    name: "hrc_thumb_height",
    unsigned: true,
    default: () => "'0'",
  })
  hrcThumbHeight: number;

  @Column("smallint", {
    name: "hrc_thumb_margin",
    unsigned: true,
    default: () => "'0'",
  })
  hrcThumbMargin: number;

  @Column("mediumint", {
    name: "hrc_thumb_image_width",
    unsigned: true,
    default: () => "'0'",
  })
  hrcThumbImageWidth: number;

  @Column("mediumint", {
    name: "hrc_thumb_image_height",
    unsigned: true,
    default: () => "'0'",
  })
  hrcThumbImageHeight: number;

  @Column("mediumint", {
    name: "hrc_total_width",
    unsigned: true,
    default: () => "'0'",
  })
  hrcTotalWidth: number;

  @Column("mediumint", {
    name: "hrc_total_height",
    unsigned: true,
    default: () => "'0'",
  })
  hrcTotalHeight: number;

  @Column("smallint", {
    name: "hrc_speed",
    unsigned: true,
    default: () => "'1'",
  })
  hrcSpeed: number;

  @Column("varchar", { name: "hrc_thumb_box_color", length: 6 })
  hrcThumbBoxColor: string;

  @Column("varchar", { name: "hrc_thumb_box_over_color", length: 6 })
  hrcThumbBoxOverColor: string;

  @Column("varchar", { name: "hrc_thumb_box_line_color", length: 6 })
  hrcThumbBoxLineColor: string;

  @Column("varchar", { name: "hrc_thumb_image_border_color", length: 6 })
  hrcThumbImageBorderColor: string;

  @Column("varchar", { name: "hrc_thumb_image_border_over_color", length: 6 })
  hrcThumbImageBorderOverColor: string;

  @Column("varchar", { name: "hrc_thumb_font", length: 10 })
  hrcThumbFont: string;

  @Column("smallint", {
    name: "hrc_thumb_font_size",
    unsigned: true,
    default: () => "'10'",
  })
  hrcThumbFontSize: number;

  @Column("varchar", { name: "hrc_thumb_font_color", length: 6 })
  hrcThumbFontColor: string;

  @Column("enum", {
    name: "hrc_thumb_font_align",
    enum: ["", "left", "center", "right"],
    default: () => "'left'",
  })
  hrcThumbFontAlign: "" | "left" | "center" | "right";
}
