import { Column, Entity, Index } from "typeorm";

@Index("adminuser", ["adminuser", "date"], {})
@Index("date", ["adminuser", "date"], {})
@Entity("logs", { schema: "makeshop" })
export class Logs {
  @Column("varchar", { name: "adminuser", length: 20 })
  adminuser: string;

  @Column("varchar", { name: "subid", nullable: true, length: 20 })
  subid: string | null;

  @Column("varchar", { name: "date", length: 16 })
  date: string;

  @Column("varchar", { name: "ip", nullable: true, length: 15 })
  ip: string | null;

  @Column("mediumtext", { name: "content", nullable: true })
  content: string | null;
}
