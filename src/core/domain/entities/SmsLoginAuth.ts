import { Column, Entity } from "typeorm";

@Entity("sms_login_auth", { schema: "makeshop" })
export class SmsLoginAuth {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "sub_id", length: 12 })
  subId: string;

  @Column("varchar", { name: "sms_login_phone", nullable: true, length: 13 })
  smsLoginPhone: string | null;

  @Column("varchar", { name: "sms_login_auth_num", nullable: true, length: 6 })
  smsLoginAuthNum: string | null;

  @Column("datetime", {
    name: "sms_login_auth_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  smsLoginAuthDate: Date;

  @Column("varchar", { name: "inside_ip", length: 15 })
  insideIp: string;

  @Column("enum", {
    name: "confirm_status",
    enum: ["", "NO", "STANDBY", "CONFIRM"],
    default: () => "'NO'",
  })
  confirmStatus: "" | "NO" | "STANDBY" | "CONFIRM";
}
