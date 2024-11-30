import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_log_uid", ["logUid"], {})
@Index("reg_date", ["regDate"], {})
@Entity("epson_logs", { schema: "makeshop" })
export class EpsonLogs {
  @Column("varchar", { primary: true, name: "log_type", length: 20 })
  logType: string;

  @Column("varchar", { primary: true, name: "log_key", length: 20 })
  logKey: string;

  @PrimaryGeneratedColumn({ type: "int", name: "log_uid", unsigned: true })
  logUid: number;

  @Column("mediumtext", { name: "content" })
  content: string;

  @Column("varchar", { name: "sub_id", length: 20 })
  subId: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
