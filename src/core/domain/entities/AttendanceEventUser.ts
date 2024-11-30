import { Column, Entity, Index } from "typeorm";

@Index("user_id", ["adminuser", "userId"], {})
@Entity("attendance_event_user", { schema: "makeshop" })
export class AttendanceEventUser {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("varchar", { primary: true, name: "attendance_month", length: 6 })
  attendanceMonth: string;

  @Column("varchar", { name: "hname", length: 30 })
  hname: string;

  @Column("int", { name: "attendance_month_cnt", default: () => "'0'" })
  attendanceMonthCnt: number;

  @Column("int", { name: "month_reserve", default: () => "'0'" })
  monthReserve: number;

  @Column("int", { name: "month_coupon", default: () => "'0'" })
  monthCoupon: number;

  @Column("mediumtext", { name: "attendance_date", nullable: true })
  attendanceDate: string | null;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;
}
