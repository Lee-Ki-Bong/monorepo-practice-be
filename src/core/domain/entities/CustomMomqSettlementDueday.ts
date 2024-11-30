import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_id", ["id"], {})
@Index("stat_month", ["adminuser", "statMonth"], { unique: true })
@Index("stat_regdate", ["adminuser", "regdate"], {})
@Entity("custom_momq_settlement_dueday", { schema: "makeshop" })
export class CustomMomqSettlementDueday {
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

  @Column("datetime", {
    name: "upddate",
    default: () => "'0000-00-00 00:00:00'",
  })
  upddate: Date;
}
