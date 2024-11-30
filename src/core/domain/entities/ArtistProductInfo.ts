import { Column, Entity, Index } from "typeorm";

@Index("display", ["adminuser", "atUid", "apDisplay"], {})
@Entity("artist_product_info", { schema: "makeshop" })
export class ArtistProductInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("int", { primary: true, name: "at_uid", default: () => "'0'" })
  atUid: number;

  @Column("int", { primary: true, name: "ap_uid", default: () => "'1'" })
  apUid: number;

  @Column("varchar", { name: "ap_title", length: 100 })
  apTitle: string;

  @Column("varchar", { name: "ap_sub_title", length: 100 })
  apSubTitle: string;

  @Column("enum", {
    name: "ap_display",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  apDisplay: "" | "Y" | "N" | null;

  @Column("datetime", {
    name: "ap_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  apRegDate: Date;

  @Column("datetime", {
    name: "ap_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  apModDate: Date;
}
