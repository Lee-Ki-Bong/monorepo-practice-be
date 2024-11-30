import { Column, Entity } from "typeorm";

@Entity("enuri_brand_store", { schema: "makeshop" })
export class EnuriBrandStore {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("smallint", { name: "enabled", unsigned: true, default: () => "'0'" })
  enabled: number;

  @Column("smallint", {
    name: "finder_enabled",
    unsigned: true,
    default: () => "'0'",
  })
  finderEnabled: number;

  @Column("varchar", { name: "name", length: 100 })
  name: string;

  @Column("varchar", { name: "sub_title", length: 200 })
  subTitle: string;

  @Column("mediumtext", { name: "deny_code", nullable: true })
  denyCode: string | null;

  @Column("mediumtext", { name: "deny_uid", nullable: true })
  denyUid: string | null;

  @Column("varchar", { name: "image_logo", length: 255 })
  imageLogo: string;

  @Column("varchar", { name: "image_banner_pc", length: 255 })
  imageBannerPc: string;

  @Column("varchar", { name: "image_banner_mobile", length: 255 })
  imageBannerMobile: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;
}
