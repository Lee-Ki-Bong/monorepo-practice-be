import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_pre_id", ["preId"], {})
@Index("ordernum", ["adminuser", "ordernum"], {})
@Index("use_user", ["adminuser", "msId", "preStartDate", "preEndDate"], {})
@Entity("premium_user", { schema: "makeshop" })
export class PremiumUser {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("int", {
    primary: true,
    name: "ms_id",
    unsigned: true,
    default: () => "'0'",
  })
  msId: number;

  @PrimaryGeneratedColumn({ type: "int", name: "pre_id", unsigned: true })
  preId: number;

  @Column("varchar", { name: "user_name", length: 30 })
  userName: string;

  @Column("datetime", {
    name: "pre_join_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  preJoinDate: Date;

  @Column("date", { name: "pre_start_date", default: () => "'0000-00-00'" })
  preStartDate: string;

  @Column("date", { name: "pre_end_date", default: () => "'0000-00-00'" })
  preEndDate: string;

  @Column("varchar", { name: "pre_now_state", length: 10 })
  preNowState: string;

  @Column("varchar", { name: "ordernum", length: 26 })
  ordernum: string;

  @Column("mediumint", {
    name: "month_benefit_cnt",
    unsigned: true,
    default: () => "'0'",
  })
  monthBenefitCnt: number;

  @Column("varchar", { name: "pre_cancel_state", length: 10 })
  preCancelState: string;

  @Column("date", { name: "pre_cancel_date", default: () => "'0000-00-00'" })
  preCancelDate: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "update_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  updateDate: Date;
}
