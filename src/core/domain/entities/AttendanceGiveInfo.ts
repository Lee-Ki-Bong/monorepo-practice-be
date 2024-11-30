import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Entity("attendance_give_info", { schema: "makeshop" })
export class AttendanceGiveInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "attendance_month", length: 6 })
  attendanceMonth: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid" })
  uid: number;

  @Column("int", { name: "give_cnt", default: () => "'0'" })
  giveCnt: number;

  @Column("varchar", { name: "give_type", length: 12 })
  giveType: string;

  @Column("varchar", { name: "give_custom_type", length: 50 })
  giveCustomType: string;

  @Column("int", { name: "give_reserve", default: () => "'0'" })
  giveReserve: number;

  @Column("varchar", { name: "give_coupon", length: 20 })
  giveCoupon: string;

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
}
