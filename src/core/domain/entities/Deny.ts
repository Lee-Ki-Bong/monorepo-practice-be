import { Column, Entity, Index } from "typeorm";

@Index("date", ["date"], {})
@Entity("deny", { schema: "makeshop" })
export class Deny {
  @Column("varchar", { primary: true, name: "ip", length: 15 })
  ip: string;

  @Column("varchar", { primary: true, name: "db", length: 12 })
  db: string;

  @Column("varchar", { primary: true, name: "date", length: 10 })
  date: string;

  @Column("varchar", { name: "browser", nullable: true, length: 200 })
  browser: string | null;
}
