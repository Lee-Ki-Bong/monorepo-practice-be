import { Column, Entity } from "typeorm";

@Entity("power_review_statistic_order", { schema: "makeshop" })
export class PowerReviewStatisticOrder {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 50 })
  ordernum: string;

  @Column("enum", {
    name: "action_type",
    enum: ["", "VIEW", "CLICK"],
    default: () => "'VIEW'",
  })
  actionType: "" | "VIEW" | "CLICK";

  @Column("varchar", { name: "referer", length: 10 })
  referer: string;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;
}
