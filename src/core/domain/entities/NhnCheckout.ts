import { Column, Entity } from "typeorm";

@Entity("nhn_checkout", { schema: "makeshop" })
export class NhnCheckout {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", { name: "num", unsigned: true, default: () => "'0'" })
  num: number;

  @Column("varchar", { name: "nhnoid", length: 30 })
  nhnoid: string;

  @Column("varchar", { primary: true, name: "nhnprdid", length: 30 })
  nhnprdid: string;

  @Column("mediumtext", { name: "shipping_memo" })
  shippingMemo: string;

  @Column("mediumtext", { name: "add_memo" })
  addMemo: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
