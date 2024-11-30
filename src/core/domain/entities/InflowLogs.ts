import { Column, Entity, Index } from "typeorm";

@Index("inflow_uid", ["adminuser", "inflowUid"], {})
@Entity("inflow_logs", { schema: "makeshop" })
export class InflowLogs {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    primary: true,
    name: "inflow_type",
    enum: ["", "POWERAPP", "RM"],
    default: () => "'POWERAPP'",
  })
  inflowType: "" | "POWERAPP" | "RM";

  @Column("enum", {
    primary: true,
    name: "action_type",
    enum: ["", "ORDER", "JOIN"],
    default: () => "'ORDER'",
  })
  actionType: "" | "ORDER" | "JOIN";

  @Column("varchar", { primary: true, name: "inflow_uid", length: 26 })
  inflowUid: string;

  @Column("varchar", { name: "keyword_id", nullable: true, length: 50 })
  keywordId: string | null;

  @Column("varchar", { name: "add_info1", nullable: true, length: 20 })
  addInfo1: string | null;

  @Column("varchar", { name: "add_info2", nullable: true, length: 20 })
  addInfo2: string | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
