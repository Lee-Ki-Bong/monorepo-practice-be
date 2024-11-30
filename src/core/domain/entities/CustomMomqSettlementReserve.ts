import { Column, Entity } from "typeorm";

@Entity("custom_momq_settlement_reserve", { schema: "makeshop" })
export class CustomMomqSettlementReserve {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("date", {
    primary: true,
    name: "stat_date",
    default: () => "'0000-00-00'",
  })
  statDate: string;

  @Column("enum", {
    primary: true,
    name: "stat_type",
    enum: ["", "USE", "END", "PAY"],
    default: () => "'PAY'",
  })
  statType: "" | "USE" | "END" | "PAY";

  @Column("int", {
    primary: true,
    name: "prod_uid",
    unsigned: true,
    default: () => "'0'",
  })
  prodUid: number;

  @Column("int", { name: "item_cd", unsigned: true, default: () => "'0'" })
  itemCd: number;

  @Column("varchar", { name: "item_name", length: 255 })
  itemName: string;

  @Column("int", { name: "prod_price", default: () => "'0'" })
  prodPrice: number;

  @Column("int", { name: "total_reserve", default: () => "'0'" })
  totalReserve: number;

  @Column("int", { name: "gift_reserve", default: () => "'0'" })
  giftReserve: number;

  @Column("int", { name: "cs_reserve", default: () => "'0'" })
  csReserve: number;

  @Column("int", { name: "etc_reserve", default: () => "'0'" })
  etcReserve: number;

  @Column("varchar", { name: "tax_yn", length: 10, default: () => "'Y'" })
  taxYn: string;

  @Column("datetime", { name: "reg_date", nullable: true })
  regDate: Date | null;

  @Column("int", { name: "sap_pc", unsigned: true, default: () => "'0'" })
  sapPc: number;
}
