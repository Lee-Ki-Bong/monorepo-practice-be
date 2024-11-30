import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_log_uid", ["logUid"], {})
@Entity("broadcast_inflow_log", { schema: "makeshop" })
export class BroadcastInflowLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "log_type", length: 100 })
  logType: string;

  @Column("varchar", { primary: true, name: "log_key", length: 255 })
  logKey: string;

  @Column("varchar", { primary: true, name: "user_id", length: 40 })
  userId: string;

  @PrimaryGeneratedColumn({ type: "int", name: "log_uid" })
  logUid: number;

  @Column("mediumtext", { name: "log_token", nullable: true })
  logToken: string | null;

  @Column("varchar", { name: "inflow_type", length: 30 })
  inflowType: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
