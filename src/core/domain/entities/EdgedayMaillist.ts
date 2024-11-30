import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("email_ok", ["adminuser", "edmailMailStatus"], {})
@Index("idx_auto_edmail_id", ["edmailId"], {})
@Index("sms_ok", ["adminuser", "edmailSmsStatus"], {})
@Entity("edgeday_maillist", { schema: "makeshop" })
export class EdgedayMaillist {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "edmail_id", unsigned: true })
  edmailId: number;

  @Column("char", { name: "edmail_mail", length: 100, default: () => "'NO'" })
  edmailMail: string;

  @Column("char", { name: "edmail_hphone", length: 11, default: () => "'NO'" })
  edmailHphone: string;

  @Column("enum", {
    name: "edmail_mail_status",
    enum: ["", "YES", "NO"],
    default: () => "'YES'",
  })
  edmailMailStatus: "" | "YES" | "NO";

  @Column("enum", {
    name: "edmail_sms_status",
    enum: ["", "YES", "NO"],
    default: () => "'YES'",
  })
  edmailSmsStatus: "" | "YES" | "NO";

  @Column("datetime", {
    name: "edmail_register_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  edmailRegisterDate: Date;

  @Column("datetime", { name: "edmail_mail_refuse_date", nullable: true })
  edmailMailRefuseDate: Date | null;

  @Column("datetime", { name: "edmail_sms_refuse_date", nullable: true })
  edmailSmsRefuseDate: Date | null;
}
