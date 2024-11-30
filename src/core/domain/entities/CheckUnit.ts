import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("_check_unit", { schema: "makeshop" })
export class CheckUnit {
  @PrimaryGeneratedColumn({ type: "smallint", name: "chk_id", unsigned: true })
  chkId: number;

  @Column("varchar", { name: "subject", length: 120 })
  subject: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", { name: "mod_date", nullable: true })
  modDate: Date | null;

  @Column("varchar", { name: "check_info", length: 255 })
  checkInfo: string;

  @Column("longtext", { name: "description" })
  description: string;

  @Column("varchar", { name: "reg_ip", length: 15 })
  regIp: string;

  @Column("enum", {
    name: "display",
    nullable: true,
    enum: ["", "NO", "YES"],
    default: () => "'YES'",
  })
  display: "" | "NO" | "YES" | null;

  @Column("set", {
    name: "check_auth",
    nullable: true,
    enum: ["DEVELOP", "PLAN", "QC"],
    default: () => ["DEVELOP", "PLAN", "QC"],
  })
  checkAuth: ("DEVELOP" | "PLAN" | "QC")[] | null;

  @Column("enum", {
    name: "check_important",
    nullable: true,
    enum: ["", "YES", "NO"],
    default: () => "'NO'",
  })
  checkImportant: "" | "YES" | "NO" | null;
}
