import { Column, Entity } from "typeorm";

@Entity("product_stock_notify", { schema: "makeshop" })
export class ProductStockNotify {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("set", { name: "email_type", nullable: true, enum: ["SAFE", "STOP"] })
  emailType: ("SAFE" | "STOP")[] | null;

  @Column("varchar", { name: "email_receiver1", length: 200 })
  emailReceiver1: string;

  @Column("varchar", { name: "email_receiver2", length: 200 })
  emailReceiver2: string;

  @Column("varchar", { name: "email_receiver3", length: 200 })
  emailReceiver3: string;

  @Column("varchar", { name: "email_receiver4", length: 200 })
  emailReceiver4: string;

  @Column("set", { name: "sms_type", nullable: true, enum: ["SAFE", "STOP"] })
  smsType: ("SAFE" | "STOP")[] | null;

  @Column("enum", {
    name: "sms_real_time",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  smsRealTime: "" | "Y" | "N";

  @Column("tinyint", { name: "sms_time", default: () => "'12'" })
  smsTime: number;

  @Column("varchar", { name: "sms_receiver1", length: 20 })
  smsReceiver1: string;

  @Column("varchar", { name: "sms_receiver2", length: 20 })
  smsReceiver2: string;

  @Column("varchar", { name: "sms_receiver3", length: 20 })
  smsReceiver3: string;

  @Column("varchar", { name: "sms_receiver4", length: 20 })
  smsReceiver4: string;

  @Column("varchar", { name: "sms_receiver5", length: 20 })
  smsReceiver5: string;
}
