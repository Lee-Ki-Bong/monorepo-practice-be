import { Column, Entity, Index } from "typeorm";

@Index("date", ["adminuser", "subId", "date"], {})
@Entity("m_manager_logs", { schema: "makeshop" })
export class MManagerLogs {
  @Column("varchar", { name: "adminuser", length: 20 })
  adminuser: string;

  @Column("varchar", { name: "sub_id", length: 20 })
  subId: string;

  @Column("varchar", { name: "date", length: 16 })
  date: string;

  @Column("varchar", { name: "ip", nullable: true, length: 15 })
  ip: string | null;

  @Column("mediumtext", { name: "content", nullable: true })
  content: string | null;
}
