import { Column, Entity, Index } from "typeorm";

@Index("date", ["date"], {})
@Index("id", ["id"], {})
@Entity("ipdeny", { schema: "makeshop" })
export class Ipdeny {
  @Column("varchar", { primary: true, name: "ip", length: 30 })
  ip: string;

  @Column("varchar", { name: "id", nullable: true, length: 30 })
  id: string | null;

  @Column("varchar", { name: "date", nullable: true, length: 14 })
  date: string | null;

  @Column("int", { name: "cnt", nullable: true, default: () => "'1'" })
  cnt: number | null;
}
