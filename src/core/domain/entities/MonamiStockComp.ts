import { Column, Entity } from "typeorm";

@Entity("monami_stock_comp", { schema: "makeshop" })
export class MonamiStockComp {
  @Column("varchar", { primary: true, name: "sto_code", length: 50 })
  stoCode: string;

  @Column("int", {
    name: "sto_real_stock",
    unsigned: true,
    default: () => "'0'",
  })
  stoRealStock: number;
}
