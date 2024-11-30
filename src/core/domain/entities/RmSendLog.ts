import { Column, Entity } from "typeorm";

@Entity("rm_send_log", { schema: "makeshop" })
export class RmSendLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 50 })
  ordernum: string;

  @Column("enum", {
    primary: true,
    name: "service_type",
    enum: ["", "sms", "mail"],
    default: () => "'sms'",
  })
  serviceType: "" | "sms" | "mail";

  @Column("varchar", { primary: true, name: "address", length: 100 })
  address: string;

  @Column("enum", {
    primary: true,
    name: "send_target",
    enum: ["", "delivery", "order", "cancel"],
    default: () => "'delivery'",
  })
  sendTarget: "" | "delivery" | "order" | "cancel";

  @Column("date", { name: "send_date", nullable: true })
  sendDate: string | null;
}
