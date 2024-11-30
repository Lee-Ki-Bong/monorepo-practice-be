import { Column, Entity } from "typeorm";

@Entity("collection", { schema: "makeshop" })
export class Collection {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "brandcode", length: 12 })
  brandcode: string;

  @Column("varchar", { name: "add_discount", length: 10, default: () => "'0'" })
  addDiscount: string;

  @Column("mediumtext", { name: "collection", nullable: true })
  collection: string | null;
}
