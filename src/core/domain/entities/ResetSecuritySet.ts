import { Column, Entity } from "typeorm";

@Entity("reset_security_set", { schema: "makeshop" })
export class ResetSecuritySet {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "rss_service", length: 12 })
  rssService: string;

  @Column("varchar", { name: "rss_expire_time", length: 14 })
  rssExpireTime: string;

  @Column("varchar", { name: "rss_certi_key", length: 8 })
  rssCertiKey: string;
}
