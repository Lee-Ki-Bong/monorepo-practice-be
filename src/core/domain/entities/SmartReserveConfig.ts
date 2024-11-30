import { Column, Entity, Index } from "typeorm";

@Index("display_type", ["adminuser", "displayType"], {})
@Index("give_limit", ["adminuser", "giveLimit", "giveCount"], {})
@Index("give_status", ["adminuser", "giveStatus"], {})
@Index("give_target", ["adminuser", "giveTarget"], {})
@Index("reserve_type", ["adminuser", "reserveType"], {})
@Index("usable_enddate", ["adminuser", "usableType", "usableEnddate"], {})
@Entity("smart_reserve_config", { schema: "makeshop" })
export class SmartReserveConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "reservenum", length: 8 })
  reservenum: string;

  @Column("char", { name: "display_type", length: 1, default: () => "'N'" })
  displayType: string;

  @Column("varchar", { name: "reserve_type", length: 10 })
  reserveType: string;

  @Column("varchar", { name: "reserve_cate", length: 50 })
  reserveCate: string;

  @Column("varchar", { name: "reserve_name", length: 255 })
  reserveName: string;

  @Column("varchar", {
    name: "usable_type",
    length: 10,
    default: () => "'DAY'",
  })
  usableType: string;

  @Column("mediumint", {
    name: "usable_term",
    unsigned: true,
    default: () => "'0'",
  })
  usableTerm: number;

  @Column("datetime", {
    name: "usable_startdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  usableStartdate: Date;

  @Column("datetime", {
    name: "usable_enddate",
    default: () => "'9999-12-31 23:59:59'",
  })
  usableEnddate: Date;

  @Column("enum", {
    name: "reserve_unit",
    enum: ["", "WON", "PERCENT"],
    default: () => "'WON'",
  })
  reserveUnit: "" | "WON" | "PERCENT";

  @Column("decimal", {
    name: "reserve_price",
    unsigned: true,
    precision: 10,
    scale: 1,
    default: () => "'0.0'",
  })
  reservePrice: string;

  @Column("mediumint", {
    name: "trim_unit",
    unsigned: true,
    default: () => "'0'",
  })
  trimUnit: number;

  @Column("enum", {
    name: "trim_type",
    enum: ["", "ceil", "floor", "round"],
    default: () => "'ceil'",
  })
  trimType: "" | "ceil" | "floor" | "round";

  @Column("int", { name: "give_limit", unsigned: true, default: () => "'0'" })
  giveLimit: number;

  @Column("mediumint", {
    name: "user_limit",
    unsigned: true,
    default: () => "'0'",
  })
  userLimit: number;

  @Column("mediumint", {
    name: "day_limit",
    unsigned: true,
    default: () => "'0'",
  })
  dayLimit: number;

  @Column("int", { name: "give_count", unsigned: true, default: () => "'0'" })
  giveCount: number;

  @Column("char", { name: "give_status", length: 1, default: () => "'Y'" })
  giveStatus: string;

  @Column("varchar", { name: "give_cycle", length: 10 })
  giveCycle: string;

  @Column("smallint", {
    name: "give_day",
    unsigned: true,
    default: () => "'0'",
  })
  giveDay: number;

  @Column("set", {
    name: "give_week",
    enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  })
  giveWeek: ("Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun")[];

  @Column("smallint", {
    name: "give_hour",
    unsigned: true,
    default: () => "'0'",
  })
  giveHour: number;

  @Column("varchar", { name: "give_target", length: 10 })
  giveTarget: string;

  @Column("longtext", { name: "target_key", nullable: true })
  targetKey: string | null;

  @Column("enum", {
    name: "send_sms_give",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  sendSmsGive: "" | "Y" | "N";

  @Column("enum", {
    name: "send_sms_expire",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  sendSmsExpire: "" | "Y" | "N";

  @Column("enum", {
    name: "send_mail_expire",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  sendMailExpire: "" | "Y" | "N";

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;

  @Column("datetime", {
    name: "give_startdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  giveStartdate: Date;

  @Column("datetime", {
    name: "give_enddate",
    default: () => "'0000-00-00 00:00:00'",
  })
  giveEnddate: Date;

  @Column("longtext", { name: "addinfo", nullable: true })
  addinfo: string | null;
}
