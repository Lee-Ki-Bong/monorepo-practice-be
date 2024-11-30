import { Column, Entity, Index } from "typeorm";

@Index("user_id", ["adminuser", "edorderUserId", "edpayId"], {})
@Entity("edgeday_order", { schema: "makeshop" })
export class EdgedayOrder {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "ed_id",
    unsigned: true,
    default: () => "'0'",
  })
  edId: number;

  @Column("int", {
    primary: true,
    name: "edpay_id",
    unsigned: true,
    default: () => "'0'",
  })
  edpayId: number;

  @Column("varchar", { name: "edorder_key", length: 16 })
  edorderKey: string;

  @Column("varchar", { name: "edorder_user_id", length: 12 })
  edorderUserId: string;

  @Column("varchar", { name: "edorder_user_name", length: 20 })
  edorderUserName: string;

  @Column("varchar", { name: "edorder_user_phone", length: 15 })
  edorderUserPhone: string;

  @Column("varchar", { name: "edorder_user_email", length: 100 })
  edorderUserEmail: string;

  @Column("enum", {
    name: "edorder_type",
    enum: ["", "BUY", "GIFT"],
    default: () => "'BUY'",
  })
  edorderType: "" | "BUY" | "GIFT";

  @Column("enum", {
    name: "edorder_coupon_status",
    enum: ["", "NONE", "READY", "CANCEL", "DONE"],
    default: () => "'NONE'",
  })
  edorderCouponStatus: "" | "NONE" | "READY" | "CANCEL" | "DONE";

  @Column("int", {
    name: "edorder_coupon_number",
    nullable: true,
    unsigned: true,
  })
  edorderCouponNumber: number | null;

  @Column("varchar", {
    name: "edorder_receiver_id",
    nullable: true,
    length: 12,
  })
  edorderReceiverId: string | null;

  @Column("datetime", { name: "edorder_received_date", nullable: true })
  edorderReceivedDate: Date | null;

  @Column("varchar", {
    name: "edorder_receiver_name",
    nullable: true,
    length: 20,
  })
  edorderReceiverName: string | null;

  @Column("varchar", {
    name: "edorder_receiver_email",
    nullable: true,
    length: 100,
  })
  edorderReceiverEmail: string | null;

  @Column("varchar", {
    name: "edorder_receiver_phone",
    nullable: true,
    length: 15,
  })
  edorderReceiverPhone: string | null;

  @Column("mediumtext", { name: "edorder_user_message", nullable: true })
  edorderUserMessage: string | null;
}
