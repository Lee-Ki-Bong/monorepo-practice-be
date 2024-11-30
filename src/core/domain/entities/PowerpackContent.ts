import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_content_id", ["contentId"], {})
@Entity("powerpack_content", { schema: "makeshop" })
export class PowerpackContent {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "dgnset_id",
    unsigned: true,
    default: () => "'0'",
  })
  dgnsetId: number;

  @Column("varchar", { primary: true, name: "page_type", length: 20 })
  pageType: string;

  @Column("int", {
    primary: true,
    name: "design_id",
    unsigned: true,
    default: () => "'0'",
  })
  designId: number;

  @Column("varchar", { name: "separator1", length: 30 })
  separator1: string;

  @PrimaryGeneratedColumn({ type: "int", name: "content_id", unsigned: true })
  contentId: number;

  @Column("enum", {
    name: "content_type",
    nullable: true,
    enum: ["", "FUNCTION", "CONTENT", "IMAGE", "HTML"],
    default: () => "'FUNCTION'",
  })
  contentType: "" | "FUNCTION" | "CONTENT" | "IMAGE" | "HTML" | null;

  @Column("int", { name: "block_id", unsigned: true, default: () => "'0'" })
  blockId: number;

  @Column("varchar", { name: "content_title", nullable: true, length: 200 })
  contentTitle: string | null;

  @Column("longtext", { name: "content_value" })
  contentValue: string;

  @Column("mediumtext", { name: "content_layout" })
  contentLayout: string;

  @Column("mediumtext", { name: "content_option", nullable: true })
  contentOption: string | null;

  @Column("longtext", { name: "content_html", nullable: true })
  contentHtml: string | null;

  @Column("longtext", { name: "content_css", nullable: true })
  contentCss: string | null;

  @Column("longtext", { name: "content_js", nullable: true })
  contentJs: string | null;

  @Column("enum", {
    name: "use_area_css",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useAreaCss: "" | "Y" | "N" | null;

  @Column("longtext", { name: "area_css", nullable: true })
  areaCss: string | null;

  @Column("enum", {
    name: "content_display",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  contentDisplay: "" | "Y" | "N" | null;

  @Column("longtext", { name: "content_memo", nullable: true })
  contentMemo: string | null;

  @Column("datetime", {
    name: "content_update",
    default: () => "'0000-00-00 00:00:00'",
  })
  contentUpdate: Date;
}
