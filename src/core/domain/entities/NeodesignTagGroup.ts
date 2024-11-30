import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_tag_group", ["tgName", "tgType", "tgPageType", "tgDisplay"], {})
@Entity("neodesign_tag_group", { schema: "makeshop" })
export class NeodesignTagGroup {
  @PrimaryGeneratedColumn({ type: "int", name: "tg_uid", unsigned: true })
  tgUid: number;

  @Column("varchar", { name: "tg_name", length: 100 })
  tgName: string;

  @Column("varchar", { name: "tg_page_type", length: 20 })
  tgPageType: string;

  @Column("varchar", { name: "tg_helplink", nullable: true, length: 100 })
  tgHelplink: string | null;

  @Column("enum", {
    name: "tg_type",
    enum: ["", "PC", "MOBILE"],
    default: () => "'PC'",
  })
  tgType: "" | "PC" | "MOBILE";

  @Column("enum", {
    name: "tg_display",
    enum: ["", "N", "Y", "P"],
    default: () => "'N'",
  })
  tgDisplay: "" | "N" | "Y" | "P";

  @Column("datetime", { name: "tg_date_insert", nullable: true })
  tgDateInsert: Date | null;

  @Column("datetime", { name: "tg_date_modify", nullable: true })
  tgDateModify: Date | null;

  @Column("int", { name: "tg_order", unsigned: true, default: () => "'1'" })
  tgOrder: number;
}
