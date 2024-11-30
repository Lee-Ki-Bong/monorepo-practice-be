import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_idx", ["idx"], {})
@Entity("power_review_logs", { schema: "makeshop" })
export class PowerReviewLogs {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "idx", unsigned: true })
  idx: number;

  @Column("varchar", { name: "name", length: 10 })
  name: string;

  @Column("mediumtext", { name: "content", nullable: true })
  content: string | null;

  @Column("varchar", { name: "ip", length: 15 })
  ip: string;

  @Column("varchar", { name: "log_type", length: 20 })
  logType: string;

  @Column("datetime", {
    name: "log_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  logDate: Date;
}
