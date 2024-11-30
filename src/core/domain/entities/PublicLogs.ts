import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_log_uid", ["logUid"], {})
@Index("log_expiration", ["adminuser", "logExpiration"], {})
@Index("log_regdate", ["adminuser", "logRegdate"], {})
@Entity("public_logs", { schema: "makeshop" })
export class PublicLogs {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "log_type", length: 10 })
  logType: string;

  @Column("varchar", { primary: true, name: "log_p_uid", length: 255 })
  logPUid: string;

  @Column("varchar", { primary: true, name: "log_sub_uid", length: 26 })
  logSubUid: string;

  @PrimaryGeneratedColumn({ type: "int", name: "log_uid", unsigned: true })
  logUid: number;

  @Column("varchar", {
    name: "log_user_id",
    nullable: true,
    length: 20,
    default: () => "'admin'",
  })
  logUserId: string | null;

  @Column("varchar", { name: "log_user_name", nullable: true, length: 20 })
  logUserName: string | null;

  @Column("datetime", {
    name: "log_regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  logRegdate: Date;

  @Column("varchar", { name: "log_ip", nullable: true, length: 15 })
  logIp: string | null;

  @Column("varchar", { name: "log_desc_content", nullable: true, length: 255 })
  logDescContent: string | null;

  @Column("mediumtext", { name: "log_content", nullable: true })
  logContent: string | null;

  @Column("date", { name: "log_expiration", default: () => "'0000-00-00'" })
  logExpiration: string;
}
