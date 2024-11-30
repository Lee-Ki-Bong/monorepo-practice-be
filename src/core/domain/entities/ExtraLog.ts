import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_log_uid", ["logUid"], {})
@Index("log_date", ["adminuser", "logType", "subType", "logDate"], {})
@Index(
  "separator1",
  ["adminuser", "logType", "subType", "separator1", "separator2"],
  {}
)
@Entity("extra_log", { schema: "makeshop" })
export class ExtraLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "log_type", length: 10 })
  logType: string;

  @Column("varchar", { primary: true, name: "sub_type", length: 10 })
  subType: string;

  @PrimaryGeneratedColumn({ type: "int", name: "log_uid", unsigned: true })
  logUid: number;

  @Column("varchar", { name: "separator1", length: 20 })
  separator1: string;

  @Column("varchar", { name: "separator2", length: 20 })
  separator2: string;

  @Column("mediumtext", { name: "content", nullable: true })
  content: string | null;

  @Column("varchar", { name: "ip", length: 15 })
  ip: string;

  @Column("varchar", { name: "sub_id", length: 12 })
  subId: string;

  @Column("datetime", {
    name: "log_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  logDate: Date;
}
