import { Column, Entity, Index } from "typeorm";

@Index("name", ["adminuser", "time"], {})
@Entity("logcheck", { schema: "makeshop" })
export class Logcheck {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("bigint", {
    primary: true,
    name: "time",
    unsigned: true,
    default: () => "'0'",
  })
  time: string;

  @Column("varchar", { primary: true, name: "ip", length: 15 })
  ip: string;

  @Column("varchar", { name: "id", nullable: true, length: 20 })
  id: string | null;

  @Column("enum", {
    name: "pay_path",
    nullable: true,
    enum: ["", "WEB", "MOBILE", "POWERAPP"],
    default: () => "'WEB'",
  })
  payPath: "" | "WEB" | "MOBILE" | "POWERAPP" | null;

  @Column("int", {
    name: "main",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  main: number | null;

  @Column("int", {
    name: "brand",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  brand: number | null;

  @Column("int", {
    name: "detail",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  detail: number | null;

  @Column("int", {
    name: "basket",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  basket: number | null;

  @Column("int", {
    name: "orderpage",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderpage: number | null;

  @Column("int", {
    name: "orderend",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderend: number | null;

  @Column("int", {
    name: "board",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  board: number | null;

  @Column("int", {
    name: "etc",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  etc: number | null;

  @Column("varchar", { name: "curpage", nullable: true, length: 10 })
  curpage: string | null;

  @Column("varchar", { name: "script_name", nullable: true, length: 200 })
  scriptName: string | null;

  @Column("varchar", { name: "keyword", nullable: true, length: 200 })
  keyword: string | null;

  @Column("varchar", { name: "logdate", nullable: true, length: 14 })
  logdate: string | null;
}
