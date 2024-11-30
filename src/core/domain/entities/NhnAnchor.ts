import { Column, Entity } from "typeorm";

@Entity("nhn_anchor", { schema: "makeshop" })
export class NhnAnchor {
  @Column("varchar", { primary: true, name: "adminuser", length: 16 })
  adminuser: string;

  @Column("enum", {
    name: "focus_use",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  focusUse: "" | "N" | "Y";

  @Column("enum", {
    name: "highlight_use",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  highlightUse: "" | "N" | "Y";

  @Column("mediumint", {
    name: "highlight_border",
    unsigned: true,
    default: () => "'2'",
  })
  highlightBorder: number;

  @Column("varchar", {
    name: "highlight_color",
    length: 6,
    default: () => "'1dc409'",
  })
  highlightColor: string;

  @Column("varchar", {
    name: "highlight_text",
    length: 50,
    default: () => "'클릭상품'",
  })
  highlightText: string;

  @Column("varchar", {
    name: "highlight_font_color",
    length: 6,
    default: () => "'FFFFFF'",
  })
  highlightFontColor: string;

  @Column("enum", {
    name: "highlight_font_style",
    enum: ["", "normal", "bold", "italic", "underline", "line-through"],
    default: () => "'normal'",
  })
  highlightFontStyle:
    | ""
    | "normal"
    | "bold"
    | "italic"
    | "underline"
    | "line-through";

  @Column("mediumint", {
    name: "highlight_font_size",
    unsigned: true,
    default: () => "'12'",
  })
  highlightFontSize: number;

  @Column("varchar", {
    name: "highlight_bg",
    length: 6,
    default: () => "'1dc409'",
  })
  highlightBg: string;

  @Column("enum", {
    name: "daum_focus_use",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  daumFocusUse: "" | "N" | "Y";

  @Column("enum", {
    name: "daum_highlight_use",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  daumHighlightUse: "" | "N" | "Y";

  @Column("mediumint", {
    name: "daum_highlight_border",
    unsigned: true,
    default: () => "'2'",
  })
  daumHighlightBorder: number;

  @Column("varchar", {
    name: "daum_highlight_color",
    length: 6,
    default: () => "'5f8dfc'",
  })
  daumHighlightColor: string;

  @Column("varchar", {
    name: "daum_highlight_text",
    length: 50,
    default: () => "'클릭상품'",
  })
  daumHighlightText: string;

  @Column("varchar", {
    name: "daum_highlight_font_color",
    length: 6,
    default: () => "'FFFFFF'",
  })
  daumHighlightFontColor: string;

  @Column("enum", {
    name: "daum_highlight_font_style",
    enum: ["", "normal", "bold", "italic", "underline", "line-through"],
    default: () => "'normal'",
  })
  daumHighlightFontStyle:
    | ""
    | "normal"
    | "bold"
    | "italic"
    | "underline"
    | "line-through";

  @Column("mediumint", {
    name: "daum_highlight_font_size",
    unsigned: true,
    default: () => "'12'",
  })
  daumHighlightFontSize: number;

  @Column("varchar", {
    name: "daum_highlight_bg",
    length: 6,
    default: () => "'5f8dfc'",
  })
  daumHighlightBg: string;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;

  @Column("datetime", {
    name: "moddate",
    default: () => "'0000-00-00 00:00:00'",
  })
  moddate: Date;
}
