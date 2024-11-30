import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Entity("beecall_config", { schema: "makeshop" })
export class BeecallConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("enum", {
    name: "term_type",
    nullable: true,
    enum: ["", "PERIOD", "CYCLE"],
  })
  termType: "" | "PERIOD" | "CYCLE" | null;

  @Column("varchar", { name: "operation_time", nullable: true, length: 5 })
  operationTime: string | null;

  @Column("varchar", { name: "operation_date", nullable: true, length: 10 })
  operationDate: string | null;

  @Column("enum", {
    name: "cycle_type",
    nullable: true,
    enum: ["", "WEEKLY", "MONTHLY"],
  })
  cycleType: "" | "WEEKLY" | "MONTHLY" | null;

  @Column("varchar", { name: "cycle_range", nullable: true, length: 5 })
  cycleRange: string | null;

  @Column("varchar", {
    name: "cycle_operation_time",
    nullable: true,
    length: 5,
  })
  cycleOperationTime: string | null;

  @Column("enum", {
    name: "use_alarm",
    nullable: true,
    enum: ["", "on", "off"],
  })
  useAlarm: "" | "on" | "off" | null;

  @Column("char", { name: "beecall_img", nullable: true, length: 2 })
  beecallImg: string | null;

  @Column("varchar", { name: "beecall_user_img", nullable: true, length: 128 })
  beecallUserImg: string | null;

  @Column("varchar", { name: "content", nullable: true, length: 128 })
  content: string | null;

  @Column("varchar", { name: "link_url", nullable: true, length: 128 })
  linkUrl: string | null;

  @Column("char", { name: "status", nullable: true, length: 1 })
  status: string | null;

  @Column("varchar", { name: "bc_idx", length: 10 })
  bcIdx: string;

  @Column("datetime", { name: "reg_date", nullable: true })
  regDate: Date | null;
}
