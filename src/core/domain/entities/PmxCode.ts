import { Column, Entity } from "typeorm";

@Entity("pmx_code", { schema: "makeshop" })
export class PmxCode {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("char", { primary: true, name: "code", length: 3 })
  code: string;

  @Column("char", { primary: true, name: "xcode", length: 3 })
  xcode: string;

  @Column("char", { primary: true, name: "scode", length: 3 })
  scode: string;

  @Column("char", { primary: true, name: "type", length: 1 })
  type: string;

  @Column("int", { name: "cat1", unsigned: true, default: () => "'0'" })
  cat1: number;

  @Column("int", {
    name: "cat2",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  cat2: number | null;

  @Column("int", {
    name: "cat3",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  cat3: number | null;

  @Column("int", {
    name: "cat4",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  cat4: number | null;

  @Column("datetime", {
    name: "date_regist",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateRegist: Date;
}
