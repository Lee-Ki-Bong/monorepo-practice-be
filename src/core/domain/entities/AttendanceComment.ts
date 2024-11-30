import { Column, Entity, Index } from "typeorm";

@Index("admindate", ["adminuser", "registerDate"], {})
@Index("adminid", ["adminuser", "id"], {})
@Entity("attendance_comment", { schema: "makeshop" })
export class AttendanceComment {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("date", {
    primary: true,
    name: "attendance_date",
    default: () => "'0000-00-00'",
  })
  attendanceDate: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("datetime", {
    name: "register_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  registerDate: Date;

  @Column("varchar", { name: "content", length: 255 })
  content: string;
}
