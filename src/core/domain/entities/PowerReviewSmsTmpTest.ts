import { Column, Entity, Index } from "typeorm";

@Index("sms", ["adminuser", "ordernum"], {})
@Entity("power_review_sms_tmp_test", { schema: "makeshop" })
export class PowerReviewSmsTmpTest {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("enum", {
    name: "delivery_act_type",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  deliveryActType: "" | "Y" | "N";

  @Column("datetime", {
    name: "insert_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  insertDate: Date;

  @Column("enum", {
    name: "sms_send_status",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  smsSendStatus: "" | "Y" | "N";

  @Column("datetime", {
    name: "sms_send_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  smsSendDate: Date;
}
