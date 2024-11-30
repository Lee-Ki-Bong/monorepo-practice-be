import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Index("stat_date", ["adminuser", "statDate"], {})
@Index("user_ms", ["adminuser", "userId", "msId"], {})
@Entity("custom_momq_settlement_premium_user_join", { schema: "makeshop" })
export class CustomMomqSettlementPremiumUserJoin {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("date", { name: "in_stat_date", default: () => "'0000-00-00'" })
  inStatDate: string;

  @Column("date", { name: "stat_date", default: () => "'0000-00-00'" })
  statDate: string;

  @Column("varchar", { name: "user_id", length: 20 })
  userId: string;

  @Column("int", { name: "ms_id", unsigned: true, default: () => "'0'" })
  msId: number;

  @Column("int", { name: "pre_id", unsigned: true, default: () => "'0'" })
  preId: number;

  @Column("varchar", { name: "ms_name", length: 255 })
  msName: string;

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

  @Column("int", { name: "join_price", unsigned: true, default: () => "'0'" })
  joinPrice: number;

  @Column("varchar", { name: "ms_term", length: 5 })
  msTerm: string;

  @Column("varchar", { name: "pre_cancel_state", length: 10 })
  preCancelState: string;

  @Column("date", { name: "pre_cancel_date", default: () => "'0000-00-00'" })
  preCancelDate: string;

  @Column("datetime", {
    name: "pre_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  preRegDate: Date;

  @Column("datetime", {
    name: "pre_update_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  preUpdateDate: Date;

  @Column("char", { name: "is_old", length: 1, default: () => "'Y'" })
  isOld: string;

  @Column("varchar", { name: "is_present_id", length: 20 })
  isPresentId: string;

  @Column("char", { name: "is_present", length: 1, default: () => "'N'" })
  isPresent: string;

  @Column("char", { name: "is_display", length: 1, default: () => "'Y'" })
  isDisplay: string;

  @Column("varchar", { name: "is_present_to_id", length: 20 })
  isPresentToId: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
