import { Column, Entity, Index } from "typeorm";

@Index("date", ["agreeDate"], {})
@Index("user", ["adminuser", "id"], {})
@Entity("auto_mail_sendlist", { schema: "makeshop" })
export class AutoMailSendlist {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "mail_type", length: 12 })
  mailType: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("varchar", { name: "hname", length: 30 })
  hname: string;

  @Column("varchar", { name: "email", length: 35 })
  email: string;

  @Column("char", { name: "emailreceive", length: 1, default: () => "'Y'" })
  emailreceive: string;

  @Column("datetime", {
    name: "mailagreedate",
    default: () => "'0000-00-00 00:00:00'",
  })
  mailagreedate: Date;

  @Column("datetime", {
    name: "smsagreedate",
    default: () => "'0000-00-00 00:00:00'",
  })
  smsagreedate: Date;

  @Column("datetime", {
    name: "agree_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  agreeDate: Date;
}
