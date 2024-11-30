import { Column, Entity } from "typeorm";

@Entity("fc_auth_log", { schema: "makeshop" })
export class FcAuthLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "agency", length: 12 })
  agency: string;

  @Column("varchar", { name: "authtype", length: 35 })
  authtype: string;

  @Column("mediumtext", { name: "etctype", nullable: true })
  etctype: string | null;

  @Column("varchar", { name: "set_prdevent", length: 50 })
  setPrdevent: string;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;

  @Column("varchar", { name: "change_id", length: 12 })
  changeId: string;
}
