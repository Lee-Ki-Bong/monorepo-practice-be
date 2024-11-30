import { Column, Entity } from "typeorm";

@Entity("attendance", { schema: "makeshop" })
export class Attendance {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "attendance_pop_type",
    enum: ["", "DESIGN", "TEMPLATE"],
    default: () => "'DESIGN'",
  })
  attendancePopType: "" | "DESIGN" | "TEMPLATE";

  @Column("datetime", {
    name: "attendance_register_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  attendanceRegisterDate: Date;

  @Column("date", {
    name: "attendance_start_date",
    default: () => "'0000-00-00'",
  })
  attendanceStartDate: string;

  @Column("date", {
    name: "attendance_finish_date",
    default: () => "'9999-12-31'",
  })
  attendanceFinishDate: string;

  @Column("enum", {
    name: "attendance_gift_type",
    enum: ["", "NONE", "RESERVE", "COUPON", "POINT"],
    default: () => "'RESERVE'",
  })
  attendanceGiftType: "" | "NONE" | "RESERVE" | "COUPON" | "POINT";

  @Column("enum", {
    name: "attendance_type",
    enum: ["", "MAXCOUNT", "CONTINUITY"],
    default: () => "'MAXCOUNT'",
  })
  attendanceType: "" | "MAXCOUNT" | "CONTINUITY";

  @Column("enum", {
    name: "attendance_check_type",
    enum: ["", "BUTTON", "LOGIN", "COMMENT"],
    default: () => "'BUTTON'",
  })
  attendanceCheckType: "" | "BUTTON" | "LOGIN" | "COMMENT";

  @Column("enum", {
    name: "attendance_auto_reserve",
    enum: ["", "NO", "YES", "ONCE", "COU"],
    default: () => "'NO'",
  })
  attendanceAutoReserve: "" | "NO" | "YES" | "ONCE" | "COU";

  @Column("enum", {
    name: "attendance_top_type",
    enum: ["", "NONE", "IMG", "HTML"],
    default: () => "'NONE'",
  })
  attendanceTopType: "" | "NONE" | "IMG" | "HTML";

  @Column("enum", {
    name: "attendance_comment_type",
    enum: ["", "NONE", "IMG", "HTML"],
    default: () => "'NONE'",
  })
  attendanceCommentType: "" | "NONE" | "IMG" | "HTML";

  @Column("enum", {
    name: "attendance_new_type",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  attendanceNewType: "" | "Y" | "N";

  @Column("enum", {
    name: "attendance_login_alert",
    enum: ["", "YES", "NO"],
    default: () => "'YES'",
  })
  attendanceLoginAlert: "" | "YES" | "NO";

  @Column("mediumint", {
    name: "attendance_comment_count",
    unsigned: true,
    default: () => "'5'",
  })
  attendanceCommentCount: number;

  @Column("bigint", {
    name: "attendance_reserve",
    unsigned: true,
    default: () => "'0'",
  })
  attendanceReserve: string;

  @Column("bigint", {
    name: "attendance_point",
    unsigned: true,
    default: () => "'0'",
  })
  attendancePoint: string;

  @Column("mediumint", {
    name: "attendance_success_condition",
    unsigned: true,
    default: () => "'30'",
  })
  attendanceSuccessCondition: number;

  @Column("enum", {
    name: "attendance_success_alert_type",
    enum: ["NO", "ALERT", "CONFIRM", "URL"],
    default: () => "'NO'",
  })
  attendanceSuccessAlertType: "NO" | "ALERT" | "CONFIRM" | "URL";

  @Column("mediumtext", { name: "attendance_access_group", nullable: true })
  attendanceAccessGroup: string | null;

  @Column("char", {
    name: "attendance_calendar_type",
    length: 2,
    default: () => "'01'",
  })
  attendanceCalendarType: string;

  @Column("varchar", {
    name: "attendance_calendar_bg",
    nullable: true,
    length: 30,
  })
  attendanceCalendarBg: string | null;

  @Column("varchar", {
    name: "attendance_couponnum",
    nullable: true,
    length: 8,
  })
  attendanceCouponnum: string | null;

  @Column("enum", {
    name: "attendance_coupon_double",
    enum: ["", "NO", "YES"],
    default: () => "'NO'",
  })
  attendanceCouponDouble: "" | "NO" | "YES";

  @Column("varchar", { name: "attendance_img", nullable: true, length: 30 })
  attendanceImg: string | null;

  @Column("varchar", { name: "absence_img", nullable: true, length: 30 })
  absenceImg: string | null;

  @Column("varchar", { name: "complete_img", nullable: true, length: 30 })
  completeImg: string | null;

  @Column("varchar", { name: "success_img", nullable: true, length: 30 })
  successImg: string | null;

  @Column("varchar", { name: "attendance_alert", nullable: true, length: 200 })
  attendanceAlert: string | null;

  @Column("varchar", {
    name: "attendance_success_alert",
    nullable: true,
    length: 200,
  })
  attendanceSuccessAlert: string | null;

  @Column("mediumtext", { name: "attendance_top_design", nullable: true })
  attendanceTopDesign: string | null;

  @Column("mediumtext", { name: "attendance_comment_design", nullable: true })
  attendanceCommentDesign: string | null;

  @Column("mediumtext", { name: "attendance_font_style", nullable: true })
  attendanceFontStyle: string | null;

  @Column("varchar", {
    name: "attendance_success_alert_url_pc",
    nullable: true,
    length: 255,
  })
  attendanceSuccessAlertUrlPc: string | null;

  @Column("varchar", {
    name: "attendance_success_alert_url_mo",
    nullable: true,
    length: 255,
  })
  attendanceSuccessAlertUrlMo: string | null;
}
