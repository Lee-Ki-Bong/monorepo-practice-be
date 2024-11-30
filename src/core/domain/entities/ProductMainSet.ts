import { Column, Entity } from "typeorm";

@Entity("product_main_set", { schema: "makeshop" })
export class ProductMainSet {
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
    name: "use_naver",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useNaver: "" | "Y" | "N";

  @Column("enum", {
    name: "use_daum",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useDaum: "" | "Y" | "N";

  @Column("enum", {
    name: "use_google",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useGoogle: "" | "Y" | "N";

  @Column("enum", {
    name: "use_grid_map",
    enum: ["", "CHANGE", "INTERRUPT", "INTERRUPT_MULTI"],
    default: () => "'CHANGE'",
  })
  useGridMap: "" | "CHANGE" | "INTERRUPT" | "INTERRUPT_MULTI";

  @Column("mediumtext", { name: "main_view_sort" })
  mainViewSort: string;

  @Column("varchar", {
    name: "click_color",
    nullable: true,
    length: 6,
    default: () => "'484c55'",
  })
  clickColor: string | null;

  @Column("smallint", {
    name: "click_width",
    nullable: true,
    unsigned: true,
    default: () => "'3'",
  })
  clickWidth: number | null;

  @Column("varchar", {
    name: "auto_color",
    nullable: true,
    length: 6,
    default: () => "'ea4335'",
  })
  autoColor: string | null;

  @Column("smallint", {
    name: "auto_width",
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  autoWidth: number | null;

  @Column("mediumtext", { name: "fixed_pc", nullable: true })
  fixedPc: string | null;

  @Column("mediumtext", { name: "fixed_mobile", nullable: true })
  fixedMobile: string | null;

  @Column("enum", {
    name: "show_device",
    enum: ["", "PC", "MOBILE"],
    default: () => "'PC'",
  })
  showDevice: "" | "PC" | "MOBILE";
}
