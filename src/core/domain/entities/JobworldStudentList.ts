import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("g_id", ["groupId", "stdId"], { unique: true })
@Index("std_id", ["stdId"], {})
@Index("user_id", ["groupId", "stdId"], {})
@Entity("jobworld_student_list", { schema: "makeshop" })
export class JobworldStudentList {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "group_id", length: 30 })
  groupId: string;

  @Column("varchar", { name: "std_id", length: 20 })
  stdId: string;

  @Column("varchar", { name: "std_pwd", length: 255 })
  stdPwd: string;

  @Column("varchar", { name: "std_name", length: 255 })
  stdName: string;

  @Column("varchar", { name: "mall_url", length: 255 })
  mallUrl: string;

  @Column("varchar", { name: "mall_name", length: 255 })
  mallName: string;

  @Column("varchar", { name: "mall_email", length: 255 })
  mallEmail: string;

  @Column("datetime", {
    name: "start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  startDate: Date;

  @Column("datetime", {
    name: "end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  endDate: Date;
}
