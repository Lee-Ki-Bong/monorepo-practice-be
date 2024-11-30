import { Column, Entity, Index } from "typeorm";

@Index("adminuser", ["adminuser", "date", "search"], {})
@Index("date", ["adminuser", "date"], {})
@Index("search", ["adminuser", "search"], {})
@Entity("keyword", { schema: "makeshop" })
export class Keyword {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "date", length: 8 })
  date: string;

  @Column("varchar", { primary: true, name: "search", length: 30 })
  search: string;

  @Column("int", { name: "cnt", nullable: true, default: () => "'0'" })
  cnt: number | null;

  @Column("int", { name: "bcnt", nullable: true, default: () => "'0'" })
  bcnt: number | null;

  @Column("int", { name: "wcnt", nullable: true, default: () => "'0'" })
  wcnt: number | null;

  @Column("int", { name: "mcnt", nullable: true, default: () => "'0'" })
  mcnt: number | null;

  @Column("int", { name: "sum", nullable: true, default: () => "'0'" })
  sum: number | null;

  @Column("mediumtext", { name: "ordernums", nullable: true })
  ordernums: string | null;
}
