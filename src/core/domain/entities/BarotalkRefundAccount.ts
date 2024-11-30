import { Column, Entity } from "typeorm";

@Entity("barotalk_refund_account", { schema: "makeshop" })
export class BarotalkRefundAccount {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("varchar", { name: "refund_bank", length: 40 })
  refundBank: string;

  @Column("varchar", { name: "refund_name", length: 30 })
  refundName: string;

  @Column("varchar", { name: "refund_num", length: 44 })
  refundNum: string;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;
}
