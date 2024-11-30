import { Column, Entity } from "typeorm";

@Entity("delreserve", { schema: "makeshop" })
export class Delreserve {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "sub_id", length: 12 })
  subId: string;

  @Column("varchar", { name: "date", length: 14 })
  date: string;

  @Column("varchar", { primary: true, name: "id", length: 25 })
  id: string;

  @Column("int", {
    name: "reserve",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  reserve: number | null;

  @Column("int", {
    name: "userreserve",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  userreserve: number | null;

  @Column("datetime", {
    name: "regdate",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date | null;

  @Column("varchar", { name: "delmoney", length: 20 })
  delmoney: string;

  @Column("varchar", { name: "groupname", length: 10 })
  groupname: string;
}
