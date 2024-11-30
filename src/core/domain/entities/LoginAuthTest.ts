import { Column, Entity, Index } from "typeorm";

@Index("la_date", ["laDate"], {})
@Index("la_ip", ["adminuser", "laIp"], {})
@Entity("login_auth_test", { schema: "makeshop" })
export class LoginAuthTest {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "subid", length: 20 })
  subid: string;

  @Column("varchar", { primary: true, name: "la_ip", length: 20 })
  laIp: string;

  @Column("datetime", { name: "la_date", nullable: true })
  laDate: Date | null;
}