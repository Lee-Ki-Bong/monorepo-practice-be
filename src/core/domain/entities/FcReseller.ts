import { Column, Entity } from "typeorm";

@Entity("fc_reseller", { schema: "makeshop" })
export class FcReseller {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "reseller", length: 12 })
  reseller: string;

  @Column("varchar", { name: "password", length: 12 })
  password: string;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;

  @Column("int", { name: "cnt", nullable: true, default: () => "'0'" })
  cnt: number | null;

  @Column("varchar", { name: "change_id", length: 12 })
  changeId: string;
}
