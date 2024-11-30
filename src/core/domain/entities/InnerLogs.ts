import { Column, Entity, Index } from "typeorm";

@Index("adminuser", ["adminuser", "date"], {})
@Entity("inner_logs", { schema: "makeshop" })
export class InnerLogs {
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
