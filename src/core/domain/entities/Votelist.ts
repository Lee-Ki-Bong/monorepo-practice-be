import { Column, Entity, Index } from "typeorm";

@Index("name", ["date"], {})
@Entity("votelist", { schema: "makeshop" })
export class Votelist {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "code", length: 14 })
  code: string;

  @Column("int", { primary: true, name: "num", default: () => "'0'" })
  num: number;

  @Column("varchar", { name: "name", length: 12 })
  name: string;

  @Column("varchar", { name: "ip", nullable: true, length: 15 })
  ip: string | null;

  @Column("varchar", { name: "subject", length: 255 })
  subject: string;

  @Column("varchar", { name: "date", length: 14 })
  date: string;
}
