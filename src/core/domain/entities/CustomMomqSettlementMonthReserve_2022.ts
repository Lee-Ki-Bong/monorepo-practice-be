import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Index("stat_month", ["adminuser", "statMonth"], {})
@Index("stat_month_id", ["adminuser", "statMonth", "id"], {})
@Entity("custom_momq_settlement_month_reserve_2022", { schema: "makeshop" })
export class CustomMomqSettlementMonthReserve_2022 {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", {
    name: "stat_month",
    length: 10,
    default: () => "'0000-00'",
  })
  statMonth: string;

  @Column("varchar", { name: "id", nullable: true, length: 20 })
  id: string | null;

  @Column("enum", {
    name: "status",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  status: "" | "Y" | "N";

  @Column("int", { name: "reserve", default: () => "'0'" })
  reserve: number;

  @Column("int", { name: "hagis_reserve", default: () => "'0'" })
  hagisReserve: number;

  @Column("int", { name: "etc_reserve", default: () => "'0'" })
  etcReserve: number;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;
}
