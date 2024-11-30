import { Column, Entity } from "typeorm";

@Entity("rm_order_receive", { schema: "makeshop" })
export class RmOrderReceive {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 50 })
  ordernum: string;

  @Column("enum", {
    name: "emailreceive",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  emailreceive: "" | "Y" | "N";

  @Column("enum", {
    name: "smsreceive",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  smsreceive: "" | "Y" | "N";

  @Column("enum", {
    name: "pushreceive",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  pushreceive: "" | "Y" | "N";
}
