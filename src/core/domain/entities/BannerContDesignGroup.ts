import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_bc_group_uid", ["bcGroupUid"], {})
@Entity("banner_cont_design_group", { schema: "makeshop" })
export class BannerContDesignGroup {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "bc_group_uid", unsigned: true })
  bcGroupUid: number;

  @Column("varchar", { name: "bc_group_subject", length: 100 })
  bcGroupSubject: string;

  @Column("enum", {
    name: "bc_group_display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  bcGroupDisplay: "" | "Y" | "N";

  @Column("enum", {
    name: "bc_video_banner",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  bcVideoBanner: "" | "Y" | "N";
}
