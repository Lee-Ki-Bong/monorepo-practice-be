import { Column, Entity } from "typeorm";

@Entity("oo_order_rental", { schema: "makeshop" })
export class OoOrderRental {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", { name: "rental_price", unsigned: true, default: () => "'0'" })
  rentalPrice: number;

  @Column("int", {
    name: "rental_period",
    unsigned: true,
    default: () => "'0'",
  })
  rentalPeriod: number;

  @Column("int", {
    name: "rental_prepaymentprice",
    unsigned: true,
    default: () => "'0'",
  })
  rentalPrepaymentprice: number;

  @Column("datetime", {
    name: "insert_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  insertDate: Date;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;
}
