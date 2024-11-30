import { Column, Entity, Index } from "typeorm";

@Index("id", ["adminuser", "code"], {})
@Entity("provider_checkout_info", { schema: "makeshop" })
export class ProviderCheckoutInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "code",
    unsigned: true,
    default: () => "'0'",
  })
  code: number;

  @Column("varchar", { name: "checkout", length: 12 })
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
}
