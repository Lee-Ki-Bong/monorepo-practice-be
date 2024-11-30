import { Column, Entity } from "typeorm";

@Entity("main_rolling_config", { schema: "makeshop" })
export class MainRollingConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    primary: true,
    name: "mrc_tab",
    enum: ["", "1", "2", "3"],
    default: () => "'1'",
  })
  mrcTab: "" | "1" | "2" | "3";

  @Column("enum", {
    name: "mrc_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mrcUse: "" | "Y" | "N";

  @Column("mediumint", {
    name: "mrc_width",
    unsigned: true,
    default: () => "'0'",
  })
  mrcWidth: number;

  @Column("mediumint", {
    name: "mrc_height",
    unsigned: true,
    default: () => "'0'",
  })
  mrcHeight: number;

  @Column("enum", {
    name: "mrc_direction",
    enum: ["", "horizontal", "vertical"],
    default: () => "'horizontal'",
  })
  mrcDirection: "" | "horizontal" | "vertical";

  @Column("char", { name: "mrc_speed", length: 2 })
  mrcSpeed: string;

  @Column("enum", {
    name: "mrc_random",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mrcRandom: "" | "Y" | "N";

  @Column("enum", {
    name: "mrc_btn_arrow_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mrcBtnArrowUse: "" | "Y" | "N";

  @Column("char", {
    name: "mrc_btn_arrow_type",
    length: 2,
    default: () => "'1'",
  })
  mrcBtnArrowType: string;

  @Column("varchar", { name: "mrc_btn_arrow_color", length: 6 })
  mrcBtnArrowColor: string;

  @Column("varchar", { name: "mrc_btn_arrow_over_color", length: 6 })
  mrcBtnArrowOverColor: string;

  @Column("enum", {
    name: "mrc_btn_arrow_hidden",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mrcBtnArrowHidden: "" | "Y" | "N";

  @Column("char", {
    name: "mrc_btn_arrow_size",
    length: 3,
    default: () => "'100'",
  })
  mrcBtnArrowSize: string;

  @Column("enum", {
    name: "mrc_btn_arrow_position",
    enum: ["", "h-t", "h-m", "h-b", "v-l", "v-m", "v-r"],
    default: () => "'h-t'",
  })
  mrcBtnArrowPosition: "" | "h-t" | "h-m" | "h-b" | "v-l" | "v-m" | "v-r";

  @Column("enum", {
    name: "mrc_btn_page_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mrcBtnPageUse: "" | "Y" | "N";

  @Column("char", { name: "mrc_btn_page_type", length: 2 })
  mrcBtnPageType: string;

  @Column("enum", {
    name: "mrc_btn_page_number",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mrcBtnPageNumber: "" | "Y" | "N";

  @Column("varchar", { name: "mrc_btn_page_color", length: 6 })
  mrcBtnPageColor: string;

  @Column("varchar", { name: "mrc_btn_page_over_color", length: 6 })
  mrcBtnPageOverColor: string;

  @Column("varchar", { name: "mrc_btn_number_color", length: 6 })
  mrcBtnNumberColor: string;

  @Column("char", {
    name: "mrc_btn_page_size",
    length: 3,
    default: () => "'100'",
  })
  mrcBtnPageSize: string;

  @Column("enum", {
    name: "mrc_btn_page_position",
    enum: [
      "",
      "h-t-l",
      "h-t-m",
      "h-t-r",
      "h-b-l",
      "h-b-m",
      "h-b-r",
      "v-t-l",
      "v-m-l",
      "v-b-l",
      "v-t-r",
      "v-m-r",
      "v-b-r",
    ],
    default: () => "'h-t-l'",
  })
  mrcBtnPagePosition:
    | ""
    | "h-t-l"
    | "h-t-m"
    | "h-t-r"
    | "h-b-l"
    | "h-b-m"
    | "h-b-r"
    | "v-t-l"
    | "v-m-l"
    | "v-b-l"
    | "v-t-r"
    | "v-m-r"
    | "v-b-r";

  @Column("enum", {
    name: "mrc_effect",
    enum: [
      "",
      "slide",
      "3dflow",
      "rotate",
      "android",
      "incover",
      "flip",
      "fade",
      "transform",
    ],
    default: () => "'slide'",
  })
  mrcEffect:
    | ""
    | "slide"
    | "3dflow"
    | "rotate"
    | "android"
    | "incover"
    | "flip"
    | "fade"
    | "transform";
}
