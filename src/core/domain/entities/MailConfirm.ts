import { Column, Entity } from "typeorm";

@Entity("mail_confirm", { schema: "makeshop" })
export class MailConfirm {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "email", length: 255 })
  email: string;

  @Column("varchar", { name: "content", length: 255 })
  content: string;

  @Column("enum", {
    name: "confirm_status",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  confirmStatus: "" | "Y" | "N";

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
