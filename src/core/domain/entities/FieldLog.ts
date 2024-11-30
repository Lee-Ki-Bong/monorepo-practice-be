import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("log_date", ["fUid", "logDate"], {})
@Entity("_field_log", { schema: "makeshop" })
export class FieldLog {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("int", {
    primary: true,
    name: "f_uid",
    unsigned: true,
    default: () => "'0'",
  })
  fUid: number;

  @Column("mediumtext", { name: "log_content" })
  logContent: string;

  @Column("text", { name: "work_url" })
  workUrl: string;

  @Column("varchar", { name: "worker", length: 20 })
  worker: string;

  @Column("varchar", { name: "reg_ip", nullable: true, length: 15 })
  regIp: string | null;

  @Column("datetime", {
    name: "log_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  logDate: Date;

  @Column("enum", {
    name: "update_state",
    enum: ["", "INSERT", "MODIFY", "DELETE"],
    default: () => "'MODIFY'",
  })
  updateState: "" | "INSERT" | "MODIFY" | "DELETE";
}
