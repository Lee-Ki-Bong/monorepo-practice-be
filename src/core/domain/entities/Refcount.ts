import { Column, Entity } from "typeorm";

@Entity("refcount", { schema: "makeshop" })
export class Refcount {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "refkey", length: 100 })
  refkey: string;

  @Column("varchar", { primary: true, name: "date", length: 8 })
  date: string;

  @Column("varchar", { name: "cm_id", length: 20 })
  cmId: string;

  @Column("varchar", { name: "ref", length: 100 })
  ref: string;

  @Column("varchar", { name: "da_ref", length: 20 })
  daRef: string;

  @Column("varchar", { name: "src", length: 20 })
  src: string;

  @Column("varchar", { name: "referer", nullable: true, length: 255 })
  referer: string | null;

  @Column("int", { name: "mtotal", unsigned: true, default: () => "'0'" })
  mtotal: number;

  @Column("int", { name: "mt00", unsigned: true, default: () => "'0'" })
  mt00: number;

  @Column("int", { name: "mt01", unsigned: true, default: () => "'0'" })
  mt01: number;

  @Column("int", { name: "mt02", unsigned: true, default: () => "'0'" })
  mt02: number;

  @Column("int", { name: "mt03", unsigned: true, default: () => "'0'" })
  mt03: number;

  @Column("int", { name: "mt04", unsigned: true, default: () => "'0'" })
  mt04: number;

  @Column("int", { name: "mt05", unsigned: true, default: () => "'0'" })
  mt05: number;

  @Column("int", { name: "mt06", unsigned: true, default: () => "'0'" })
  mt06: number;

  @Column("int", { name: "mt07", unsigned: true, default: () => "'0'" })
  mt07: number;

  @Column("int", { name: "mt08", unsigned: true, default: () => "'0'" })
  mt08: number;

  @Column("int", { name: "mt09", unsigned: true, default: () => "'0'" })
  mt09: number;

  @Column("int", { name: "mt10", unsigned: true, default: () => "'0'" })
  mt10: number;

  @Column("int", { name: "mt11", unsigned: true, default: () => "'0'" })
  mt11: number;

  @Column("int", { name: "mt12", unsigned: true, default: () => "'0'" })
  mt12: number;

  @Column("int", { name: "mt13", unsigned: true, default: () => "'0'" })
  mt13: number;

  @Column("int", { name: "mt14", unsigned: true, default: () => "'0'" })
  mt14: number;

  @Column("int", { name: "mt15", unsigned: true, default: () => "'0'" })
  mt15: number;

  @Column("int", { name: "mt16", unsigned: true, default: () => "'0'" })
  mt16: number;

  @Column("int", { name: "mt17", unsigned: true, default: () => "'0'" })
  mt17: number;

  @Column("int", { name: "mt18", unsigned: true, default: () => "'0'" })
  mt18: number;

  @Column("int", { name: "mt19", unsigned: true, default: () => "'0'" })
  mt19: number;

  @Column("int", { name: "mt20", unsigned: true, default: () => "'0'" })
  mt20: number;

  @Column("int", { name: "mt21", unsigned: true, default: () => "'0'" })
  mt21: number;

  @Column("int", { name: "mt22", unsigned: true, default: () => "'0'" })
  mt22: number;

  @Column("int", { name: "mt23", unsigned: true, default: () => "'0'" })
  mt23: number;

  @Column("int", { name: "dtotal", unsigned: true, default: () => "'0'" })
  dtotal: number;

  @Column("int", { name: "dt00", unsigned: true, default: () => "'0'" })
  dt00: number;

  @Column("int", { name: "dt01", unsigned: true, default: () => "'0'" })
  dt01: number;

  @Column("int", { name: "dt02", unsigned: true, default: () => "'0'" })
  dt02: number;

  @Column("int", { name: "dt03", unsigned: true, default: () => "'0'" })
  dt03: number;

  @Column("int", { name: "dt04", unsigned: true, default: () => "'0'" })
  dt04: number;

  @Column("int", { name: "dt05", unsigned: true, default: () => "'0'" })
  dt05: number;

  @Column("int", { name: "dt06", unsigned: true, default: () => "'0'" })
  dt06: number;

  @Column("int", { name: "dt07", unsigned: true, default: () => "'0'" })
  dt07: number;

  @Column("int", { name: "dt08", unsigned: true, default: () => "'0'" })
  dt08: number;

  @Column("int", { name: "dt09", unsigned: true, default: () => "'0'" })
  dt09: number;

  @Column("int", { name: "dt10", unsigned: true, default: () => "'0'" })
  dt10: number;

  @Column("int", { name: "dt11", unsigned: true, default: () => "'0'" })
  dt11: number;

  @Column("int", { name: "dt12", unsigned: true, default: () => "'0'" })
  dt12: number;

  @Column("int", { name: "dt13", unsigned: true, default: () => "'0'" })
  dt13: number;

  @Column("int", { name: "dt14", unsigned: true, default: () => "'0'" })
  dt14: number;

  @Column("int", { name: "dt15", unsigned: true, default: () => "'0'" })
  dt15: number;

  @Column("int", { name: "dt16", unsigned: true, default: () => "'0'" })
  dt16: number;

  @Column("int", { name: "dt17", unsigned: true, default: () => "'0'" })
  dt17: number;

  @Column("int", { name: "dt18", unsigned: true, default: () => "'0'" })
  dt18: number;

  @Column("int", { name: "dt19", unsigned: true, default: () => "'0'" })
  dt19: number;

  @Column("int", { name: "dt20", unsigned: true, default: () => "'0'" })
  dt20: number;

  @Column("int", { name: "dt21", unsigned: true, default: () => "'0'" })
  dt21: number;

  @Column("int", { name: "dt22", unsigned: true, default: () => "'0'" })
  dt22: number;

  @Column("int", { name: "dt23", unsigned: true, default: () => "'0'" })
  dt23: number;

  @Column("int", { name: "btotal", unsigned: true, default: () => "'0'" })
  btotal: number;

  @Column("int", { name: "bt00", unsigned: true, default: () => "'0'" })
  bt00: number;

  @Column("int", { name: "bt01", unsigned: true, default: () => "'0'" })
  bt01: number;

  @Column("int", { name: "bt02", unsigned: true, default: () => "'0'" })
  bt02: number;

  @Column("int", { name: "bt03", unsigned: true, default: () => "'0'" })
  bt03: number;

  @Column("int", { name: "bt04", unsigned: true, default: () => "'0'" })
  bt04: number;

  @Column("int", { name: "bt05", unsigned: true, default: () => "'0'" })
  bt05: number;

  @Column("int", { name: "bt06", unsigned: true, default: () => "'0'" })
  bt06: number;

  @Column("int", { name: "bt07", unsigned: true, default: () => "'0'" })
  bt07: number;

  @Column("int", { name: "bt08", unsigned: true, default: () => "'0'" })
  bt08: number;

  @Column("int", { name: "bt09", unsigned: true, default: () => "'0'" })
  bt09: number;

  @Column("int", { name: "bt10", unsigned: true, default: () => "'0'" })
  bt10: number;

  @Column("int", { name: "bt11", unsigned: true, default: () => "'0'" })
  bt11: number;

  @Column("int", { name: "bt12", unsigned: true, default: () => "'0'" })
  bt12: number;

  @Column("int", { name: "bt13", unsigned: true, default: () => "'0'" })
  bt13: number;

  @Column("int", { name: "bt14", unsigned: true, default: () => "'0'" })
  bt14: number;

  @Column("int", { name: "bt15", unsigned: true, default: () => "'0'" })
  bt15: number;

  @Column("int", { name: "bt16", unsigned: true, default: () => "'0'" })
  bt16: number;

  @Column("int", { name: "bt17", unsigned: true, default: () => "'0'" })
  bt17: number;

  @Column("int", { name: "bt18", unsigned: true, default: () => "'0'" })
  bt18: number;

  @Column("int", { name: "bt19", unsigned: true, default: () => "'0'" })
  bt19: number;

  @Column("int", { name: "bt20", unsigned: true, default: () => "'0'" })
  bt20: number;

  @Column("int", { name: "bt21", unsigned: true, default: () => "'0'" })
  bt21: number;

  @Column("int", { name: "bt22", unsigned: true, default: () => "'0'" })
  bt22: number;

  @Column("int", { name: "bt23", unsigned: true, default: () => "'0'" })
  bt23: number;

  @Column("mediumtext", { name: "ordernums", nullable: true })
  ordernums: string | null;
}
