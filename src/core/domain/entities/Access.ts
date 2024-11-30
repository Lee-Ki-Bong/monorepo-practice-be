import { Column, Entity, Index } from "typeorm";

@Index("date", ["date"], {})
@Entity("access", { schema: "makeshop" })
export class Access {
  @Column("varchar", { primary: true, name: "ip", length: 15 })
  ip: string;

  @Column("varchar", { primary: true, name: "date", length: 10 })
  date: string;

  @Column("varchar", { primary: true, name: "db", length: 12 })
  db: string;

  @Column("varchar", { primary: true, name: "program", length: 20 })
  program: string;

  @Column("bigint", {
    name: "cnt",
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  cnt: string | null;
}
