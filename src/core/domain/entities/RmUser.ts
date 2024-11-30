import { Column, Entity } from "typeorm";

@Entity("rm_user", { schema: "makeshop" })
export class RmUser {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("varchar", { name: "password", nullable: true, length: 128 })
  password: string | null;

  @Column("enum", {
    name: "mem_type",
    enum: ["", "PERSON", "COMPANY"],
    default: () => "'PERSON'",
  })
  memType: "" | "PERSON" | "COMPANY";

  @Column("enum", {
    name: "mem_simple_type",
    enum: ["", "BASIC", "SIMPLE", "RM"],
    default: () => "'BASIC'",
  })
  memSimpleType: "" | "BASIC" | "SIMPLE" | "RM";

  @Column("varchar", { name: "hname", length: 30 })
  hname: string;

  @Column("enum", {
    name: "language",
    enum: ["", "kor", "eng"],
    default: () => "'kor'",
  })
  language: "" | "kor" | "eng";

  @Column("varchar", { name: "email", nullable: true, length: 35 })
  email: string | null;

  @Column("char", {
    name: "emailreceive",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  emailreceive: string | null;

  @Column("char", {
    name: "smsreceive",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  smsreceive: string | null;

  @Column("enum", {
    name: "pushreceive",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  pushreceive: "" | "Y" | "N";

  @Column("varchar", { name: "hphone", nullable: true, length: 20 })
  hphone: string | null;

  @Column("varchar", { name: "etcphone", nullable: true, length: 20 })
  etcphone: string | null;

  @Column("varchar", { name: "date", nullable: true, length: 14 })
  date: string | null;

  @Column("int", { name: "orderprice", nullable: true, default: () => "'0'" })
  orderprice: number | null;

  @Column("mediumint", {
    name: "ordercnt",
    nullable: true,
    default: () => "'0'",
  })
  ordercnt: number | null;

  @Column("date", {
    name: "orderdate",
    nullable: true,
    default: () => "'0000-00-00'",
  })
  orderdate: string | null;

  @Column("varchar", { name: "ordernum", length: 50 })
  ordernum: string;

  @Column("datetime", { name: "regdate", nullable: true })
  regdate: Date | null;

  @Column("char", { name: "agree_selective", length: 2, default: () => "'--'" })
  agreeSelective: string;

  @Column("varchar", { name: "data_privacy_agree", nullable: true, length: 50 })
  dataPrivacyAgree: string | null;

  @Column("enum", {
    name: "join_path",
    enum: ["", "WEB", "MOBILE", "POWERAPP"],
    default: () => "'WEB'",
  })
  joinPath: "" | "WEB" | "MOBILE" | "POWERAPP";

  @Column("varchar", { name: "refurl", length: 60 })
  refurl: string;
}
