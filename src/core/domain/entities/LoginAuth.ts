import { Column, Entity, Index } from "typeorm";

@Index("la_date", ["laDate"], {})
@Index("la_ip", ["adminuser", "laIp"], {})
@Entity("login_auth", { schema: "makeshop" })
export class LoginAuth {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "subid", length: 20 })
  subid: string;

  @Column("enum", {
    name: "la_type",
    enum: ["", "AUTH", "LOGIN"],
    default: () => "'AUTH'",
  })
  laType: "" | "AUTH" | "LOGIN";

  @Column("varchar", { primary: true, name: "la_ip", length: 20 })
  laIp: string;

  @Column("datetime", { name: "la_date", nullable: true })
  laDate: Date | null;
}
