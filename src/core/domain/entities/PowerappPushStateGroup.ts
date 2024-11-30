import { Column, Entity } from "typeorm";

@Entity("powerapp_push_state_group", { schema: "makeshop" })
export class PowerappPushStateGroup {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "group_tempkey", length: 32 })
  groupTempkey: string;

  @Column("smallint", {
    name: "process_count",
    unsigned: true,
    default: () => "'0'",
  })
  processCount: number;

  @Column("varchar", {
    name: "target_type",
    length: 10,
    default: () => "'SMS'",
  })
  targetType: string;

  @Column("enum", {
    name: "sms_type",
    enum: ["", "SMS", "LMS"],
    default: () => "'SMS'",
  })
  smsType: "" | "SMS" | "LMS";

  @Column("varchar", { name: "ctm_send_type", length: 10 })
  ctmSendType: string;

  @Column("enum", {
    name: "is_stats",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  isStats: "" | "Y" | "N";

  @Column("enum", {
    name: "is_lms",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  isLms: "" | "Y" | "N";

  @Column("mediumtext", { name: "message", nullable: true })
  message: string | null;

  @Column("varchar", { name: "etc_message", length: 255 })
  etcMessage: string;

  @Column("datetime", {
    name: "log_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  logDate: Date;
}
