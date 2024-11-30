import { Column, Entity } from "typeorm";

@Entity("oo_refund_info", { schema: "makeshop" })
export class OoRefundInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("varchar", { name: "refund_bank_name", length: 255 })
  refundBankName: string;

  @Column("varchar", { name: "refund_bank_code", length: 255 })
  refundBankCode: string;

  @Column("varchar", { name: "refund_holder", length: 255 })
  refundHolder: string;

  @Column("varchar", { name: "refund_num", length: 255 })
  refundNum: string;
}
