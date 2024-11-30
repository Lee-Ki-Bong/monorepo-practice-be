import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_scp_idx", ["scpIdx"], {})
@Entity("smart_coupon_process", { schema: "makeshop" })
export class SmartCouponProcess {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "couponnum", length: 8 })
  couponnum: string;

  @PrimaryGeneratedColumn({ type: "int", name: "scp_idx", unsigned: true })
  scpIdx: number;

  @Column("varchar", {
    name: "scp_process_type",
    length: 12,
    default: () => "'MANUAL_ISSUE'",
  })
  scpProcessType: string;

  @Column("enum", {
    name: "scp_status",
    enum: ["", "QUEUE", "COMPLETE"],
    default: () => "'QUEUE'",
  })
  scpStatus: "" | "QUEUE" | "COMPLETE";

  @Column("int", {
    name: "scp_total_count",
    unsigned: true,
    default: () => "'0'",
  })
  scpTotalCount: number;

  @Column("datetime", {
    name: "scp_start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  scpStartDate: Date;

  @Column("datetime", {
    name: "scp_complete_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  scpCompleteDate: Date;
}
