import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("index_date_last", ["adminuser", "spDateLast"], {})
@Index("index_date_next", ["adminuser", "spDateNext"], {})
@Index("index_subs_pid", ["subsPid"], {})
@Index("index_uid", ["adminuser", "uid"], {})
@Entity("subs_product", { schema: "makeshop" })
export class SubsProduct {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "subs_id",
    unsigned: true,
    default: () => "'0'",
  })
  subsId: number;

  @PrimaryGeneratedColumn({ type: "int", name: "subs_pid", unsigned: true })
  subsPid: number;

  @Column("int", { name: "uid", unsigned: true, default: () => "'0'" })
  uid: number;

  @Column("enum", {
    name: "sp_type",
    enum: ["", "SUBS", "ONCE"],
    default: () => "'SUBS'",
  })
  spType: "" | "SUBS" | "ONCE";

  @Column("enum", {
    name: "sp_status",
    enum: ["", "LIVE", "CANCEL"],
    default: () => "'LIVE'",
  })
  spStatus: "" | "LIVE" | "CANCEL";

  @Column("int", { name: "sp_stock", unsigned: true, default: () => "'0'" })
  spStock: number;

  @Column("enum", {
    name: "sp_cycle_type",
    enum: ["", "WEEK", "MONTH", "FIX"],
    default: () => "'WEEK'",
  })
  spCycleType: "" | "WEEK" | "MONTH" | "FIX";

  @Column("smallint", {
    name: "sp_cycle",
    unsigned: true,
    default: () => "'0'",
  })
  spCycle: number;

  @Column("set", {
    name: "sp_week",
    enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  })
  spWeek: ("Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun")[];

  @Column("smallint", { name: "sp_day", unsigned: true, default: () => "'0'" })
  spDay: number;

  @Column("int", {
    name: "sp_discount_turn",
    unsigned: true,
    default: () => "'0'",
  })
  spDiscountTurn: number;

  @Column("int", { name: "sp_total_price", default: () => "'0'" })
  spTotalPrice: number;

  @Column("date", { name: "sp_date_start", default: () => "'0000-00-00'" })
  spDateStart: string;

  @Column("date", { name: "sp_date_next", default: () => "'0000-00-00'" })
  spDateNext: string;

  @Column("datetime", {
    name: "sp_date_last",
    default: () => "'0000-00-00 00:00:00'",
  })
  spDateLast: Date;

  @Column("date", { name: "sp_date_wait", default: () => "'0000-00-00'" })
  spDateWait: string;

  @Column("varchar", { name: "sp_etctype", length: 255 })
  spEtctype: string;

  @Column("datetime", {
    name: "sp_date_insert",
    default: () => "'0000-00-00 00:00:00'",
  })
  spDateInsert: Date;

  @Column("datetime", {
    name: "sp_date_cancel",
    default: () => "'0000-00-00 00:00:00'",
  })
  spDateCancel: Date;

  @Column("datetime", {
    name: "sp_date_update",
    default: () => "'0000-00-00 00:00:00'",
  })
  spDateUpdate: Date;
}
