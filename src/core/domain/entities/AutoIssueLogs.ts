import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ip", ["uIp"], {})
@Index("u_date", ["uDate"], {})
@Entity("auto_issue_logs", { schema: "makeshop" })
export class AutoIssueLogs {
  @PrimaryGeneratedColumn({ type: "int", name: "log_id", unsigned: true })
  logId: number;

  @Column("varchar", { name: "u_ip", length: 15 })
  uIp: string;

  @Column("varchar", { name: "u_name", length: 30 })
  uName: string;

  @Column("datetime", {
    name: "u_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  uDate: Date;

  @Column("char", { name: "log_type", length: 2, default: () => "'TW'" })
  logType: string;

  @Column("enum", {
    name: "u_result",
    enum: ["", "FAIL", "SUCCESS"],
    default: () => "'FAIL'",
  })
  uResult: "" | "FAIL" | "SUCCESS";

  @Column("mediumtext", { name: "u_content", nullable: true })
  uContent: string | null;
}
