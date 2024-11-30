import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_hri_idx", ["hriIdx"], {})
@Entity("headline_rolling_image", { schema: "makeshop" })
export class HeadlineRollingImage {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "hri_idx", unsigned: true })
  hriIdx: number;

  @Column("char", { name: "hri_sort", length: 2 })
  hriSort: string;

  @Column("varchar", { name: "hri_thumb_img_name", length: 150 })
  hriThumbImgName: string;

  @Column("varchar", { name: "hri_img_name", length: 150 })
  hriImgName: string;

  @Column("varchar", { name: "hri_thumb_text", length: 100 })
  hriThumbText: string;

  @Column("varchar", { name: "hri_img_link", length: 100 })
  hriImgLink: string;

  @Column("enum", {
    name: "hri_target",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  hriTarget: "" | "Y" | "N";
}
