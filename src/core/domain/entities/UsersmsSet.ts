import { Column, Entity } from "typeorm";

@Entity("usersms_set", { schema: "makeshop" })
export class UsersmsSet {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "smscode", length: 12 })
  smscode: string;

  @Column("varchar", { name: "user", length: 12 })
  user: string;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;

  @Column("datetime", {
    name: "delete_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  deleteDate: Date;

  @Column("smallint", { name: "sms_count", default: () => "'0'" })
  smsCount: number;

  @Column("varchar", { name: "creat_cycle", nullable: true, length: 8 })
  creatCycle: string | null;

  @Column("varchar", { name: "delete_cycle", nullable: true, length: 8 })
  deleteCycle: string | null;

  @Column("char", { name: "hand_delete", length: 1, default: () => "'N'" })
  handDelete: string;

  @Column("varchar", { name: "admin_message", nullable: true, length: 255 })
  adminMessage: string | null;
}
