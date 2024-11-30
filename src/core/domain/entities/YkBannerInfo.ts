import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_ba_uid", ["baUid"], {})
@Entity("yk_banner_info", { schema: "makeshop" })
export class YkBannerInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { name: "uid", unsigned: true, default: () => "'0'" })
  uid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ba_uid", unsigned: true })
  baUid: number;

  @Column("smallint", {
    name: "banner_date_type",
    unsigned: true,
    default: () => "'0'",
  })
  bannerDateType: number;

  @Column("datetime", {
    name: "banner_start_date",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  bannerStartDate: Date | null;

  @Column("datetime", {
    name: "banner_end_date",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  bannerEndDate: Date | null;

  @Column("varchar", { name: "display", length: 10 })
  display: string;

  @Column("varchar", { name: "pc_img", nullable: true, length: 150 })
  pcImg: string | null;

  @Column("varchar", { name: "pc_url", nullable: true, length: 255 })
  pcUrl: string | null;

  @Column("varchar", { name: "pc_window", nullable: true, length: 10 })
  pcWindow: string | null;

  @Column("varchar", { name: "mo_img", nullable: true, length: 150 })
  moImg: string | null;

  @Column("varchar", { name: "mo_url", nullable: true, length: 255 })
  moUrl: string | null;

  @Column("varchar", { name: "mo_window", nullable: true, length: 10 })
  moWindow: string | null;

  @Column("mediumtext", { name: "alt", nullable: true })
  alt: string | null;

  @Column("smallint", {
    name: "sort_num",
    unsigned: true,
    default: () => "'0'",
  })
  sortNum: number;
}
