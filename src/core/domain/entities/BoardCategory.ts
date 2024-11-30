import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("code", ["adminuser", "code"], {})
@Index("idx_auto_bc_uid", ["bcUid"], {})
@Entity("board_category", { schema: "makeshop" })
export class BoardCategory {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "bc_uid", unsigned: true })
  bcUid: number;

  @Column("varchar", { name: "code", length: 24 })
  code: string;

  @Column("varchar", { name: "bc_name", length: 240 })
  bcName: string;

  @Column("enum", {
    name: "bc_display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  bcDisplay: "" | "Y" | "N";

  @Column("enum", {
    name: "bc_title_type",
    enum: ["", "N", "IMAGE", "HTML"],
    default: () => "'N'",
  })
  bcTitleType: "" | "N" | "IMAGE" | "HTML";

  @Column("mediumtext", { name: "bc_pc_title", nullable: true })
  bcPcTitle: string | null;

  @Column("mediumtext", { name: "bc_mobile_title", nullable: true })
  bcMobileTitle: string | null;

  @Column("smallint", { name: "bc_sort", unsigned: true, default: () => "'1'" })
  bcSort: number;

  @Column("varchar", { name: "bc_pc_image", nullable: true, length: 255 })
  bcPcImage: string | null;

  @Column("varchar", { name: "bc_mobile_image", nullable: true, length: 255 })
  bcMobileImage: string | null;

  @Column("datetime", { name: "date_insert", nullable: true })
  dateInsert: Date | null;
}
