import { Column, Entity } from "typeorm";

@Entity("smart_tracking", { schema: "makeshop" })
export class SmartTracking {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 50 })
  ordernum: string;

  @Column("varchar", { primary: true, name: "delivery_num", length: 100 })
  deliveryNum: string;

  @Column("char", { name: "state", length: 2, default: () => "'ST'" })
  state: string;

  @Column("datetime", {
    name: "start_date",
    default: () => "'1000-01-01 00:00:00'",
  })
  startDate: Date;

  @Column("datetime", {
    name: "complete_date",
    default: () => "'1000-01-01 00:00:00'",
  })
  completeDate: Date;
}
