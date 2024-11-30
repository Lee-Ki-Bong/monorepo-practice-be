import { Column, Entity, Index } from "typeorm";

@Index("mdiary_index_admin_shopname", ["adminuser", "shopname"], {})
@Entity("mdiary", { schema: "makeshop" })
export class Mdiary {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "daum_auth_status",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  daumAuthStatus: "" | "Y" | "N";

  @Column("enum", {
    name: "mdiary_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mdiaryUse: "" | "Y" | "N";

  @Column("enum", {
    name: "mdiary_detailbanner_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mdiaryDetailbannerUse: "" | "Y" | "N";

  @Column("varchar", { name: "mdiary_title_img", nullable: true, length: 20 })
  mdiaryTitleImg: string | null;

  @Column("varchar", { name: "mdiary_banner_img", nullable: true, length: 20 })
  mdiaryBannerImg: string | null;

  @Column("varchar", {
    name: "mdiary_detailbanner_img",
    nullable: true,
    length: 25,
  })
  mdiaryDetailbannerImg: string | null;

  @Column("varchar", { name: "mdiary_subtitle", nullable: true, length: 200 })
  mdiarySubtitle: string | null;

  @Column("varchar", { name: "shopname", length: 100 })
  shopname: string;

  @Column("varchar", { name: "shopurl", length: 50 })
  shopurl: string;

  @Column("varchar", { name: "mdiary_hname", nullable: true, length: 30 })
  mdiaryHname: string | null;

  @Column("varchar", { name: "mdiary_tel", nullable: true, length: 15 })
  mdiaryTel: string | null;

  @Column("datetime", {
    name: "mdiary_register_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  mdiaryRegisterDate: Date;

  @Column("smallint", {
    name: "mdiary_list_count",
    unsigned: true,
    default: () => "'10'",
  })
  mdiaryListCount: number;
}
