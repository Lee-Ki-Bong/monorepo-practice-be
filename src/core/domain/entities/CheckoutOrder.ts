import { Column, Entity, Index } from "typeorm";

@Index("reg_date", ["adminuser", "regDate"], {})
@Entity("checkout_order", { schema: "makeshop" })
export class CheckoutOrder {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("varchar", { name: "link_id", length: 10 })
  linkId: string;

  @Column("varchar", { name: "ip", length: 16 })
  ip: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'1001-01-01 00:00:00'",
  })
  regDate: Date;
}
