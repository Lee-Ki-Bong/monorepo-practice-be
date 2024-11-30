import { Column, Entity } from "typeorm";

@Entity("prmax", { schema: "makeshop" })
export class Prmax {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "brandcode", length: 12 })
  brandcode: string;

  @Column("mediumint", { name: "categoryid", nullable: true, unsigned: true })
  categoryid: number | null;

  @Column("varchar", { name: "date", length: 14 })
  date: string;
}
