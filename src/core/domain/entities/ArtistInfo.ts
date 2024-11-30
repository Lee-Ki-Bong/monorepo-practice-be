import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_at_uid", ["atUid"], {})
@Index("search_key", ["adminuser", "atName", "atDisplay"], {})
@Entity("artist_info", { schema: "makeshop" })
export class ArtistInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "at_uid" })
  atUid: number;

  @Column("varchar", { name: "at_name", length: 100 })
  atName: string;

  @Column("varchar", { name: "at_sub_name", nullable: true, length: 100 })
  atSubName: string | null;

  @Column("enum", {
    name: "at_display",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  atDisplay: "" | "Y" | "N" | null;

  @Column("varchar", { name: "at_main_category", nullable: true, length: 12 })
  atMainCategory: string | null;

  @Column("varchar", { name: "at_main_img_pc", length: 100 })
  atMainImgPc: string;

  @Column("varchar", { name: "at_main_img_mobile", length: 100 })
  atMainImgMobile: string;

  @Column("varchar", {
    name: "at_main_black_img_pc",
    nullable: true,
    length: 100,
  })
  atMainBlackImgPc: string | null;

  @Column("varchar", {
    name: "at_main_black_img_mobile",
    nullable: true,
    length: 100,
  })
  atMainBlackImgMobile: string | null;

  @Column("varchar", { name: "at_logo_img_pc", length: 100 })
  atLogoImgPc: string;

  @Column("varchar", { name: "at_logo_img_mobile", length: 100 })
  atLogoImgMobile: string;

  @Column("varchar", {
    name: "at_f_logo_img_mobile",
    nullable: true,
    length: 100,
  })
  atFLogoImgMobile: string | null;

  @Column("varchar", { name: "at_sort_date", length: 14 })
  atSortDate: string;

  @Column("datetime", {
    name: "at_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  atRegDate: Date;

  @Column("datetime", {
    name: "at_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  atModDate: Date;
}
