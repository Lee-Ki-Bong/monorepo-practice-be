import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index(
  "approval_type",
  ["adminuser", "approvalType", "regDate", "status", "optionCode"],
  {}
)
@Index("idx_auto_app_id", ["appId"], {})
@Index(
  "recent",
  ["adminuser", "approvalType", "appId", "regSubId", "regDate"],
  {}
)
@Index("status", ["adminuser", "appId", "status"], {})
@Entity("approval_info", { schema: "makeshop" })
export class ApprovalInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "app_id", unsigned: true })
  appId: number;

  @Column("varchar", { name: "approval_type", length: 30 })
  approvalType: string;

  @Column("varchar", { name: "option_code", nullable: true, length: 20 })
  optionCode: string | null;

  @Column("varchar", { name: "reg_sub_id", length: 20 })
  regSubId: string;

  @Column("enum", {
    name: "status",
    nullable: true,
    enum: ["", "NONE", "ING", "BACK", "OK", "CANCEL"],
    default: () => "'NONE'",
  })
  status: "" | "NONE" | "ING" | "BACK" | "OK" | "CANCEL" | null;

  @Column("tinyint", {
    name: "app_count",
    nullable: true,
    default: () => "'0'",
  })
  appCount: number | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "final_ok_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  finalOkDate: Date;

  @Column("varchar", { name: "cancel_id", length: 20 })
  cancelId: string;

  @Column("datetime", {
    name: "cancel_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  cancelDate: Date;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;

  @Column("varchar", { name: "addcode", nullable: true, length: 255 })
  addcode: string | null;

  @Column("longtext", { name: "description", nullable: true })
  description: string | null;

  @Column("varchar", { name: "set_table", length: 255 })
  setTable: string;

  @Column("mediumtext", { name: "set_data" })
  setData: string;

  @Column("mediumtext", { name: "etc_data", nullable: true })
  etcData: string | null;
}
