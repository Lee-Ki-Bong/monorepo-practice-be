import { Column, Entity } from "typeorm";

@Entity("loginlock", { schema: "makeshop" })
export class Loginlock {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "hphone", length: 20 })
  hphone: string;

  @Column("char", {
    name: "logintype",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  logintype: string | null;

  @Column("enum", {
    name: "country",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  country: "" | "Y" | "N" | null;

  @Column("char", {
    name: "sendtype",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  sendtype: string | null;

  @Column("varchar", { name: "loginkey", nullable: true, length: 8 })
  loginkey: string | null;

  @Column("smallint", {
    name: "time1",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  time1: number | null;

  @Column("smallint", {
    name: "time2",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  time2: number | null;
}
