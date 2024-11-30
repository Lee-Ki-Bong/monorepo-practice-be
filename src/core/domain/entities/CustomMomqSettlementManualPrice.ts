import { Column, Entity } from "typeorm";

@Entity("custom_momq_settlement_manual_price", { schema: "makeshop" })
export class CustomMomqSettlementManualPrice {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    primary: true,
    name: "type",
    enum: ["", "D", "R"],
    default: () => "'R'",
  })
  type: "" | "D" | "R";

  @Column("date", {
    primary: true,
    name: "search_date",
    default: () => "'0000-00-00'",
  })
  searchDate: string;

  @Column("int", {
    primary: true,
    name: "item_cd",
    unsigned: true,
    default: () => "'0'",
  })
  itemCd: number;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", { name: "pay_price", default: () => "'0'" })
  payPrice: number;

  @Column("int", { name: "supply_price", default: () => "'0'" })
  supplyPrice: number;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
