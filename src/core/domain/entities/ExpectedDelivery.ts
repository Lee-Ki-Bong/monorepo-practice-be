import { Column, Entity } from "typeorm";

@Entity("expected_delivery", { schema: "makeshop" })
export class ExpectedDelivery {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", {
    primary: true,
    name: "basket_num",
    unsigned: true,
    default: () => "'0'",
  })
  basketNum: number;

  @Column("varchar", {
    name: "expected_date",
    length: 10,
    default: () => "'0000-00-00'",
  })
  expectedDate: string;
}
