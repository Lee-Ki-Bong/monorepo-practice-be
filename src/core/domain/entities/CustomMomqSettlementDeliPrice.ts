import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_id", ["id"], {})
@Index("type_order", ["adminuser", "type", "ordernum"], {})
@Index("type_stat_date", ["adminuser", "type", "statDate"], {})
@Index("type_stat_order", ["adminuser", "type", "statDate", "ordernum"], {})
@Entity("custom_momq_settlement_deli_price", { schema: "makeshop" })
export class CustomMomqSettlementDeliPrice {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("date", { name: "stat_date", default: () => "'0000-00-00'" })
  statDate: string;

  @Column("enum", {
    name: "type",
    enum: ["", "D", "R", "C"],
    default: () => "'D'",
  })
  type: "" | "D" | "R" | "C";

  @Column("varchar", { name: "ordernum", nullable: true, length: 26 })
  ordernum: string | null;

  @Column("int", { name: "deli_price", nullable: true, default: () => "'0'" })
  deliPrice: number | null;

  @Column("int", { name: "supply_price", nullable: true, default: () => "'0'" })
  supplyPrice: number | null;

  @Column("int", { name: "vat_price", nullable: true, default: () => "'0'" })
  vatPrice: number | null;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;
}
