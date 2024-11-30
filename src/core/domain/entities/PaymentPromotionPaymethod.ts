import { Column, Entity } from "typeorm";

@Entity("payment_promotion_paymethod", { schema: "makeshop" })
export class PaymentPromotionPaymethod {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("varchar", { primary: true, name: "paymethod", length: 20 })
  paymethod: string;
}
