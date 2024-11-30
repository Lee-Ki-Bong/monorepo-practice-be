import { Column, Entity } from "typeorm";

@Entity("productbarcode", { schema: "makeshop" })
export class Productbarcode {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("int", { name: "cnt", nullable: true, unsigned: true })
  cnt: number | null;
}
