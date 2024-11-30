import { Column, Entity } from "typeorm";

@Entity("fc_product_log", { schema: "makeshop" })
export class FcProductLog {
  @Column("varchar", { name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "agency", length: 12 })
  agency: string;

  @Column("varchar", { name: "product_uids", length: 255 })
  productUids: string;

  @Column("mediumtext", { name: "etctype", nullable: true })
  etctype: string | null;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;
}
