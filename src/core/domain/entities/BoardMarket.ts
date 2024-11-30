import { Column, Entity } from "typeorm";

@Entity("board_market", { schema: "makeshop" })
export class BoardMarket {
  @Column("varchar", { primary: true, name: "code", length: 24 })
  code: string;

  @Column("varchar", { primary: true, name: "num1", length: 7 })
  num1: string;

  @Column("varchar", { primary: true, name: "num2", length: 5 })
  num2: string;

  @Column("enum", {
    name: "bm_type",
    enum: ["", "SELL", "BUY"],
    default: () => "'SELL'",
  })
  bmType: "" | "SELL" | "BUY";

  @Column("varchar", { name: "bm_tel", length: 20 })
  bmTel: string;

  @Column("varchar", { name: "bm_area", length: 200 })
  bmArea: string;

  @Column("varchar", { name: "bm_state", length: 20 })
  bmState: string;

  @Column("int", { name: "bm_price", default: () => "'0'" })
  bmPrice: number;

  @Column("varchar", { name: "bm_deal", length: 100 })
  bmDeal: string;

  @Column("int", { name: "bm_deli_price", default: () => "'0'" })
  bmDeliPrice: number;

  @Column("date", { name: "bm_buydate", default: () => "'0000-00-00'" })
  bmBuydate: string;
}
