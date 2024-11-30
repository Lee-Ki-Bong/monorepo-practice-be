import { Column, Entity } from "typeorm";

@Entity("okuser", { schema: "makeshop" })
export class Okuser {
  @Column("varchar", { name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "id", length: 20 })
  id: string;

  @Column("varchar", { name: "password", length: 32 })
  password: string;

  @Column("enum", {
    name: "mem_type",
    enum: ["", "PERSON", "COMPANY"],
    default: () => "'PERSON'",
  })
  memType: "" | "PERSON" | "COMPANY";

  @Column("varchar", { name: "hname", length: 30 })
  hname: string;

  @Column("enum", {
    name: "language",
    enum: ["", "kor", "eng"],
    default: () => "'kor'",
  })
  language: "" | "kor" | "eng";

  @Column("char", { name: "country_emscode", length: 2 })
  countryEmscode: string;

  @Column("char", { name: "age", nullable: true, length: 3 })
  age: string | null;

  @Column("char", { name: "sex", nullable: true, length: 1 })
  sex: string | null;

  @Column("varchar", { name: "job", nullable: true, length: 20 })
  job: string | null;

  @Column("varchar", { name: "resno", nullable: true, length: 40 })
  resno: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 35 })
  email: string | null;

  @Column("char", {
    name: "emailreceive",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  emailreceive: string | null;

  @Column("varchar", { name: "hpost", nullable: true, length: 7 })
  hpost: string | null;

  @Column("varchar", { name: "haddress", nullable: true, length: 120 })
  haddress: string | null;

  @Column("varchar", { name: "hphone", nullable: true, length: 20 })
  hphone: string | null;

  @Column("varchar", { name: "opost", nullable: true, length: 7 })
  opost: string | null;

  @Column("varchar", { name: "oaddress", nullable: true, length: 120 })
  oaddress: string | null;

  @Column("varchar", { name: "ophone", nullable: true, length: 20 })
  ophone: string | null;

  @Column("varchar", { name: "officename", nullable: true, length: 255 })
  officename: string | null;

  @Column("varchar", { name: "officedept", nullable: true, length: 40 })
  officedept: string | null;

  @Column("varchar", { name: "etcphone", nullable: true, length: 20 })
  etcphone: string | null;

  @Column("char", { name: "receive", nullable: true, length: 1 })
  receive: string | null;

  @Column("int", { name: "reserve", nullable: true })
  reserve: number | null;

  @Column("varchar", { name: "etcaddress", nullable: true, length: 250 })
  etcaddress: string | null;

  @Column("varchar", { name: "date", nullable: true, length: 14 })
  date: string | null;

  @Column("char", {
    name: "confirm",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  confirm: string | null;

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

  @Column("varchar", { name: "login_id_key", nullable: true, length: 32 })
  loginIdKey: string | null;

  @Column("varchar", { name: "recommand_id", length: 12 })
  recommandId: string;

  @Column("varchar", { name: "group_id", nullable: true, length: 4 })
  groupId: string | null;

  @Column("mediumtext", { name: "etc", nullable: true })
  etc: string | null;

  @Column("char", { name: "grade", length: 1, default: () => "'3'" })
  grade: string;

  @Column("date", { name: "anniversary1", default: () => "'0000-00-00'" })
  anniversary1: string;

  @Column("date", { name: "anniversary2", default: () => "'0000-00-00'" })
  anniversary2: string;

  @Column("date", { name: "anniversary3", default: () => "'0000-00-00'" })
  anniversary3: string;

  @Column("varchar", { name: "user_nickname", nullable: true, length: 50 })
  userNickname: string | null;

  @Column("bigint", {
    name: "user_point",
    unsigned: true,
    default: () => "'0'",
  })
  userPoint: string;

  @Column("varchar", { name: "user_image", nullable: true, length: 100 })
  userImage: string | null;

  @Column("mediumtext", { name: "user_greeting", nullable: true })
  userGreeting: string | null;

  @Column("char", { name: "agree_selective", length: 2, default: () => "'--'" })
  agreeSelective: string;
}
