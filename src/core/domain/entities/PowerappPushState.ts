import { Column, Entity, Index } from "typeorm";

@Index("log_date", ["adminuser", "logDate"], {})
@Index("user_id", ["adminuser", "userId"], {})
@Entity("powerapp_push_state", { schema: "makeshop" })
export class PowerappPushState {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "group_tempkey", length: 32 })
  groupTempkey: string;

  @Column("int", {
    primary: true,
    name: "group_idx",
    unsigned: true,
    default: () => "'1'",
  })
  groupIdx: number;

  @Column("datetime", {
    name: "log_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  logDate: Date;

  @Column("varchar", { name: "ip", nullable: true, length: 15 })
  ip: string | null;

  @Column("datetime", {
    name: "start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  startDate: Date;

  @Column("datetime", {
    name: "return_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  returnDate: Date;

  @Column("varchar", {
    name: "now_state",
    length: 20,
    default: () => "'STANDBY'",
  })
  nowState: string;

  @Column("varchar", { name: "phone", length: 20 })
  phone: string;

  @Column("varchar", { name: "uuid", length: 40 })
  uuid: string;

  @Column("varchar", { name: "user_id", length: 20 })
  userId: string;

  @Column("varchar", { name: "user_name", length: 30 })
  userName: string;

  @Column("enum", {
    name: "return_sms",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  returnSms: "" | "Y" | "N";
}
