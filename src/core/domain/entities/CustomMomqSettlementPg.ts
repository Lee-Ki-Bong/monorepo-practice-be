import { Column, Entity } from "typeorm";

@Entity("custom_momq_settlement_pg", { schema: "makeshop" })
export class CustomMomqSettlementPg {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("date", {
    primary: true,
    name: "stat_date",
    default: () => "'0000-00-00'",
  })
  statDate: string;

  @Column("char", {
    primary: true,
    name: "stat_type",
    length: 2,
    default: () => "'M'",
  })
  statType: string;

  @Column("int", { name: "total_price", default: () => "'0'" })
  totalPrice: number;

  @Column("int", { name: "commission_price", default: () => "'0'" })
  commissionPrice: number;

  @Column("int", { name: "vat_price", default: () => "'0'" })
  vatPrice: number;

  @Column("date", { name: "real_stat_date", default: () => "'0000-00-00'" })
  realStatDate: string;

  @Column("datetime", { name: "reg_date", nullable: true })
  regDate: Date | null;
}
