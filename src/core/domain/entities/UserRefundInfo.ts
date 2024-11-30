import { Column, Entity } from "typeorm";

@Entity("user_refund_info", { schema: "makeshop" })
export class UserRefundInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 40 })
  userId: string;

  @Column("varchar", { name: "refund_bank_name", length: 255 })
  refundBankName: string;

  @Column("varchar", { name: "refund_bank_code", length: 255 })
  refundBankCode: string;

  @Column("varchar", { name: "refund_num", length: 255 })
  refundNum: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("varchar", {
    name: "refund_account_holder",
    nullable: true,
    length: 255,
  })
  refundAccountHolder: string | null;
}
