import { Column, Entity } from "typeorm";

@Entity("selfcoordi_category", { schema: "makeshop" })
export class SelfcoordiCategory {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("char", { primary: true, name: "code", length: 3 })
  code: string;

  @Column("char", { primary: true, name: "xcode", length: 3 })
  xcode: string;

  @Column("char", { primary: true, name: "scode", length: 3 })
  scode: string;

  @Column("enum", {
    primary: true,
    name: "type",
    enum: ["", "X", "O", "S"],
    default: () => "'X'",
  })
  type: "" | "X" | "O" | "S";

  @Column("varchar", { name: "codename", nullable: true, length: 100 })
  codename: string | null;

  @Column("enum", {
    name: "m_display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  mDisplay: "" | "Y" | "N";

  @Column("enum", {
    name: "e_display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  eDisplay: "" | "Y" | "N";

  @Column("int", { name: "prioritize", default: () => "'1'" })
  prioritize: number;

  @Column("datetime", {
    name: "timekey",
    default: () => "'0000-00-00 00:00:00'",
  })
  timekey: Date;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;

  @Column("datetime", {
    name: "moddate",
    default: () => "'0000-00-00 00:00:00'",
  })
  moddate: Date;
}
