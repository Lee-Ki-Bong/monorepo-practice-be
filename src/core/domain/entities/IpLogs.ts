import { Column, Entity, Index } from "typeorm";

@Index("delete_date", ["deleteDate"], {})
@Entity("ip_logs", { schema: "makeshop" })
export class IpLogs {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ipkey", length: 26 })
  ipkey: string;

  @Column("varchar", { name: "ip", length: 20 })
  ip: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("date", { name: "delete_date", default: () => "'0000-00-00'" })
  deleteDate: string;
}
