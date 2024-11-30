import { Column, Entity } from "typeorm";

@Entity("attendance_event_config", { schema: "makeshop" })
export class AttendanceEventConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "attendance_month", length: 6 })
  attendanceMonth: string;

  @Column("varchar", { name: "custom_type1", length: 50 })
  customType1: string;

  @Column("int", { name: "attendance_reserve1", default: () => "'0'" })
  attendanceReserve1: number;

  @Column("varchar", { name: "custom_type2", length: 50 })
  customType2: string;

  @Column("int", { name: "attendance_reserve2", default: () => "'0'" })
  attendanceReserve2: number;

  @Column("varchar", { name: "custom_type3", length: 50 })
  customType3: string;

  @Column("int", { name: "attendance_reserve3", default: () => "'0'" })
  attendanceReserve3: number;

  @Column("varchar", { name: "succes_give_type", length: 12 })
  succesGiveType: string;

  @Column("varchar", { name: "succes_custom_type", length: 50 })
  succesCustomType: string;

  @Column("int", { name: "succes_reserve", default: () => "'0'" })
  succesReserve: number;

  @Column("varchar", { name: "succes_coupon", length: 20 })
  succesCoupon: string;

  @Column("varchar", { name: "sub_id", length: 12 })
  subId: string;

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
