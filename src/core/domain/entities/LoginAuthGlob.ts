import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index(
  "glob_login",
  [
    "adminuser",
    "lagGlobId",
    "lagMsSubid",
    "lagOs",
    "lagBrowser",
    "lagIp",
    "lagLoginFrom",
  ],
  { unique: true }
)
@Index("idx_auto_lag_uid", ["lagUid"], {})
@Entity("login_auth_glob", { schema: "makeshop" })
export class LoginAuthGlob {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "lag_uid", unsigned: true })
  lagUid: number;

  @Column("varchar", { name: "lag_glob_id", length: 12 })
  lagGlobId: string;

  @Column("varchar", { name: "lag_ms_subid", length: 12 })
  lagMsSubid: string;

  @Column("varchar", { name: "lag_os", length: 10, default: () => "'windows'" })
  lagOs: string;

  @Column("varchar", { name: "lag_browser", length: 20, default: () => "'IE'" })
  lagBrowser: string;

  @Column("varchar", { name: "lag_ip", length: 15, default: () => "'0'" })
  lagIp: string;

  @Column("varchar", { name: "lag_url", nullable: true, length: 100 })
  lagUrl: string | null;

  @Column("datetime", { name: "lag_date_update", nullable: true })
  lagDateUpdate: Date | null;

  @Column("datetime", {
    name: "lag_date_insert",
    default: () => "'0000-00-00 00:00:00'",
  })
  lagDateInsert: Date;

  @Column("datetime", { name: "lag_expire_date", nullable: true })
  lagExpireDate: Date | null;

  @Column("enum", {
    name: "lag_login",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  lagLogin: "" | "N" | "Y";

  @Column("enum", {
    name: "lag_login_from",
    enum: ["", "GLOB", "MS"],
    default: () => "'MS'",
  })
  lagLoginFrom: "" | "GLOB" | "MS";
}
