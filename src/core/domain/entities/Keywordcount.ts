import { Column, Entity } from "typeorm";

@Entity("keywordcount", { schema: "makeshop" })
export class Keywordcount {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "refkey", length: 100 })
  refkey: string;

  @Column("varchar", { primary: true, name: "date", length: 6 })
  date: string;

  @Column("varchar", { name: "keyword", length: 100 })
  keyword: string;

  @Column("varchar", { name: "url", length: 100 })
  url: string;

  @Column("varchar", { name: "referer", nullable: true, length: 255 })
  referer: string | null;

  @Column("int", { name: "total", unsigned: true, default: () => "'0'" })
  total: number;

  @Column("int", { name: "mtotal", unsigned: true, default: () => "'0'" })
  mtotal: number;

  @Column("int", { name: "md01", unsigned: true, default: () => "'0'" })
  md01: number;

  @Column("int", { name: "md02", unsigned: true, default: () => "'0'" })
  md02: number;

  @Column("int", { name: "md03", unsigned: true, default: () => "'0'" })
  md03: number;

  @Column("int", { name: "md04", unsigned: true, default: () => "'0'" })
  md04: number;

  @Column("int", { name: "md05", unsigned: true, default: () => "'0'" })
  md05: number;

  @Column("int", { name: "md06", unsigned: true, default: () => "'0'" })
  md06: number;

  @Column("int", { name: "md07", unsigned: true, default: () => "'0'" })
  md07: number;

  @Column("int", { name: "md08", unsigned: true, default: () => "'0'" })
  md08: number;

  @Column("int", { name: "md09", unsigned: true, default: () => "'0'" })
  md09: number;

  @Column("int", { name: "md10", unsigned: true, default: () => "'0'" })
  md10: number;

  @Column("int", { name: "md11", unsigned: true, default: () => "'0'" })
  md11: number;

  @Column("int", { name: "md12", unsigned: true, default: () => "'0'" })
  md12: number;

  @Column("int", { name: "md13", unsigned: true, default: () => "'0'" })
  md13: number;

  @Column("int", { name: "md14", unsigned: true, default: () => "'0'" })
  md14: number;

  @Column("int", { name: "md15", unsigned: true, default: () => "'0'" })
  md15: number;

  @Column("int", { name: "md16", unsigned: true, default: () => "'0'" })
  md16: number;

  @Column("int", { name: "md17", unsigned: true, default: () => "'0'" })
  md17: number;

  @Column("int", { name: "md18", unsigned: true, default: () => "'0'" })
  md18: number;

  @Column("int", { name: "md19", unsigned: true, default: () => "'0'" })
  md19: number;

  @Column("int", { name: "md20", unsigned: true, default: () => "'0'" })
  md20: number;

  @Column("int", { name: "md21", unsigned: true, default: () => "'0'" })
  md21: number;

  @Column("int", { name: "md22", unsigned: true, default: () => "'0'" })
  md22: number;

  @Column("int", { name: "md23", unsigned: true, default: () => "'0'" })
  md23: number;

  @Column("int", { name: "md24", unsigned: true, default: () => "'0'" })
  md24: number;

  @Column("int", { name: "md25", unsigned: true, default: () => "'0'" })
  md25: number;

  @Column("int", { name: "md26", unsigned: true, default: () => "'0'" })
  md26: number;

  @Column("int", { name: "md27", unsigned: true, default: () => "'0'" })
  md27: number;

  @Column("int", { name: "md28", unsigned: true, default: () => "'0'" })
  md28: number;

  @Column("int", { name: "md29", unsigned: true, default: () => "'0'" })
  md29: number;

  @Column("int", { name: "md30", unsigned: true, default: () => "'0'" })
  md30: number;

  @Column("int", { name: "md31", unsigned: true, default: () => "'0'" })
  md31: number;

  @Column("int", { name: "dtotal", unsigned: true, default: () => "'0'" })
  dtotal: number;

  @Column("int", { name: "dd01", unsigned: true, default: () => "'0'" })
  dd01: number;

  @Column("int", { name: "dd02", unsigned: true, default: () => "'0'" })
  dd02: number;

  @Column("int", { name: "dd03", unsigned: true, default: () => "'0'" })
  dd03: number;

  @Column("int", { name: "dd04", unsigned: true, default: () => "'0'" })
  dd04: number;

  @Column("int", { name: "dd05", unsigned: true, default: () => "'0'" })
  dd05: number;

  @Column("int", { name: "dd06", unsigned: true, default: () => "'0'" })
  dd06: number;

  @Column("int", { name: "dd07", unsigned: true, default: () => "'0'" })
  dd07: number;

  @Column("int", { name: "dd08", unsigned: true, default: () => "'0'" })
  dd08: number;

  @Column("int", { name: "dd09", unsigned: true, default: () => "'0'" })
  dd09: number;

  @Column("int", { name: "dd10", unsigned: true, default: () => "'0'" })
  dd10: number;

  @Column("int", { name: "dd11", unsigned: true, default: () => "'0'" })
  dd11: number;

  @Column("int", { name: "dd12", unsigned: true, default: () => "'0'" })
  dd12: number;

  @Column("int", { name: "dd13", unsigned: true, default: () => "'0'" })
  dd13: number;

  @Column("int", { name: "dd14", unsigned: true, default: () => "'0'" })
  dd14: number;

  @Column("int", { name: "dd15", unsigned: true, default: () => "'0'" })
  dd15: number;

  @Column("int", { name: "dd16", unsigned: true, default: () => "'0'" })
  dd16: number;

  @Column("int", { name: "dd17", unsigned: true, default: () => "'0'" })
  dd17: number;

  @Column("int", { name: "dd18", unsigned: true, default: () => "'0'" })
  dd18: number;

  @Column("int", { name: "dd19", unsigned: true, default: () => "'0'" })
  dd19: number;

  @Column("int", { name: "dd20", unsigned: true, default: () => "'0'" })
  dd20: number;

  @Column("int", { name: "dd21", unsigned: true, default: () => "'0'" })
  dd21: number;

  @Column("int", { name: "dd22", unsigned: true, default: () => "'0'" })
  dd22: number;

  @Column("int", { name: "dd23", unsigned: true, default: () => "'0'" })
  dd23: number;

  @Column("int", { name: "dd24", unsigned: true, default: () => "'0'" })
  dd24: number;

  @Column("int", { name: "dd25", unsigned: true, default: () => "'0'" })
  dd25: number;

  @Column("int", { name: "dd26", unsigned: true, default: () => "'0'" })
  dd26: number;

  @Column("int", { name: "dd27", unsigned: true, default: () => "'0'" })
  dd27: number;

  @Column("int", { name: "dd28", unsigned: true, default: () => "'0'" })
  dd28: number;

  @Column("int", { name: "dd29", unsigned: true, default: () => "'0'" })
  dd29: number;

  @Column("int", { name: "dd30", unsigned: true, default: () => "'0'" })
  dd30: number;

  @Column("int", { name: "dd31", unsigned: true, default: () => "'0'" })
  dd31: number;

  @Column("int", { name: "btotal", unsigned: true, default: () => "'0'" })
  btotal: number;

  @Column("int", { name: "bd01", unsigned: true, default: () => "'0'" })
  bd01: number;

  @Column("int", { name: "bd02", unsigned: true, default: () => "'0'" })
  bd02: number;

  @Column("int", { name: "bd03", unsigned: true, default: () => "'0'" })
  bd03: number;

  @Column("int", { name: "bd04", unsigned: true, default: () => "'0'" })
  bd04: number;

  @Column("int", { name: "bd05", unsigned: true, default: () => "'0'" })
  bd05: number;

  @Column("int", { name: "bd06", unsigned: true, default: () => "'0'" })
  bd06: number;

  @Column("int", { name: "bd07", unsigned: true, default: () => "'0'" })
  bd07: number;

  @Column("int", { name: "bd08", unsigned: true, default: () => "'0'" })
  bd08: number;

  @Column("int", { name: "bd09", unsigned: true, default: () => "'0'" })
  bd09: number;

  @Column("int", { name: "bd10", unsigned: true, default: () => "'0'" })
  bd10: number;

  @Column("int", { name: "bd11", unsigned: true, default: () => "'0'" })
  bd11: number;

  @Column("int", { name: "bd12", unsigned: true, default: () => "'0'" })
  bd12: number;

  @Column("int", { name: "bd13", unsigned: true, default: () => "'0'" })
  bd13: number;

  @Column("int", { name: "bd14", unsigned: true, default: () => "'0'" })
  bd14: number;

  @Column("int", { name: "bd15", unsigned: true, default: () => "'0'" })
  bd15: number;

  @Column("int", { name: "bd16", unsigned: true, default: () => "'0'" })
  bd16: number;

  @Column("int", { name: "bd17", unsigned: true, default: () => "'0'" })
  bd17: number;

  @Column("int", { name: "bd18", unsigned: true, default: () => "'0'" })
  bd18: number;

  @Column("int", { name: "bd19", unsigned: true, default: () => "'0'" })
  bd19: number;

  @Column("int", { name: "bd20", unsigned: true, default: () => "'0'" })
  bd20: number;

  @Column("int", { name: "bd21", unsigned: true, default: () => "'0'" })
  bd21: number;

  @Column("int", { name: "bd22", unsigned: true, default: () => "'0'" })
  bd22: number;

  @Column("int", { name: "bd23", unsigned: true, default: () => "'0'" })
  bd23: number;

  @Column("int", { name: "bd24", unsigned: true, default: () => "'0'" })
  bd24: number;

  @Column("int", { name: "bd25", unsigned: true, default: () => "'0'" })
  bd25: number;

  @Column("int", { name: "bd26", unsigned: true, default: () => "'0'" })
  bd26: number;

  @Column("int", { name: "bd27", unsigned: true, default: () => "'0'" })
  bd27: number;

  @Column("int", { name: "bd28", unsigned: true, default: () => "'0'" })
  bd28: number;

  @Column("int", { name: "bd29", unsigned: true, default: () => "'0'" })
  bd29: number;

  @Column("int", { name: "bd30", unsigned: true, default: () => "'0'" })
  bd30: number;

  @Column("int", { name: "bd31", unsigned: true, default: () => "'0'" })
  bd31: number;

  @Column("mediumtext", { name: "ordernums", nullable: true })
  ordernums: string | null;
}
