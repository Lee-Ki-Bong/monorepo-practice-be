import { Column, Entity } from "typeorm";

@Entity("artist_product", { schema: "makeshop" })
export class ArtistProduct {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { primary: true, name: "at_uid", default: () => "'0'" })
  atUid: number;

  @Column("int", { primary: true, name: "ap_uid", default: () => "'1'" })
  apUid: number;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("varchar", { name: "brandcode", nullable: true, length: 12 })
  brandcode: string | null;

  @Column("mediumtext", { name: "add_info" })
  addInfo: string;

  @Column("datetime", {
    name: "ap_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  apRegDate: Date;

  @Column("datetime", {
    name: "ap_sort_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  apSortDate: Date;
}
