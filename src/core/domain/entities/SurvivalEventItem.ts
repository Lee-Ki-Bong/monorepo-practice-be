import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_sur_item_idx", ["surItemIdx"], {})
@Index("item_count", ["adminuser", "surIdx", "surItemCount"], {})
@Index("survival_drop", ["adminuser", "surIdx", "surItemIdx", "surDrop"], {})
@Entity("survival_event_item", { schema: "makeshop" })
export class SurvivalEventItem {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("smallint", { primary: true, name: "sur_idx", default: () => "'0'" })
  surIdx: number;

  @PrimaryGeneratedColumn({ type: "smallint", name: "sur_item_idx" })
  surItemIdx: number;

  @Column("varchar", { name: "sur_item_title", length: 255 })
  surItemTitle: string;

  @Column("varchar", { name: "sur_item_image", length: 255 })
  surItemImage: string;

  @Column("varchar", { name: "sur_item_url", length: 255 })
  surItemUrl: string;

  @Column("varchar", { name: "sur_item_target", length: 10 })
  surItemTarget: string;

  @Column("mediumtext", { name: "sur_item_content" })
  surItemContent: string;

  @Column("enum", {
    name: "sur_drop",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  surDrop: "" | "Y" | "N";

  @Column("datetime", {
    name: "date_drop",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateDrop: Date;

  @Column("smallint", { name: "sur_item_ranking", default: () => "'0'" })
  surItemRanking: number;

  @Column("int", { name: "sur_item_count", default: () => "'0'" })
  surItemCount: number;
}
