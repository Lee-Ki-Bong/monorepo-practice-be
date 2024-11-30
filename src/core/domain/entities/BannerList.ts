import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("index_edate", ["adminuser", "blEndDate"], {})
@Index("index_id", ["blId"], {})
@Index("index_sdate", ["adminuser", "blStartDate"], {})
@Entity("banner_list", { schema: "makeshop" })
export class BannerList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "bl_id", unsigned: true })
  blId: number;

  @Column("varchar", { name: "bl_name", length: 255 })
  blName: string;

  @Column("enum", {
    name: "bl_is_display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  blIsDisplay: "" | "Y" | "N";

  @Column("datetime", {
    name: "bl_start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  blStartDate: Date;

  @Column("datetime", {
    name: "bl_end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  blEndDate: Date;

  @Column("set", {
    name: "bl_slide_type",
    enum: ["arrow", "paging", "slidebar", "number"],
    default: () => ["arrow"],
  })
  blSlideType: ("arrow" | "paging" | "slidebar" | "number")[];

  @Column("smallint", {
    name: "bl_slide_speed",
    unsigned: true,
    default: () => "'4'",
  })
  blSlideSpeed: number;

  @Column("enum", {
    name: "bl_slide_auto",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  blSlideAuto: "" | "Y" | "N";

  @Column("datetime", {
    name: "bl_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  blRegDate: Date;

  @Column("datetime", {
    name: "bl_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  blModDate: Date;
}
