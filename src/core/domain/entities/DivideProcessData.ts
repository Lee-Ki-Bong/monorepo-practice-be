import { Column, Entity, Index } from "typeorm";

@Index("adminuser", ["adminuser", "checkType", "nowStatus"], {})
@Entity("divide_process_data", { schema: "makeshop" })
export class DivideProcessData {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("enum", {
    name: "check_type",
    enum: ["", "DORMANT", "DORMANT_CANCEL"],
    default: () => "'DORMANT'",
  })
  checkType: "" | "DORMANT" | "DORMANT_CANCEL";

  @Column("enum", {
    name: "now_status",
    enum: ["", "WAIT", "COMPLETE"],
    default: () => "'WAIT'",
  })
  nowStatus: "" | "WAIT" | "COMPLETE";

  @Column("datetime", {
    name: "update_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  updateDate: Date;
}
