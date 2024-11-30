import { Column, Entity, Index } from "typeorm";

@Index("admin_dormant", ["adminuser", "dormant"], {})
@Index("adminuserdate", ["adminuser", "date"], {})
@Index("date", ["date"], {})
@Index("group_id", ["adminuser", "groupId"], {})
@Index("hname", ["adminuser", "hname"], {})
@Index("hphone", ["adminuser", "hphone", "date"], {})
@Index("lifetime", ["adminuser", "dateLifetime"], {})
@Index("mo_date", ["adminuser", "modDate"], {})
@Index("recommand_id", ["adminuser", "recommandId"], {})
@Index("resno", ["adminuser", "resno"], {})
@Entity("user_hold", { schema: "makeshop" })
export class UserHold {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("varchar", { name: "password", nullable: true, length: 255 })
  password: string | null;

  @Column("enum", {
    name: "mem_type",
    enum: ["", "PERSON", "COMPANY"],
    default: () => "'PERSON'",
  })
  memType: "" | "PERSON" | "COMPANY";

  @Column("enum", {
    name: "mem_simple_type",
    enum: ["", "BASIC", "SIMPLE", "RM", "SNS"],
    default: () => "'BASIC'",
  })
  memSimpleType: "" | "BASIC" | "SIMPLE" | "RM" | "SNS";

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

  @Column("enum", {
    name: "pushreceive",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  pushreceive: "" | "Y" | "N";

  @Column("mediumtext", { name: "receive_info" })
  receiveInfo: string;

  @Column("varchar", { name: "hpost", nullable: true, length: 20 })
  hpost: string | null;

  @Column("varchar", { name: "haddress", nullable: true, length: 120 })
  haddress: string | null;

  @Column("varchar", { name: "hphone", nullable: true, length: 20 })
  hphone: string | null;

  @Column("varchar", { name: "opost", nullable: true, length: 20 })
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

  @Column("datetime", {
    name: "last_login_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  lastLoginDate: Date;

  @Column("varchar", { name: "date", nullable: true, length: 14 })
  date: string | null;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;

  @Column("varchar", { name: "mailagreedate", nullable: true, length: 14 })
  mailagreedate: string | null;

  @Column("varchar", { name: "smsagreedate", nullable: true, length: 14 })
  smsagreedate: string | null;

  @Column("datetime", { name: "pushagreedate", nullable: true })
  pushagreedate: Date | null;

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

  @Column("varchar", { name: "recommand_id", nullable: true, length: 20 })
  recommandId: string | null;

  @Column("varchar", { name: "app_recommend_id", nullable: true, length: 20 })
  appRecommendId: string | null;

  @Column("varchar", { name: "group_id", nullable: true, length: 4 })
  groupId: string | null;

  @Column("datetime", {
    name: "group_end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  groupEndDate: Date;

  @Column("mediumtext", { name: "etc", nullable: true })
  etc: string | null;

  @Column("char", { name: "grade", length: 1, default: () => "'3'" })
  grade: string;

  @Column("varchar", { name: "member_auth_key", length: 100 })
  memberAuthKey: string;

  @Column("enum", {
    name: "app_down_benefit",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  appDownBenefit: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "is_app_use",
    enum: ["", "N", "Y", "D"],
    default: () => "'N'",
  })
  isAppUse: "" | "N" | "Y" | "D";

  @Column("date", { name: "anniversary1", default: () => "'0000-00-00'" })
  anniversary1: string;

  @Column("date", { name: "anniversary2", default: () => "'0000-00-00'" })
  anniversary2: string;

  @Column("date", { name: "anniversary3", default: () => "'0000-00-00'" })
  anniversary3: string;

  @Column("varchar", { name: "user_nickname", nullable: true, length: 50 })
  userNickname: string | null;

  @Column("mediumint", { name: "user_point", default: () => "'0'" })
  userPoint: number;

  @Column("decimal", {
    name: "user_gift_point",
    precision: 10,
    scale: 1,
    default: () => "'0.0'",
  })
  userGiftPoint: string;

  @Column("varchar", { name: "user_image", nullable: true, length: 100 })
  userImage: string | null;

  @Column("mediumtext", { name: "user_greeting", nullable: true })
  userGreeting: string | null;

  @Column("char", { name: "agree_selective", length: 2, default: () => "'--'" })
  agreeSelective: string;

  @Column("datetime", {
    name: "date_passwd",
    default: () => "'0000-00-00 00:00:00'",
  })
  datePasswd: Date;

  @Column("datetime", {
    name: "date_passwd_skip",
    default: () => "'0000-00-00 00:00:00'",
  })
  datePasswdSkip: Date;

  @Column("enum", {
    name: "dormant",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  dormant: "" | "Y" | "N";

  @Column("date", { name: "extension_period", nullable: true })
  extensionPeriod: string | null;

  @Column("date", { name: "dormant_mail", nullable: true })
  dormantMail: string | null;

  @Column("varchar", { name: "before_pay_type", nullable: true, length: 50 })
  beforePayType: string | null;

  @Column("enum", {
    name: "user_age_chk",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  userAgeChk: "" | "Y" | "N";

  @Column("varchar", { name: "membership_card", nullable: true, length: 16 })
  membershipCard: string | null;

  @Column("varchar", { name: "custom_id", length: 20 })
  customId: string;

  @Column("enum", {
    name: "lifetime",
    enum: ["", "Y", "N", "NOPOP", "WITHDRAW"],
    default: () => "'N'",
  })
  lifetime: "" | "Y" | "N" | "NOPOP" | "WITHDRAW";

  @Column("datetime", {
    name: "date_lifetime",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateLifetime: Date;

  @Column("date", {
    name: "date_lifetime_rbenefit",
    default: () => "'0000-00-00'",
  })
  dateLifetimeRbenefit: string;

  @Column("datetime", {
    name: "adult_auth_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  adultAuthDate: Date;

  @Column("varchar", {
    name: "adult_auth_type",
    length: 10,
    default: () => "'NONE'",
  })
  adultAuthType: string;

  @Column("varchar", { name: "stampang_code", length: 12 })
  stampangCode: string;

  @Column("int", { name: "user_idx", nullable: true })
  userIdx: number | null;
}
