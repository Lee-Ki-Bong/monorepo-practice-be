import { Column, Entity } from "typeorm";

@Entity("gift_price_list", { schema: "makeshop" })
export class GiftPriceList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "gpl_start_price",
    unsigned: true,
    default: () => "'0'",
  })
  gplStartPrice: number;

  @Column("int", {
    name: "gpl_end_price",
    unsigned: true,
    default: () => "'0'",
  })
  gplEndPrice: number;

  @Column("smallint", {
    name: "gpl_select_limit",
    unsigned: true,
    default: () => "'1'",
  })
  gplSelectLimit: number;
}
