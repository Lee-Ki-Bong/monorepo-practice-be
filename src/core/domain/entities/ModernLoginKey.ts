import { Column, Entity } from "typeorm";

@Entity("modern_login_key", { schema: "makeshop" })
export class ModernLoginKey {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "type", length: 5 })
  type: string;

  @Column("varchar", { primary: true, name: "accessToken", length: 32 })
  accessToken: string;

  @Column("varchar", { primary: true, name: "expire_date", length: 14 })
  expireDate: string;
}
