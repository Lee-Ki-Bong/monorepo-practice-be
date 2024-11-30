import { Column, Entity, Index } from "typeorm";

@Index("reg_date", ["adminuser", "regDate"], {})
@Entity("naverpay_product_order", { schema: "makeshop" })
export class NaverpayProductOrder {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "product_order_id", length: 20 })
  productOrderId: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
