import { Column, Entity } from "typeorm";

@Entity("collectionorder", { schema: "makeshop" })
export class Collectionorder {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "brandcode", length: 12 })
  brandcode: string;

  @Column("mediumtext", { name: "ordercollection", nullable: true })
  ordercollection: string | null;

  @Column("varchar", { name: "ordercolldate", nullable: true, length: 10 })
  ordercolldate: string | null;
}
