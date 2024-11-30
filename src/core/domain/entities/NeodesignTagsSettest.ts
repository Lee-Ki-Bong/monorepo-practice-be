import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_tag_type", ["tagId", "tagType", "tagName"], {})
@Index("tag_name", ["tagName"], { unique: true })
@Entity("neodesign_tags_settest", { schema: "makeshop" })
export class NeodesignTagsSettest {
  @PrimaryGeneratedColumn({ type: "int", name: "tag_id", unsigned: true })
  tagId: number;

  @Column("enum", {
    name: "tag_type",
    nullable: true,
    enum: ["", "NORMAL", "MAKESHOP"],
    default: () => "'NORMAL'",
  })
  tagType: "" | "NORMAL" | "MAKESHOP" | null;

  @Column("enum", {
    name: "tag_kind",
    enum: [
      "",
      "LOOP",
      "IF",
      "FORM",
      "INPUT",
      "OPEN",
      "LINK",
      "SUB_ECHO",
      "ECHO",
      "BLOCK",
      "INCLUDE",
      "SCRIPT",
    ],
    default: () => "'ECHO'",
  })
  tagKind:
    | ""
    | "LOOP"
    | "IF"
    | "FORM"
    | "INPUT"
    | "OPEN"
    | "LINK"
    | "SUB_ECHO"
    | "ECHO"
    | "BLOCK"
    | "INCLUDE"
    | "SCRIPT";

  @Column("set", {
    name: "tag_version",
    enum: ["S1", "OO", "UNIFY"],
    default: () => ["S1", "OO", "UNIFY"],
  })
  tagVersion: ("S1" | "OO" | "UNIFY")[];

  @Column("enum", {
    name: "tag_is_ajax",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  tagIsAjax: "" | "N" | "Y";

  @Column("varchar", { name: "tag_attr", length: 255 })
  tagAttr: string;

  @Column("varchar", { name: "tag_name", unique: true, length: 100 })
  tagName: string;

  @Column("varchar", { name: "tag_keyword", nullable: true, length: 100 })
  tagKeyword: string | null;

  @Column("varchar", { name: "tag_description", nullable: true, length: 255 })
  tagDescription: string | null;

  @Column("mediumtext", { name: "tag_example", nullable: true })
  tagExample: string | null;

  @Column("mediumtext", { name: "tag_html", nullable: true })
  tagHtml: string | null;

  @Column("mediumtext", { name: "tag_css", nullable: true })
  tagCss: string | null;

  @Column("datetime", { name: "tag_date_insert", nullable: true })
  tagDateInsert: Date | null;

  @Column("datetime", { name: "tag_date_modify", nullable: true })
  tagDateModify: Date | null;
}
