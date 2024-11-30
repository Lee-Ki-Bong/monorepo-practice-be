import { Column, Entity } from "typeorm";

@Entity("oo_barotalk", { schema: "makeshop" })
export class OoBarotalk {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", { primary: true, name: "basket_num", default: () => "'0'" })
  basketNum: number;

  @Column("varchar", { name: "delivery_num", length: 23 })
  deliveryNum: string;

  @Column("enum", {
    primary: true,
    name: "request_type",
    enum: ["", "cancel", "trade", "refund"],
    default: () => "'cancel'",
  })
  requestType: "" | "cancel" | "trade" | "refund";

  @Column("varchar", { name: "reason", length: 30 })
  reason: string;

  @Column("enum", {
    name: "push_status",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  pushStatus: "" | "Y" | "N";

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;
}
