import { Column, Entity, Index } from "typeorm";

@Index("adminuserspecial", ["adminuser", "special"], {})
@Index("regdate", ["adminuser", "special", "date"], {})
@Entity("product_position", { schema: "makeshop" })
export class ProductPosition {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("smallint", {
    primary: true,
    name: "special",
    unsigned: true,
    default: () => "'0'",
  })
  special: number;

  @Column("char", { name: "date", length: 14 })
  date: string;
}
