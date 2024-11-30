import { Column, Entity } from "typeorm";

@Entity("oo_order_msg", { schema: "makeshop" })
export class OoOrderMsg {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("varchar", {
    primary: true,
    name: "msg_type",
    length: 8,
    default: () => "'ORDER'",
  })
  msgType: string;

  @Column("varchar", { name: "tempid", length: 32 })
  tempid: string;

  @Column("datetime", {
    name: "msg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  msgDate: Date;

  @Column("mediumtext", { name: "msg" })
  msg: string;
}
