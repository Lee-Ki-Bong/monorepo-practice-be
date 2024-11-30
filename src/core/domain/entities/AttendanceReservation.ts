import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_attre_uid", ["attreUid"], {})
@Entity("attendance_reservation", { schema: "makeshop" })
export class AttendanceReservation {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "attre_uid", unsigned: true })
  attreUid: number;

  @Column("enum", {
    name: "attendance_pop_type",
    enum: ["", "DESIGN", "TEMPLATE"],
    default: () => "'DESIGN'",
  })
  attendancePopType: "" | "DESIGN" | "TEMPLATE";

  @Column("enum", {
    name: "attre_copy_status",
    enum: ["", "NONE", "SUCCESS", "FAILURE"],
    default: () => "'NONE'",
  })
  attreCopyStatus: "" | "NONE" | "SUCCESS" | "FAILURE";

  @Column("datetime", {
    name: "attre_copy_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  attreCopyDate: Date;

  @Column("datetime", {
    name: "attre_userdown_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  attreUserdownDate: Date;

  @Column("datetime", {
    name: "attre_commdown_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  attreCommdownDate: Date;

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
    name: "attendance_new_type",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  attendanceNewType: "" | "Y" | "N";

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

  @Column("varchar", { name: "attendance_alert", nullable: true, length: 200 })
  attendanceAlert: string | null;

  @Column("varchar", {
    name: "attendance_success_alert",
    nullable: true,
    length: 200,
  })
  attendanceSuccessAlert: string | null;

  @Column("enum", {
    name: "attendance_list",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  attendanceList: "" | "N" | "Y";

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
