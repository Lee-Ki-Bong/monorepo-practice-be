import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("admin_date", ["adminuser", "eventStartDate", "eventEndDate"], {})
@Index("admin_tmpkey", ["adminuser", "eventTmpKey"], {})
@Index("idx_auto_event_uid", ["eventUid"], {})
@Entity("event_list", { schema: "makeshop" })
export class EventList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "event_uid", unsigned: true })
  eventUid: number;

  @Column("varchar", { name: "event_tmp_key", length: 32 })
  eventTmpKey: string;

  @Column("varchar", { name: "event_name", length: 255 })
  eventName: string;

  @Column("set", {
    name: "event_apply_type",
    enum: ["PC", "M_WEB", "M_APP"],
    default: () => ["PC"],
  })
  eventApplyType: ("PC" | "M_WEB" | "M_APP")[];

  @Column("enum", {
    name: "event_icon_view",
    enum: ["", "ALL", "MEMBER"],
    default: () => "'MEMBER'",
  })
  eventIconView: "" | "ALL" | "MEMBER";

  @Column("int", { name: "event_view_percent", default: () => "'50'" })
  eventViewPercent: number;

  @Column("enum", {
    name: "event_restriction",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  eventRestriction: "" | "Y" | "N";

  @Column("enum", {
    name: "event_period_set",
    enum: ["", "D", "P"],
    default: () => "'D'",
  })
  eventPeriodSet: "" | "D" | "P";

  @Column("datetime", {
    name: "event_start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  eventStartDate: Date;

  @Column("datetime", {
    name: "event_end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  eventEndDate: Date;
}
