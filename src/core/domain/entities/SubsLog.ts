import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_log_uid", ["logUid"], {})
@Index("index_date", ["adminuser", "subsId", "logDate"], {})
@Entity("subs_log", { schema: "makeshop" })
export class SubsLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "subs_id",
    unsigned: true,
    default: () => "'0'",
  })
  subsId: number;

  @Column("int", {
    primary: true,
    name: "subs_pid",
    unsigned: true,
    default: () => "'0'",
  })
  subsPid: number;

  @Column("int", { name: "uid", unsigned: true, default: () => "'0'" })
  uid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "log_uid", unsigned: true })
  logUid: number;

  @Column("varchar", { name: "log_type", length: 20 })
  logType: string;

  @Column("varchar", { name: "content", length: 255 })
  content: string;

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
