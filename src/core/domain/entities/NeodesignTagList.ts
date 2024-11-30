import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index(
  "idx_page_type",
  ["tlType", "tlPageType", "tlSeparator", "tlDisplay"],
  {}
)
@Index("tl_uid", ["tlUid"], { unique: true })
@Entity("neodesign_tag_list", { schema: "makeshop" })
export class NeodesignTagList {
  @Column("int", {
    primary: true,
    name: "tag_id",
    unsigned: true,
    default: () => "'0'",
  })
  tagId: number;

  @PrimaryGeneratedColumn({ type: "int", name: "tl_uid", unsigned: true })
  tlUid: number;

  @Column("int", { name: "tg_uid", unsigned: true, default: () => "'0'" })
  tgUid: number;

  @Column("varchar", { name: "tg_name", length: 100, default: () => "'기타'" })
  tgName: string;

  @Column("enum", {
    name: "tl_type",
    enum: ["", "PC", "MOBILE", "SOHO"],
    default: () => "'PC'",
  })
  tlType: "" | "PC" | "MOBILE" | "SOHO";

  @Column("varchar", { name: "tl_page_type", length: 20 })
  tlPageType: string;

  @Column("varchar", { name: "tl_separator", nullable: true, length: 50 })
  tlSeparator: string | null;

  @Column("enum", {
    name: "tl_display",
    enum: ["", "N", "Y", "P"],
    default: () => "'N'",
  })
  tlDisplay: "" | "N" | "Y" | "P";

  @Column("int", { name: "func_uid", unsigned: true, default: () => "'0'" })
  funcUid: number;

  @Column("datetime", { name: "tl_mod_date", nullable: true })
  tlModDate: Date | null;
}
