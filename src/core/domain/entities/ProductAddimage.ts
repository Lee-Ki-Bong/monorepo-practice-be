import { Column, Entity, Index } from "typeorm";

@Index("uid", ["uid"], {})
@Entity("product_addimage", { schema: "makeshop" })
export class ProductAddimage {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("varchar", { name: "addimage1", length: 25 })
  addimage1: string;

  @Column("varchar", { name: "addimage2", length: 25 })
  addimage2: string;

  @Column("varchar", { name: "addimage3", length: 25 })
  addimage3: string;

  @Column("varchar", { name: "addimage4", length: 25 })
  addimage4: string;

  @Column("varchar", { name: "addimage5", length: 25 })
  addimage5: string;

  @Column("varchar", { name: "addimage6", length: 25 })
  addimage6: string;

  @Column("varchar", { name: "addimage7", length: 25 })
  addimage7: string;

  @Column("varchar", { name: "addimage8", length: 25 })
  addimage8: string;

  @Column("varchar", { name: "addimage9", length: 25 })
  addimage9: string;

  @Column("varchar", { name: "addimage10", length: 25 })
  addimage10: string;

  @Column("varchar", { name: "addimage11", length: 25 })
  addimage11: string;

  @Column("varchar", { name: "addimage12", length: 25 })
  addimage12: string;

  @Column("mediumtext", { name: "tracklist1", nullable: true })
  tracklist1: string | null;

  @Column("mediumtext", { name: "tracklist2", nullable: true })
  tracklist2: string | null;

  @Column("mediumtext", { name: "tracklist3", nullable: true })
  tracklist3: string | null;

  @Column("mediumtext", { name: "tracklist4", nullable: true })
  tracklist4: string | null;

  @Column("mediumtext", { name: "tracklist5", nullable: true })
  tracklist5: string | null;

  @Column("mediumtext", { name: "tracklist6", nullable: true })
  tracklist6: string | null;

  @Column("mediumtext", { name: "tracklist7", nullable: true })
  tracklist7: string | null;

  @Column("mediumtext", { name: "tracklist8", nullable: true })
  tracklist8: string | null;

  @Column("mediumtext", { name: "tracklist9", nullable: true })
  tracklist9: string | null;

  @Column("mediumtext", { name: "tracklist10", nullable: true })
  tracklist10: string | null;

  @Column("datetime", {
    name: "add_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  addDate: Date;
}
