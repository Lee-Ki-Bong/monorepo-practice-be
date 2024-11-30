import { Column, Entity, Index } from "typeorm";

@Index("date_regist", ["dateRegist"], {})
@Index("order_type", ["orderType"], {})
@Entity("order_daum", { schema: "makeshop" })
export class OrderDaum {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("char", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("char", { name: "open_id", length: 32 })
  openId: string;

  @Column("enum", {
    name: "order_type",
    enum: ["", "MEMBER", "GUEST"],
    default: () => "'MEMBER'",
  })
  orderType: "" | "MEMBER" | "GUEST";

  @Column("enum", {
    name: "result_code",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  resultCode: "" | "Y" | "N";

  @Column("char", { name: "result_msg", length: 50 })
  resultMsg: string;

  @Column("datetime", {
    name: "date_regist",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateRegist: Date;
}
