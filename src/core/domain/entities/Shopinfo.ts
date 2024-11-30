import { Column, Entity } from "typeorm";

@Entity("shopinfo", { schema: "makeshop" })
export class Shopinfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "date", length: 14 })
  date: string;

  @Column("int", { name: "cnt", nullable: true, default: () => "'0'" })
  cnt: number | null;

  @Column("varchar", { name: "subject", nullable: true, length: 120 })
  subject: string | null;

  @Column("longtext", { name: "content", nullable: true })
  content: string | null;

  @Column("char", {
    name: "makeshop",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  makeshop: string | null;
}
