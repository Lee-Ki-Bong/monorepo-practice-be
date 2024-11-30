import { Column, Entity } from "typeorm";

@Entity("subadmin_permission", { schema: "makeshop" })
export class SubadminPermission {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "sub_id", length: 20 })
  subId: string;

  @Column("varchar", { primary: true, name: "per_key", length: 20 })
  perKey: string;

  @Column("varchar", { name: "per_value", length: 10 })
  perValue: string;

  @Column("varchar", { name: "reg_id", length: 12, default: () => "'SYSTEM'" })
  regId: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;
}
