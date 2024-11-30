import { Column, Entity, Index } from "typeorm";

@Index("tracking_date", ["adminuser", "otType", "sendDate", "cancelDate"], {})
@Index("tracking_num", ["adminuser", "otType", "trackingNum"], {})
@Entity("order_tracking", { schema: "makeshop" })
export class OrderTracking {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ot_type", length: 10 })
  otType: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", {
    primary: true,
    name: "basket_num",
    unsigned: true,
    default: () => "'0'",
  })
  basketNum: number;

  @Column("varchar", { name: "tracking_num", length: 255 })
  trackingNum: string;

  @Column("datetime", {
    name: "cancel_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  cancelDate: Date;

  @Column("datetime", {
    name: "send_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  sendDate: Date;

  @Column("int", { name: "payment", unsigned: true, default: () => "'0'" })
  payment: number;

  @Column("datetime", {
    name: "pay_click_time",
    default: () => "'0000-00-00 00:00:00'",
  })
  payClickTime: Date;

  @Column("datetime", {
    name: "pay_cancel_time",
    default: () => "'0000-00-00 00:00:00'",
  })
  payCancelTime: Date;
}
