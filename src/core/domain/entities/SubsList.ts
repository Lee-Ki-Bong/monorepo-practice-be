import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("index_date", ["adminuser", "subsDate"], {})
@Index("index_date_next", ["adminuser", "subsDateNext"], {})
@Index("index_id", ["adminuser", "userId"], {})
@Index("index_subs_id", ["subsId"], {})
@Index("index_subs_sort", ["adminuser", "userId", "subsSort"], {})
@Entity("subs_list", { schema: "makeshop" })
export class SubsList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "subs_id", unsigned: true })
  subsId: number;

  @Column("datetime", {
    name: "subs_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  subsDate: Date;

  @Column("enum", {
    name: "subs_status",
    enum: ["", "LIVE", "CANCEL"],
    default: () => "'LIVE'",
  })
  subsStatus: "" | "LIVE" | "CANCEL";

  @Column("smallint", {
    name: "subs_sort",
    unsigned: true,
    default: () => "'0'",
  })
  subsSort: number;

  @Column("varchar", { name: "user_id", length: 40 })
  userId: string;

  @Column("varchar", { name: "sender", length: 30 })
  sender: string;

  @Column("varchar", { name: "phone", length: 30 })
  phone: string;

  @Column("varchar", { name: "email", length: 50 })
  email: string;

  @Column("varchar", { name: "post", length: 10 })
  post: string;

  @Column("varchar", { name: "address", length: 100 })
  address: string;

  @Column("varchar", { name: "address2", length: 100 })
  address2: string;

  @Column("varchar", { name: "receiver", length: 32 })
  receiver: string;

  @Column("varchar", { name: "receiver_mobile", length: 30 })
  receiverMobile: string;

  @Column("varchar", { name: "receiver_phone", length: 30 })
  receiverPhone: string;

  @Column("mediumtext", { name: "order_msg" })
  orderMsg: string;

  @Column("mediumtext", { name: "delivery_msg" })
  deliveryMsg: string;

  @Column("varchar", { name: "bill_uid", length: 255 })
  billUid: string;

  @Column("varchar", { name: "subs_product_name", length: 255 })
  subsProductName: string;

  @Column("int", {
    name: "subs_total_price",
    unsigned: true,
    default: () => "'0'",
  })
  subsTotalPrice: number;

  @Column("date", { name: "subs_date_next", default: () => "'0000-00-00'" })
  subsDateNext: string;

  @Column("datetime", {
    name: "subs_date_last",
    default: () => "'0000-00-00 00:00:00'",
  })
  subsDateLast: Date;

  @Column("date", { name: "subs_date_wait", default: () => "'0000-00-00'" })
  subsDateWait: string;

  @Column("varchar", { name: "subs_etctype", length: 255 })
  subsEtctype: string;

  @Column("varchar", { name: "subs_fail_comment", length: 255 })
  subsFailComment: string;

  @Column("datetime", {
    name: "subs_fail_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  subsFailDate: Date;

  @Column("datetime", {
    name: "subs_date_update",
    default: () => "'0000-00-00 00:00:00'",
  })
  subsDateUpdate: Date;

  @Column("datetime", {
    name: "subs_cancel_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  subsCancelDate: Date;
}
