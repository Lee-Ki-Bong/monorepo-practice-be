import { Column, Entity, Index } from "typeorm";

@Index("adminuser", ["adminuser", "logDate"], {})
@Index("log_date", ["adminuser", "logDate"], {})
@Entity("powerapp_push_logs", { schema: "makeshop" })
export class PowerappPushLogs {
  @Column("varchar", { name: "adminuser", length: 20 })
  adminuser: string;

  @Column("datetime", {
    name: "log_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  logDate: Date;

  @Column("varchar", { name: "ip", nullable: true, length: 15 })
  ip: string | null;

  @Column("int", { name: "push_count", unsigned: true, default: () => "'0'" })
  pushCount: number;

  @Column("enum", {
    name: "push_type",
    enum: ["", "SMS", "LMS"],
    default: () => "'SMS'",
  })
  pushType: "" | "SMS" | "LMS";

  @Column("mediumtext", { name: "message", nullable: true })
  message: string | null;

  @Column("mediumtext", { name: "return_result", nullable: true })
  returnResult: string | null;
}
