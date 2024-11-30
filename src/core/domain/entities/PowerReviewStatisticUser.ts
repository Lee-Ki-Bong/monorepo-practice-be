import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_idx", ["idx"], {})
@Entity("power_review_statistic_user", { schema: "makeshop" })
export class PowerReviewStatisticUser {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "idx", unsigned: true })
  idx: number;

  @Column("varchar", { name: "user_id", length: 20 })
  userId: string;

  @Column("varchar", { name: "action_type", length: 20 })
  actionType: string;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;
}
