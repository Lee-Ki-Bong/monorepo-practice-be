import { Column, Entity } from "typeorm";

@Entity("mplecategory", { schema: "makeshop" })
export class Mplecategory {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "brandcode", length: 12 })
  brandcode: string;

  @Column("int", { name: "uid", unsigned: true, default: () => "'0'" })
  uid: number;

  @Column("varchar", { name: "categoryid", nullable: true, length: 12 })
  categoryid: string | null;

  @Column("varchar", { name: "category", nullable: true, length: 50 })
  category: string | null;

  @Column("char", { name: "flgPrmPrd", nullable: true, length: 1 })
  flgPrmPrd: string | null;

  @Column("char", { name: "flgCatalog", nullable: true, length: 1 })
  flgCatalog: string | null;

  @Column("char", { name: "flgBigSale", nullable: true, length: 1 })
  flgBigSale: string | null;

  @Column("char", { name: "flgWhatsNew", nullable: true, length: 1 })
  flgWhatsNew: string | null;

  @Column("char", { name: "flgBestItem", nullable: true, length: 1 })
  flgBestItem: string | null;

  @Column("char", { name: "flgPrmFlash", nullable: true, length: 1 })
  flgPrmFlash: string | null;

  @Column("char", { name: "flgSpcItems", nullable: true, length: 1 })
  flgSpcItems: string | null;

  @Column("varchar", { name: "remark", nullable: true, length: 255 })
  remark: string | null;

  @Column("varchar", { name: "date", length: 14 })
  date: string;
}
