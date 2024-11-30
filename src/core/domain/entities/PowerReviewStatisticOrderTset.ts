import { Column, Entity } from "typeorm";

@Entity("power_review_statistic_order_tset", { schema: "makeshop" })
export class PowerReviewStatisticOrderTset {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 50 })
  ordernum: string;

  @Column("varchar", { name: "referer", length: 10 })
  referer: string;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;
}
