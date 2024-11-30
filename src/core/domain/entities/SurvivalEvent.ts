import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_sur_idx", ["surIdx"], {})
@Entity("survival_event", { schema: "makeshop" })
export class SurvivalEvent {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "smallint", name: "sur_idx" })
  surIdx: number;

  @Column("enum", {
    name: "sur_use",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  surUse: "" | "Y" | "N";

  @Column("enum", {
    name: "sur_dtype",
    enum: ["", "LIST", "GALLERY", "HTML"],
    default: () => "'LIST'",
  })
  surDtype: "" | "LIST" | "GALLERY" | "HTML";

  @Column("mediumtext", { name: "sur_dhtml" })
  surDhtml: string;

  @Column("datetime", {
    name: "sur_sdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  surSdate: Date;

  @Column("datetime", {
    name: "sur_edate",
    default: () => "'0000-00-00 00:00:00'",
  })
  surEdate: Date;

  @Column("varchar", { name: "sur_title", length: 255 })
  surTitle: string;

  @Column("varchar", { name: "sur_title_image", length: 255 })
  surTitleImage: string;

  @Column("mediumtext", { name: "sur_content" })
  surContent: string;

  @Column("varchar", { name: "sur_drop_period", length: 10 })
  surDropPeriod: string;

  @Column("smallint", { name: "sur_drop_count", default: () => "'0'" })
  surDropCount: number;

  @Column("smallint", { name: "sur_arrange_line", default: () => "'0'" })
  surArrangeLine: number;

  @Column("enum", {
    name: "sur_multi_selection",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  surMultiSelection: "" | "Y" | "N";

  @Column("smallint", { name: "sur_selection_count", default: () => "'0'" })
  surSelectionCount: number;

  @Column("enum", {
    name: "sur_graph",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  surGraph: "" | "Y" | "N";

  @Column("varchar", { name: "sur_graph_color", length: 6 })
  surGraphColor: string;

  @Column("enum", {
    name: "sur_permission",
    enum: ["", "M", "G"],
    default: () => "'M'",
  })
  surPermission: "" | "M" | "G";

  @Column("varchar", { name: "sur_apply_limited", length: 10 })
  surApplyLimited: string;

  @Column("enum", {
    name: "sur_comment_required",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  surCommentRequired: "" | "Y" | "N";

  @Column("enum", {
    name: "sur_comment_writer",
    enum: ["", "ID", "NAME"],
    default: () => "'ID'",
  })
  surCommentWriter: "" | "ID" | "NAME";

  @Column("enum", {
    name: "sur_random",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  surRandom: "" | "Y" | "N";

  @Column("enum", {
    name: "sur_drop_item",
    enum: ["", "NS", "IGNS", "OFF"],
    default: () => "'NS'",
  })
  surDropItem: "" | "NS" | "IGNS" | "OFF";

  @Column("datetime", {
    name: "date_insert",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateInsert: Date;

  @Column("datetime", {
    name: "date_update",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateUpdate: Date;

  @Column("varchar", { name: "update_ip", length: 20 })
  updateIp: string;
}
