import { Column, Entity } from "typeorm";

@Entity("auto_mail_config", { schema: "makeshop" })
export class AutoMailConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "mail_type", length: 12 })
  mailType: string;

  @Column("enum", {
    name: "send_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  sendUse: "" | "Y" | "N";

  @Column("char", { name: "send_period", length: 2 })
  sendPeriod: string;

  @Column("varchar", { name: "send_day", length: 8 })
  sendDay: string;

  @Column("varchar", { primary: true, name: "send_type", length: 10 })
  sendType: string;

  @Column("varchar", { name: "send_addr", length: 40 })
  sendAddr: string;

  @Column("varchar", { name: "send_name", length: 30 })
  sendName: string;

  @Column("varchar", { name: "send_subject", length: 255 })
  sendSubject: string;

  @Column("enum", {
    name: "send_subject_ad",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  sendSubjectAd: "" | "Y" | "N";

  @Column("mediumtext", { name: "send_content" })
  sendContent: string;

  @Column("enum", {
    name: "send_info_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  sendInfoUse: "" | "Y" | "N";

  @Column("mediumtext", { name: "send_info" })
  sendInfo: string;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;

  @Column("enum", {
    name: "first_send_type",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  firstSendType: "" | "Y" | "N";

  @Column("datetime", {
    name: "first_send_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  firstSendDate: Date;
}
