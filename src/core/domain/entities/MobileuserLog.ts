import { Column, Entity } from "typeorm";

@Entity("mobileuser_log", { schema: "makeshop" })
export class MobileuserLog {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("char", { primary: true, name: "id", length: 12 })
  id: string;

  @Column("date", {
    primary: true,
    name: "access_date",
    default: () => "'0000-00-00'",
  })
  accessDate: string;

  @Column("char", { primary: true, name: "mobileinfo", length: 20 })
  mobileinfo: string;
}
