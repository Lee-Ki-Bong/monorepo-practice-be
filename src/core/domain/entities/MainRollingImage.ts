import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_mri_idx", ["mriIdx"], {})
@Entity("main_rolling_image", { schema: "makeshop" })
export class MainRollingImage {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    primary: true,
    name: "mrc_tab",
    enum: ["", "1", "2", "3"],
    default: () => "'1'",
  })
  mrcTab: "" | "1" | "2" | "3";

  @PrimaryGeneratedColumn({ type: "int", name: "mri_idx", unsigned: true })
  mriIdx: number;

  @Column("tinyint", { name: "mri_sort", default: () => "'0'" })
  mriSort: number;

  @Column("varchar", { name: "mri_img_name", length: 150 })
  mriImgName: string;

  @Column("varchar", { name: "mri_img_link", length: 150 })
  mriImgLink: string;

  @Column("enum", {
    name: "mri_target",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mriTarget: "" | "Y" | "N";

  @Column("datetime", {
    name: "mri_reservation_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  mriReservationDate: Date;

  @Column("datetime", {
    name: "mri_reservation_enddate",
    default: () => "'0000-00-00 00:00:00'",
  })
  mriReservationEnddate: Date;
}
