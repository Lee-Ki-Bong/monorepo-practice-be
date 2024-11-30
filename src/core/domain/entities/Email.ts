import { Column, Entity } from "typeorm";

@Entity("email", { schema: "makeshop" })
export class Email {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "email_id", length: 30 })
  emailId: string;

  @Column("varchar", { name: "email_passwd", length: 255 })
  emailPasswd: string;

  @Column("varchar", { name: "email_address", length: 60 })
  emailAddress: string;
}
