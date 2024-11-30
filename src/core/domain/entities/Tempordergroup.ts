import { Column, Entity } from "typeorm";

@Entity("tempordergroup", { schema: "makeshop" })
export class Tempordergroup {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "sub_id", length: 12 })
  subId: string;

  @Column("varchar", { name: "startdate", length: 14 })
  startdate: string;

  @Column("varchar", { name: "enddate", length: 14 })
  enddate: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("int", {
    name: "deliNprice",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  deliNprice: number | null;

  @Column("bigint", {
    name: "deliNcnt",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  deliNcnt: string | null;

  @Column("int", {
    name: "deliYprice",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  deliYprice: number | null;

  @Column("bigint", {
    name: "deliYcnt",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  deliYcnt: string | null;
}
