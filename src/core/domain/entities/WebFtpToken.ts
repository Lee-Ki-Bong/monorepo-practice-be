import { Column, Entity } from "typeorm";

@Entity("web_ftp_token", { schema: "makeshop" })
export class WebFtpToken {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "sub_id", length: 12 })
  subId: string;

  @Column("varchar", { name: "token", nullable: true, length: 32 })
  token: string | null;

  @Column("enum", {
    name: "token_status",
    enum: ["", "ISSUE", "DISUSE"],
    default: () => "'ISSUE'",
  })
  tokenStatus: "" | "ISSUE" | "DISUSE";

  @Column("varchar", { name: "connect_ip", nullable: true, length: 15 })
  connectIp: string | null;

  @Column("datetime", {
    name: "token_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  tokenDate: Date;
}
