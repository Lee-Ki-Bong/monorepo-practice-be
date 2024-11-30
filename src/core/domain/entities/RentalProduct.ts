import { Column, Entity } from "typeorm";

@Entity("rental_product", { schema: "makeshop" })
export class RentalProduct {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

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

  @Column("varchar", { name: "rental_info", nullable: true, length: 13 })
  rentalInfo: string | null;
}
