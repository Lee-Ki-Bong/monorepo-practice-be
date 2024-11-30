import { Column, Entity, Index } from "typeorm";

@Index("sms_authnum", ["adminuser", "smsJoinAuthNum"], {})
@Index("sms_join_auth_num", ["adminuser", "userId", "smsJoinAuthNum"], {})
@Entity("sms_join_auth", { schema: "makeshop" })
export class SmsJoinAuth {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "user_id", length: 20 })
  userId: string;

  @Column("varchar", { primary: true, name: "sms_join_phone", length: 13 })
  smsJoinPhone: string;

  @Column("varchar", { name: "sms_join_auth_num", length: 6 })
  smsJoinAuthNum: string;

  @Column("datetime", {
    name: "sms_join_auth_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  smsJoinAuthDate: Date;

  @Column("int", { name: "sms_send_cnt", default: () => "'1'" })
  smsSendCnt: number;

  @Column("varchar", { name: "ip", length: 15 })
  ip: string;

  @Column("enum", {
    name: "sms_auth_result",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  smsAuthResult: "" | "Y" | "N";

  @Column("enum", {
    name: "join_result",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  joinResult: "" | "Y" | "N";
}
