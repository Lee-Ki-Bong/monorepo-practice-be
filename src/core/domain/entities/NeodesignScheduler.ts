import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("dgnsche_id", ["deviceType", "dgnscheId"], {})
@Index(
  "dgnset_group",
  ["adminuser", "deviceType", "dgnsetId", "dgnscheDisplay", "dgnscheFinish"],
  {}
)
@Index("idx_auto_dgnsche_id", ["dgnscheId"], {})
@Entity("neodesign_scheduler", { schema: "makeshop" })
export class NeodesignScheduler {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    primary: true,
    name: "device_type",
    enum: ["", "PC", "MOBILE"],
    default: () => "'PC'",
  })
  deviceType: "" | "PC" | "MOBILE";

  @PrimaryGeneratedColumn({ type: "int", name: "dgnsche_id", unsigned: true })
  dgnscheId: number;

  @Column("int", { name: "dgnset_id", unsigned: true, default: () => "'0'" })
  dgnsetId: number;

  @Column("enum", {
    name: "dgnsche_display",
    enum: ["", "NO", "YES", "OUT"],
    default: () => "'NO'",
  })
  dgnscheDisplay: "" | "NO" | "YES" | "OUT";

  @Column("enum", {
    name: "dgnsche_finish",
    enum: ["", "NO", "YES"],
    default: () => "'NO'",
  })
  dgnscheFinish: "" | "NO" | "YES";

  @Column("enum", {
    name: "dgnsche_type",
    enum: ["", "PERIOD", "WEEK"],
    default: () => "'PERIOD'",
  })
  dgnscheType: "" | "PERIOD" | "WEEK";

  @Column("datetime", {
    name: "dgnsche_startdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  dgnscheStartdate: Date;

  @Column("datetime", {
    name: "dgnsche_enddate",
    default: () => "'0000-00-00 00:00:00'",
  })
  dgnscheEnddate: Date;

  @Column("enum", {
    name: "dgnsche_repeat_week",
    enum: ["", "0", "1", "2", "3", "4", "5", "6", "7"],
    default: () => "'0'",
  })
  dgnscheRepeatWeek: "" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7";

  @Column("char", {
    name: "dgnsche_repeat_stime",
    length: 2,
    default: () => "'00'",
  })
  dgnscheRepeatStime: string;

  @Column("char", {
    name: "dgnsche_repeat_etime",
    length: 2,
    default: () => "'--'",
  })
  dgnscheRepeatEtime: string;

  @Column("enum", {
    name: "dgnsche_limited",
    enum: ["", "NO", "YES"],
    default: () => "'NO'",
  })
  dgnscheLimited: "" | "NO" | "YES";

  @Column("datetime", {
    name: "dgnsche_lastdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  dgnscheLastdate: Date;

  @Column("char", { name: "dgnsche_title", length: 200 })
  dgnscheTitle: string;

  @Column("char", { name: "admin_id", length: 12 })
  adminId: string;

  @Column("enum", {
    name: "dgnsche_sms",
    enum: ["", "NO", "YES"],
    default: () => "'NO'",
  })
  dgnscheSms: "" | "NO" | "YES";

  @Column("enum", {
    name: "dgnsche_chg_base",
    enum: ["", "NO", "YES"],
    default: () => "'NO'",
  })
  dgnscheChgBase: "" | "NO" | "YES";

  @Column("enum", {
    name: "dgnsche_chg_version",
    enum: ["", "NO", "YES"],
    default: () => "'NO'",
  })
  dgnscheChgVersion: "" | "NO" | "YES";

  @Column("datetime", {
    name: "dgnsche_register_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  dgnscheRegisterDate: Date;
}
