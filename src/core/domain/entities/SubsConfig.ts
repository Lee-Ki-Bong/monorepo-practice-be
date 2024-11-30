import { Column, Entity } from "typeorm";

@Entity("subs_config", { schema: "makeshop" })
export class SubsConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("smallint", {
    name: "subs_hour_pay",
    unsigned: true,
    default: () => "'10'",
  })
  subsHourPay: number;

  @Column("smallint", {
    name: "subs_interval_pay",
    unsigned: true,
    default: () => "'2'",
  })
  subsIntervalPay: number;

  @Column("smallint", {
    name: "subs_first_day",
    unsigned: true,
    default: () => "'2'",
  })
  subsFirstDay: number;

  @Column("set", {
    name: "subs_cycle_type",
    enum: ["WEEK", "MONTH", "FIX"],
    default: () => ["WEEK"],
  })
  subsCycleType: ("WEEK" | "MONTH" | "FIX")[];

  @Column("set", {
    name: "subs_cycle",
    enum: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  })
  subsCycle: (
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
  )[];

  @Column("set", {
    name: "subs_week",
    enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  })
  subsWeek: ("Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun")[];

  @Column("set", { name: "subs_month", enum: ["1", "2", "3", "4", "5", "6"] })
  subsMonth: ("1" | "2" | "3" | "4" | "5" | "6")[];

  @Column("set", {
    name: "subs_holiday",
    enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Holi"],
  })
  subsHoliday: (
    | "Mon"
    | "Tue"
    | "Wed"
    | "Thu"
    | "Fri"
    | "Sat"
    | "Sun"
    | "Holi"
  )[];

  @Column("enum", {
    name: "subs_holiday_set",
    enum: ["", "NEXT", "JUMP"],
    default: () => "'NEXT'",
  })
  subsHolidaySet: "" | "NEXT" | "JUMP";

  @Column("enum", {
    name: "subs_use_minus_stock",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  subsUseMinusStock: "" | "Y" | "N";

  @Column("enum", {
    name: "subs_use_discount_term",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  subsUseDiscountTerm: "" | "Y" | "N";

  @Column("enum", {
    name: "subs_use_discount_group",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  subsUseDiscountGroup: "" | "Y" | "N";

  @Column("enum", {
    name: "subs_use_coupon",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  subsUseCoupon: "" | "Y" | "N";

  @Column("set", {
    name: "subs_use_coupon_target",
    nullable: true,
    enum: ["PRD", "PRD_DUP", "ORDER", "ORDER_DUP", "DELIVERY"],
    default: () => ["PRD", "PRD_DUP", "ORDER", "ORDER_DUP", "DELIVERY"],
  })
  subsUseCouponTarget:
    | ("PRD" | "PRD_DUP" | "ORDER" | "ORDER_DUP" | "DELIVERY")[]
    | null;

  @Column("enum", {
    name: "subs_use_reserve",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  subsUseReserve: "" | "Y" | "N";

  @Column("enum", {
    name: "subs_use_emoney",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  subsUseEmoney: "" | "Y" | "N";

  @Column("enum", {
    name: "subs_use_once",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  subsUseOnce: "" | "Y" | "N";

  @Column("varchar", { name: "subs_icon", length: 255 })
  subsIcon: string;

  @Column("varchar", { name: "subs_icon_mobile", length: 100 })
  subsIconMobile: string;

  @Column("smallint", {
    name: "subs_hour_old",
    unsigned: true,
    default: () => "'0'",
  })
  subsHourOld: number;

  @Column("date", { name: "subs_hour_old_date", default: () => "'0000-00-00'" })
  subsHourOldDate: string;

  @Column("smallint", {
    name: "subs_interval_old",
    unsigned: true,
    default: () => "'0'",
  })
  subsIntervalOld: number;

  @Column("date", {
    name: "subs_interval_old_date",
    default: () => "'0000-00-00'",
  })
  subsIntervalOldDate: string;

  @Column("enum", {
    name: "subs_use_contract",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  subsUseContract: "" | "Y" | "N" | null;

  @Column("longtext", { name: "subs_contract", nullable: true })
  subsContract: string | null;

  @Column("enum", {
    name: "subs_auto_cancel",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  subsAutoCancel: "" | "Y" | "N";

  @Column("smallint", {
    name: "subs_auto_cancel_count",
    unsigned: true,
    default: () => "'1'",
  })
  subsAutoCancelCount: number;

  @Column("datetime", {
    name: "subs_auto_cancel_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  subsAutoCancelDate: Date;

  @Column("varchar", { name: "subs_etctype", length: 255 })
  subsEtctype: string;

  @Column("datetime", {
    name: "date_update",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateUpdate: Date;
}
