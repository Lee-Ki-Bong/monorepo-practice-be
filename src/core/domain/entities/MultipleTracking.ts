import { Column, Entity } from "typeorm";

@Entity("multiple_tracking", { schema: "makeshop" })
export class MultipleTracking {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("varchar", { primary: true, name: "delivery_num", length: 23 })
  deliveryNum: string;

  @Column("varchar", { name: "tracking_num", length: 255 })
  trackingNum: string;
}
