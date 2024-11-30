import { Column, Entity, Index } from "typeorm";

@Index("date", ["date"], {})
@Entity("loginlist", { schema: "makeshop" })
export class Loginlist {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "date", length: 8 })
  date: string;

  @Column("mediumint", {
    name: "cnt",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  cnt: number | null;

  @Column("mediumtext", { name: "loginid", nullable: true })
  loginid: string | null;
}
