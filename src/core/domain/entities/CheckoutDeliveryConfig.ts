import { Column, Entity, Index } from "typeorm";

@Index("id", ["adminuser", "code"], {})
@Entity("checkout_delivery_config", { schema: "makeshop" })
export class CheckoutDeliveryConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "code",
    unsigned: true,
    default: () => "'0'",
  })
  code: number;

  @Column("varchar", { primary: true, name: "checkout", length: 12 })
  checkout: string;

  @Column("char", {
    name: "return_delicom",
    nullable: true,
    length: 3,
    default: () => "'0'",
  })
  returnDelicom: string | null;

  @Column("int", { name: "cash_on_deli_price", nullable: true })
  cashOnDeliPrice: number | null;

  @Column("varchar", { name: "return_price", nullable: true, length: 6 })
  returnPrice: string | null;

  @Column("varchar", { name: "exchange_price", nullable: true, length: 6 })
  exchangePrice: string | null;
}
