import { Column, Entity } from "typeorm";

@Entity("product_appoint", { schema: "makeshop" })
export class ProductAppoint {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("varchar", { name: "brandcode", nullable: true, length: 12 })
  brandcode: string | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "display_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  displayDate: Date;
}
