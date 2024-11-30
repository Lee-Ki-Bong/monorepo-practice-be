import { Column, Entity } from "typeorm";

@Entity("easydesignmain", { schema: "makeshop" })
export class Easydesignmain {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("char", { name: "maintype", length: 1, default: () => "'A'" })
  maintype: string;

  @Column("mediumint", {
    name: "mainsize",
    unsigned: true,
    default: () => "'470'",
  })
  mainsize: number;

  @Column("mediumint", {
    name: "rightsize",
    unsigned: true,
    default: () => "'160'",
  })
  rightsize: number;

  @Column("varchar", {
    name: "mainopt",
    nullable: true,
    length: 255,
    default: () => "'0,1'",
  })
  mainopt: string | null;

  @Column("varchar", {
    name: "rightopt",
    nullable: true,
    length: 255,
    default: () => "'0,1,2,3,4'",
  })
  rightopt: string | null;

  @Column("mediumtext", { name: "mainfree", nullable: true })
  mainfree: string | null;

  @Column("varchar", { name: "board1", nullable: true, length: 50 })
  board1: string | null;

  @Column("varchar", { name: "board2", nullable: true, length: 50 })
  board2: string | null;
}
