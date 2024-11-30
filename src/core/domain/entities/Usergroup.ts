import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser", ["adminuser", "code"], { unique: true })
@Index("idx_auto_group_uid", ["groupUid"], {})
@Entity("usergroup", { schema: "makeshop" })
export class Usergroup {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "group_uid", unsigned: true })
  groupUid: number;

  @Column("varchar", { primary: true, name: "code", length: 4 })
  code: string;

  @Column("varchar", { name: "name", length: 40 })
  name: string;

  @Column("varchar", { name: "short_name", length: 6 })
  shortName: string;

  @Column("char", {
    name: "oktype",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  oktype: string | null;

  @Column("int", { name: "grade", nullable: true, default: () => "'0'" })
  grade: number | null;

  @Column("int", { name: "dan", nullable: true, default: () => "'100'" })
  dan: number | null;

  @Column("char", {
    name: "mypage",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  mypage: string | null;

  @Column("char", {
    name: "setmoney",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  setmoney: string | null;

  @Column("char", {
    name: "freedeli",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  freedeli: string | null;

  @Column("varchar", { name: "deli_price", nullable: true, length: 255 })
  deliPrice: string | null;

  @Column("char", {
    name: "noreserve",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  noreserve: string | null;

  @Column("int", { name: "maxmoney", nullable: true, default: () => "'0'" })
  maxmoney: number | null;

  @Column("float", {
    name: "salemoney",
    nullable: true,
    precision: 12,
    default: () => "'0'",
  })
  salemoney: number | null;

  @Column("int", {
    name: "reservepercent",
    nullable: true,
    default: () => "'0'",
  })
  reservepercent: number | null;

  @Column("int", {
    name: "canuse",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  canuse: number | null;

  @Column("varchar", { name: "add2_startdate", nullable: true, length: 12 })
  add2Startdate: string | null;

  @Column("varchar", { name: "add2_enddate", nullable: true, length: 12 })
  add2Enddate: string | null;

  @Column("varchar", { name: "add_startdate", nullable: true, length: 12 })
  addStartdate: string | null;

  @Column("varchar", { name: "add_enddate", nullable: true, length: 12 })
  addEnddate: string | null;

  @Column("varchar", { name: "subject", nullable: true, length: 255 })
  subject: string | null;

  @Column("int", {
    name: "auto_standard",
    unsigned: true,
    default: () => "'0'",
  })
  autoStandard: number;

  @Column("enum", { name: "auto", enum: ["", "Y", "N"], default: () => "'N'" })
  auto: "" | "Y" | "N";

  @Column("enum", {
    name: "autoleave",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  autoleave: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "auto_group_down",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  autoGroupDown: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "period_type",
    enum: ["", "LATEST", "FIX", "ALL"],
    default: () => "'LATEST'",
  })
  periodType: "" | "LATEST" | "FIX" | "ALL";

  @Column("int", { name: "period_term", default: () => "'0'" })
  periodTerm: number;

  @Column("date", { name: "period_start", default: () => "'0000-00-00'" })
  periodStart: string;

  @Column("date", { name: "period_end", default: () => "'0000-00-00'" })
  periodEnd: string;

  @Column("int", { name: "order_price", default: () => "'0'" })
  orderPrice: number;

  @Column("mediumint", { name: "order_count", default: () => "'0'" })
  orderCount: number;

  @Column("int", { name: "auto_reserve", unsigned: true, default: () => "'0'" })
  autoReserve: number;

  @Column("varchar", { name: "auto_coupon", nullable: true, length: 255 })
  autoCoupon: string | null;

  @Column("int", { name: "auto_point", unsigned: true, default: () => "'0'" })
  autoPoint: number;

  @Column("int", { name: "user_reserve", default: () => "'0'" })
  userReserve: number;

  @Column("enum", {
    name: "wholesale",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  wholesale: "" | "Y" | "N";

  @Column("mediumtext", { name: "birth_message", nullable: true })
  birthMessage: string | null;

  @Column("enum", {
    name: "member_birth",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  memberBirth: "" | "Y" | "N" | null;

  @Column("varchar", { name: "birth_coupon", nullable: true, length: 8 })
  birthCoupon: string | null;

  @Column("int", {
    name: "birth_reserve",
    nullable: true,
    default: () => "'0'",
  })
  birthReserve: number | null;

  @Column("char", { name: "attendance_noreserve", nullable: true, length: 1 })
  attendanceNoreserve: string | null;

  @Column("char", {
    name: "attendance_reserve_type",
    nullable: true,
    length: 1,
  })
  attendanceReserveType: string | null;

  @Column("char", { name: "gift", length: 1, default: () => "'Y'" })
  gift: string;

  @Column("enum", {
    name: "coupon",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  coupon: "" | "Y" | "N" | null;

  @Column("char", { name: "add_code", nullable: true, length: 2 })
  addCode: string | null;

  @Column("int", { name: "add_dan", default: () => "'0'" })
  addDan: number;

  @Column("int", { name: "add_maxmoney", default: () => "'0'" })
  addMaxmoney: number;

  @Column("float", {
    name: "add_salemoney",
    precision: 12,
    default: () => "'0'",
  })
  addSalemoney: number;

  @Column("varchar", { name: "login_mess", nullable: true, length: 255 })
  loginMess: string | null;

  @Column("varchar", {
    name: "login_redirect_url",
    nullable: true,
    length: 255,
  })
  loginRedirectUrl: string | null;

  @Column("varchar", {
    name: "login_redirect_m_url",
    nullable: true,
    length: 255,
  })
  loginRedirectMUrl: string | null;

  @Column("enum", {
    name: "sendsms",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  sendsms: "" | "Y" | "N" | null;

  @Column("mediumtext", { name: "sms_message", nullable: true })
  smsMessage: string | null;

  @Column("enum", {
    name: "ordersendsms",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  ordersendsms: "" | "Y" | "N" | null;

  @Column("varchar", { name: "group_color", length: 6 })
  groupColor: string;

  @Column("varchar", { name: "user_serial", nullable: true, length: 255 })
  userSerial: string | null;
}
