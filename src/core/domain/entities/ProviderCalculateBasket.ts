import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser", ["adminuser", "pcId", "ordernum", "basketNum"], {
  unique: true,
})
@Index("idx_auto_pcb_id", ["pcbId"], {})
@Entity("provider_calculate_basket", { schema: "makeshop" })
export class ProviderCalculateBasket {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "pc_id",
    unsigned: true,
    default: () => "'0'",
  })
  pcId: number;

  @Column("int", {
    primary: true,
    name: "pco_id",
    unsigned: true,
    default: () => "'0'",
  })
  pcoId: number;

  @PrimaryGeneratedColumn({ type: "int", name: "pcb_id", unsigned: true })
  pcbId: number;

  @Column("varchar", { name: "ordernum", length: 50 })
  ordernum: string;

  @Column("int", { name: "basket_num", unsigned: true, default: () => "'1'" })
  basketNum: number;

  @Column("int", {
    name: "product_price",
    unsigned: true,
    default: () => "'0'",
  })
  productPrice: number;

  @Column("int", {
    name: "product_buyprice",
    unsigned: true,
    default: () => "'0'",
  })
  productBuyprice: number;

  @Column("int", { name: "option_price", default: () => "'0'" })
  optionPrice: number;

  @Column("int", { name: "b_sale_price", default: () => "'0'" })
  bSalePrice: number;
}
