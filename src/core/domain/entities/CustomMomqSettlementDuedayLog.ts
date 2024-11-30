import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_id", ["id"], {})
@Index("stat_month", ["adminuser", "statMonth"], {})
@Index("stat_month_regdate", ["adminuser", "statMonth", "regdate"], {})
@Index("stat_month_sub_id", ["adminuser", "statMonth", "subId"], {})
@Entity("custom_momq_settlement_dueday_log", { schema: "makeshop" })
export class CustomMomqSettlementDuedayLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", {
    name: "stat_month",
    length: 10,
    default: () => "'0000-00'",
  })
  statMonth: string;

  @Column("char", { name: "stat_date", nullable: true, length: 2 })
  statDate: string | null;

  @Column("char", { name: "stat_time", nullable: true, length: 2 })
  statTime: string | null;

  @Column("varchar", { name: "sub_id", nullable: true, length: 20 })
  subId: string | null;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;
}
