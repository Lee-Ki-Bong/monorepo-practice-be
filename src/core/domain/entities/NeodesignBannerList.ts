import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("dgnbn_code", ["adminuser", "dgnbnCode"], {})
@Index("dgnbn_device", ["adminuser", "displayDevice"], {})
@Index("display_enddate", ["adminuser", "displayEnddate"], {})
@Index("display_page", ["adminuser", "displayPage"], {})
@Index("display_startdate", ["adminuser", "displayStartdate"], {})
@Index("idx_auto_dgnbn_id", ["dgnbnId"], {})
@Entity("neodesign_banner_list", { schema: "makeshop" })
export class NeodesignBannerList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "dgnbn_id", unsigned: true })
  dgnbnId: number;

  @Column("varchar", { name: "dgnbn_code", length: 20 })
  dgnbnCode: string;

  @Column("varchar", { name: "dgnbn_title", length: 255 })
  dgnbnTitle: string;

  @Column("varchar", {
    name: "banner_type",
    length: 12,
    default: () => "'DEFAULT'",
  })
  bannerType: string;

  @Column("set", {
    name: "display_device",
    enum: ["PC", "MOBILE", "APP"],
    default: () => ["PC", "MOBILE", "APP"],
  })
  displayDevice: ("PC" | "MOBILE" | "APP")[];

  @Column("varchar", {
    name: "display_page",
    length: 20,
    default: () => "'ALL'",
  })
  displayPage: string;

  @Column("char", { name: "display_type", length: 1, default: () => "'N'" })
  displayType: string;

  @Column("datetime", {
    name: "display_startdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  displayStartdate: Date;

  @Column("datetime", {
    name: "display_enddate",
    default: () => "'0000-00-00 00:00:00'",
  })
  displayEnddate: Date;

  @Column("varchar", { name: "pc_sort_num", length: 14 })
  pcSortNum: string;

  @Column("varchar", { name: "mobile_sort_num", length: 14 })
  mobileSortNum: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
