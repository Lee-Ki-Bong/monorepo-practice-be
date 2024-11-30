import { Column, Entity } from "typeorm";

@Entity("divide_oo_refund_2024", { schema: "makeshop" })
export class DivideOoRefund_2024 {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { primary: true, name: "refund_uid", unsigned: true })
  refundUid: number;

  @Column("varchar", { primary: true, name: "ordernum", length: 32 })
  ordernum: string;

  @Column("varchar", { name: "refund_account", nullable: true, length: 255 })
  refundAccount: string | null;

  @Column("varchar", { name: "refund_accounter", length: 30 })
  refundAccounter: string;
}
