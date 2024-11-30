import { Column, Entity, Index } from "typeorm";

@Index("adminuser", ["adminuser", "subId", "logDate"], {})
@Entity("m_manager_push_logs", { schema: "makeshop" })
export class MManagerPushLogs {
  @Column("varchar", { name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "sub_id", length: 20 })
  subId: string;

  @Column("datetime", {
    name: "log_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  logDate: Date;

  @Column("datetime", {
    name: "start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  startDate: Date;

  @Column("varchar", { name: "title", nullable: true, length: 100 })
  title: string | null;

  @Column("varchar", { name: "message", nullable: true, length: 255 })
  message: string | null;
}
