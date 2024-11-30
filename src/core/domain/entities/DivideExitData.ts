import { Column, Entity, Index } from "typeorm";

@Index("adminuser", ["adminuser", "checkType", "nowStatus"], {})
@Entity("divide_exit_data", { schema: "makeshop" })
export class DivideExitData {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("varchar", {
    name: "check_type",
    length: 20,
    default: () => "'EXIT'",
  })
  checkType: string;

  @Column("varchar", {
    name: "now_status",
    length: 20,
    default: () => "'WAIT'",
  })
  nowStatus: string;

  @Column("datetime", {
    name: "update_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  updateDate: Date;
}
