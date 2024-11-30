import { Column, Entity } from "typeorm";

@Entity("linkcount", { schema: "makeshop" })
export class Linkcount {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 12 })
  id: string;

  @Column("varchar", { primary: true, name: "date", length: 6 })
  date: string;

  @Column("int", { name: "total", unsigned: true, default: () => "'0'" })
  total: number;

  @Column("int", { name: "d01", unsigned: true, default: () => "'0'" })
  d01: number;

  @Column("int", { name: "d02", unsigned: true, default: () => "'0'" })
  d02: number;

  @Column("int", { name: "d03", unsigned: true, default: () => "'0'" })
  d03: number;

  @Column("int", { name: "d04", unsigned: true, default: () => "'0'" })
  d04: number;

  @Column("int", { name: "d05", unsigned: true, default: () => "'0'" })
  d05: number;

  @Column("int", { name: "d06", unsigned: true, default: () => "'0'" })
  d06: number;

  @Column("int", { name: "d07", unsigned: true, default: () => "'0'" })
  d07: number;

  @Column("int", { name: "d08", unsigned: true, default: () => "'0'" })
  d08: number;

  @Column("int", { name: "d09", unsigned: true, default: () => "'0'" })
  d09: number;

  @Column("int", { name: "d10", unsigned: true, default: () => "'0'" })
  d10: number;

  @Column("int", { name: "d11", unsigned: true, default: () => "'0'" })
  d11: number;

  @Column("int", { name: "d12", unsigned: true, default: () => "'0'" })
  d12: number;

  @Column("int", { name: "d13", unsigned: true, default: () => "'0'" })
  d13: number;

  @Column("int", { name: "d14", unsigned: true, default: () => "'0'" })
  d14: number;

  @Column("int", { name: "d15", unsigned: true, default: () => "'0'" })
  d15: number;

  @Column("int", { name: "d16", unsigned: true, default: () => "'0'" })
  d16: number;

  @Column("int", { name: "d17", unsigned: true, default: () => "'0'" })
  d17: number;

  @Column("int", { name: "d18", unsigned: true, default: () => "'0'" })
  d18: number;

  @Column("int", { name: "d19", unsigned: true, default: () => "'0'" })
  d19: number;

  @Column("int", { name: "d20", unsigned: true, default: () => "'0'" })
  d20: number;

  @Column("int", { name: "d21", unsigned: true, default: () => "'0'" })
  d21: number;

  @Column("int", { name: "d22", unsigned: true, default: () => "'0'" })
  d22: number;

  @Column("int", { name: "d23", unsigned: true, default: () => "'0'" })
  d23: number;

  @Column("int", { name: "d24", unsigned: true, default: () => "'0'" })
  d24: number;

  @Column("int", { name: "d25", unsigned: true, default: () => "'0'" })
  d25: number;

  @Column("int", { name: "d26", unsigned: true, default: () => "'0'" })
  d26: number;

  @Column("int", { name: "d27", unsigned: true, default: () => "'0'" })
  d27: number;

  @Column("int", { name: "d28", unsigned: true, default: () => "'0'" })
  d28: number;

  @Column("int", { name: "d29", unsigned: true, default: () => "'0'" })
  d29: number;

  @Column("int", { name: "d30", unsigned: true, default: () => "'0'" })
  d30: number;

  @Column("int", { name: "d31", unsigned: true, default: () => "'0'" })
  d31: number;
}
