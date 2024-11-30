import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_log_uid", ["logUid"], {})
@Index("idx_date_status", ["newStatus", "logDate"], {})
@Index("log_date", ["adminuser", "logDate"], {})
@Entity("oo_log", { schema: "makeshop" })
export class OoLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @PrimaryGeneratedColumn({ type: "int", name: "log_uid", unsigned: true })
  logUid: number;

  @Column("varchar", { name: "log_type", length: 12 })
  logType: string;

  @Column("varchar", { name: "content", length: 255 })
  content: string;

  @Column("datetime", {
    name: "log_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  logDate: Date;

  @Column("char", { name: "old_status", length: 3 })
  oldStatus: string;

  @Column("char", { name: "new_status", length: 3 })
  newStatus: string;

  @Column("enum", {
    name: "pay_status",
    enum: ["", "Y", "N", "C"],
    default: () => "'N'",
  })
  payStatus: "" | "Y" | "N" | "C";

  @Column("varchar", { name: "ip", length: 15 })
  ip: string;

  @Column("varchar", { name: "sub_id", length: 12 })
  subId: string;

  @Column("varchar", { name: "act_table_name", length: 14 })
  actTableName: string;

  @Column("varchar", { name: "act_table_uid", length: 26 })
  actTableUid: string;
}
