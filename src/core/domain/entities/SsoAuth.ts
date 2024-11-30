import { Column, Entity } from "typeorm";

@Entity("sso_auth", { schema: "makeshop" })
export class SsoAuth {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("mediumtext", { name: "cert_token" })
  certToken: string;

  @Column("mediumtext", { name: "access_token" })
  accessToken: string;

  @Column("varchar", { name: "token_type", length: 20 })
  tokenType: string;

  @Column("mediumtext", { name: "refresh_token" })
  refreshToken: string;

  @Column("datetime", {
    name: "expires_in",
    default: () => "'0000-00-00 00:00:00'",
  })
  expiresIn: Date;

  @Column("datetime", {
    name: "refresh_token_expires_in",
    default: () => "'0000-00-00 00:00:00'",
  })
  refreshTokenExpiresIn: Date;

  @Column("datetime", {
    name: "insert_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  insertDate: Date;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;
}
