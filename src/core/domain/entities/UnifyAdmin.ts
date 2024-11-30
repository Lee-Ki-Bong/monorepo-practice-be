import { Column, Entity } from "typeorm";

@Entity("unify_admin", { schema: "makeshop" })
export class UnifyAdmin {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("varchar", { name: "reg_ip", nullable: true, length: 15 })
  regIp: string | null;
}
