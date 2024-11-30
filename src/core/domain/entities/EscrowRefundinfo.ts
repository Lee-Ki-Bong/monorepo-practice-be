import { Column, Entity } from "typeorm";

@Entity("escrow_refundinfo", { schema: "makeshop" })
export class EscrowRefundinfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "sub_id", length: 20 })
  subId: string;

  @Column("varchar", { name: "id", length: 20 })
  id: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("enum", {
    name: "status",
    enum: ["", "Y", "N", "S"],
    default: () => "'N'",
  })
  status: "" | "Y" | "N" | "S";

  @Column("varchar", { name: "phone_num", length: 12 })
  phoneNum: string;

  @Column("varchar", { name: "re_bank", length: 255 })
  reBank: string;

  @Column("varchar", { name: "re_depositor", length: 255 })
  reDepositor: string;

  @Column("varchar", { name: "re_accountno", length: 255 })
  reAccountno: string;

  @Column("varchar", { name: "re_bankcode", length: 255 })
  reBankcode: string;

  @Column("enum", {
    name: "re_reason",
    enum: ["", "A", "B", "C"],
    default: () => "'A'",
  })
  reReason: "" | "A" | "B" | "C";

  @Column("varchar", { name: "re_etc", length: 40 })
  reEtc: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
