import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_log_uid", ["logUid"], {})
@Index("stat_date_time", ["adminuser", "statDate", "statTime"], {})
@Index("state_stat_date", ["adminuser", "logState", "statDate"], {})
@Index("type_date_time", ["adminuser", "logType", "statDate", "statTime"], {})
@Entity("custom_momq_settlement_cron_log", { schema: "makeshop" })
export class CustomMomqSettlementCronLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "log_uid", unsigned: true })
  logUid: number;

  @Column("enum", {
    name: "log_state",
    enum: ["", "wait", "doing", "done", "fail"],
    default: () => "'wait'",
  })
  logState: "" | "wait" | "doing" | "done" | "fail";

  @Column("varchar", { name: "log_type", length: 255 })
  logType: string;

  @Column("mediumtext", { name: "log_text", nullable: true })
  logText: string | null;

  @Column("int", { name: "log_decimal", unsigned: true, default: () => "'0'" })
  logDecimal: number;

  @Column("date", { name: "stat_date", default: () => "'0000-00-00'" })
  statDate: string;

  @Column("char", { name: "stat_time", nullable: true, length: 2 })
  statTime: string | null;

  @Column("datetime", {
    name: "update_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  updateDate: Date;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
