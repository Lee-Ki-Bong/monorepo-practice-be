import { Column, Entity, Index } from "typeorm";

@Index("ordernum", ["adminuser", "ordernum"], {})
@Index("partner_id", ["adminuser", "partnerId"], {})
@Index("settlement_month", ["adminuser", "settlementMonth"], {})
@Index("user_id", ["adminuser", "userId"], {})
@Entity("seil_settlement_order", { schema: "makeshop" })
export class SeilSettlementOrder {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "settlement_month",
    default: () => "'0'",
  })
  settlementMonth: number;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("varchar", { name: "user_id", nullable: true, length: 20 })
  userId: string | null;

  @Column("varchar", { name: "partner_id", nullable: true, length: 20 })
  partnerId: string | null;

  @Column("int", { name: "order_price", default: () => "'0'" })
  orderPrice: number;

  @Column("int", { name: "sell_price", default: () => "'0'" })
  sellPrice: number;

  @Column("int", { name: "b2b_price", default: () => "'0'" })
  b2bPrice: number;

  @Column("int", { name: "fee_price", default: () => "'0'" })
  feePrice: number;

  @Column("int", { name: "ext_price", default: () => "'0'" })
  extPrice: number;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("int", { name: "avg_order_price", default: () => "'0'" })
  avgOrderPrice: number;

  @Column("enum", {
    name: "confirm",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  confirm: "" | "Y" | "N";
}
