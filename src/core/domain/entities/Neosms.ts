import { Column, Entity } from "typeorm";

@Entity("neosms", { schema: "makeshop" })
export class Neosms {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "sms_code", length: 30 })
  smsCode: string;

  @Column("char", {
    name: "sms_target_type",
    length: 3,
    default: () => "'MEM'",
  })
  smsTargetType: string;

  @Column("enum", {
    name: "sms_template_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  smsTemplateUse: "" | "Y" | "N";

  @Column("enum", {
    name: "sms_reject_ignore",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  smsRejectIgnore: "" | "Y" | "N";

  @Column("mediumtext", { name: "sms_template", nullable: true })
  smsTemplate: string | null;
}
