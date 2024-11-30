import { Column, Entity, Index } from "typeorm";

@Index("usercount", ["adminuser", "attendanceCount"], {})
@Entity("attendance_user", { schema: "makeshop" })
export class AttendanceUser {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("bigint", {
    name: "attendance_total_count",
    unsigned: true,
    default: () => "'1'",
  })
  attendanceTotalCount: string;

  @Column("bigint", {
    name: "attendance_count",
    unsigned: true,
    default: () => "'1'",
  })
  attendanceCount: string;

  @Column("mediumint", {
    name: "attendance_continuity_count",
    unsigned: true,
    default: () => "'1'",
  })
  attendanceContinuityCount: number;

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

  @Column("enum", {
    name: "attendance_success_status",
    enum: ["", "NONE", "SUCCESS"],
    default: () => "'NONE'",
  })
  attendanceSuccessStatus: "" | "NONE" | "SUCCESS";

  @Column("date", { name: "attendance_lastest_date", nullable: true })
  attendanceLastestDate: string | null;

  @Column("mediumtext", { name: "attendance_date", nullable: true })
  attendanceDate: string | null;

  @Column("mediumtext", { name: "attendance_new_date", nullable: true })
  attendanceNewDate: string | null;

  @Column("mediumtext", { name: "attendance_reserve_log", nullable: true })
  attendanceReserveLog: string | null;

  @Column("mediumtext", { name: "attendance_coupon_log", nullable: true })
  attendanceCouponLog: string | null;

  @Column("mediumtext", { name: "attendance_point_log", nullable: true })
  attendancePointLog: string | null;
}
