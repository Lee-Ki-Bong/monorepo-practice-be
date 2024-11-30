import { Column, Entity } from "typeorm";

@Entity("delivery_split_log", { schema: "makeshop" })
export class DeliverySplitLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "split_log_id", length: 17 })
  splitLogId: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", { primary: true, name: "basket_num" })
  basketNum: number;

  @Column("varchar", { name: "delivery_num", length: 23 })
  deliveryNum: string;

  @Column("varchar", { name: "new_delivery_num", nullable: true, length: 23 })
  newDeliveryNum: string | null;

  @Column("char", {
    name: "status",
    nullable: true,
    length: 8,
    default: () => "'COMPLETE'",
  })
  status: string | null;

  @Column("varchar", { name: "error", length: 20 })
  error: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
