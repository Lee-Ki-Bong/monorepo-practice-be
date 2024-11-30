import { Column, Entity } from "typeorm";

@Entity("fc_calc", { schema: "makeshop" })
export class FcCalc {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "agen_id", length: 12 })
  agenId: string;

  @Column("varchar", { name: "agen_name", nullable: true, length: 50 })
  agenName: string | null;

  @Column("varchar", { name: "calc_mon", length: 6 })
  calcMon: string;

  @Column("char", { name: "calc_week", length: 1, default: () => "'1'" })
  calcWeek: string;

  @Column("int", { name: "total_cnt", default: () => "'0'" })
  totalCnt: number;

  @Column("int", { name: "total_sales", default: () => "'0'" })
  totalSales: number;

  @Column("int", { name: "real_sales", default: () => "'0'" })
  realSales: number;

  @Column("int", { name: "card_sales", default: () => "'0'" })
  cardSales: number;

  @Column("int", { name: "bank_sales", default: () => "'0'" })
  bankSales: number;

  @Column("int", { name: "mobile_sales", default: () => "'0'" })
  mobileSales: number;

  @Column("int", { name: "buy_sales", default: () => "'0'" })
  buySales: number;

  @Column("int", { name: "option_sales", default: () => "'0'" })
  optionSales: number;

  @Column("int", { name: "dc_sales", default: () => "'0'" })
  dcSales: number;

  @Column("int", { name: "dc2_sales", default: () => "'0'" })
  dc2Sales: number;

  @Column("int", { name: "reserve_sales", default: () => "'0'" })
  reserveSales: number;

  @Column("int", { name: "emoney_sales", default: () => "'0'" })
  emoneySales: number;

  @Column("int", { name: "deli_price", default: () => "'0'" })
  deliPrice: number;

  @Column("int", { name: "offi_sales", default: () => "'0'" })
  offiSales: number;

  @Column("int", { name: "offi_sales_pg", default: () => "'0'" })
  offiSalesPg: number;

  @Column("int", { name: "agen_sales", default: () => "'0'" })
  agenSales: number;

  @Column("datetime", {
    primary: true,
    name: "calc_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  calcDate: Date;

  @Column("enum", {
    name: "calc_status",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  calcStatus: "" | "Y" | "N";
}
