import { Column, Entity, Index } from "typeorm";

@Index("idx_order_complete_state", ["adminuser", "startDate", "state"], {})
@Index(
  "idx_order_deli_state",
  ["adminuser", "ordernum", "deliveryNum", "state"],
  {}
)
@Entity("smart_tracking_fail_log", { schema: "makeshop" })
export class SmartTrackingFailLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 50 })
  ordernum: string;

  @Column("varchar", { primary: true, name: "delivery_num", length: 100 })
  deliveryNum: string;

  @Column("varchar", { name: "state", length: 4, default: () => "'API'" })
  state: string;

  @Column("datetime", {
    name: "start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  startDate: Date;

  @Column("datetime", {
    name: "complete_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  completeDate: Date;

  @Column("int", { name: "count", default: () => "'1'" })
  count: number;

  @Column("varchar", { name: "deli_num", length: 20 })
  deliNum: string;

  @Column("varchar", { name: "deli_com", length: 20 })
  deliCom: string;
}
