import { Column, Entity } from "typeorm";

@Entity("shoppay_card_free", { schema: "makeshop" })
export class ShoppayCardFree {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("char", { primary: true, name: "free_code", length: 2 })
  freeCode: string;

  @Column("char", { primary: true, name: "free_month", length: 2 })
  freeMonth: string;

  @Column("int", { name: "free_min_price", default: () => "'0'" })
  freeMinPrice: number;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
