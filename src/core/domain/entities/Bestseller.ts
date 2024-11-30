import { Column, Entity } from "typeorm";

@Entity("bestseller", { schema: "makeshop" })
export class Bestseller {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "type", length: 14 })
  type: string;

  @Column("varchar", {
    name: "leftmenu",
    nullable: true,
    length: 4,
    default: () => "'NO'",
  })
  leftmenu: string | null;

  @Column("varchar", { name: "title", nullable: true, length: 100 })
  title: string | null;

  @Column("varchar", { primary: true, name: "code", length: 12 })
  code: string;

  @Column("char", {
    name: "day",
    nullable: true,
    length: 2,
    default: () => "'0'",
  })
  day: string | null;

  @Column("int", {
    name: "cols",
    nullable: true,
    unsigned: true,
    default: () => "'4'",
  })
  cols: number | null;

  @Column("int", {
    name: "rows",
    nullable: true,
    unsigned: true,
    default: () => "'4'",
  })
  rows: number | null;

  @Column("varchar", { name: "date", nullable: true, length: 14 })
  date: string | null;
}
