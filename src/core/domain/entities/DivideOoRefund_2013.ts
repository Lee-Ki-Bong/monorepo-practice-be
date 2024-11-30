import { Column, Entity } from "typeorm";

@Entity("divide_oo_refund_2013", { schema: "makeshop" })
export class DivideOoRefund_2013 {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "refund_uid",
    unsigned: true,
    default: () => "'0'",
  })
  refundUid: number;

  @Column("varchar", { primary: true, name: "ordernum", length: 32 })
  ordernum: string;

  @Column("varchar", { name: "refund_account", nullable: true, length: 255 })
  refundAccount: string | null;

  @Column("varchar", { name: "refund_accounter", length: 30 })
  refundAccounter: string;
}
