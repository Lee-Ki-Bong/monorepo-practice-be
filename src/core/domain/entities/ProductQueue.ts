import { Column, Entity, Index } from "typeorm";

@Index("date_idx", ["queueTime"], {})
@Entity("product_queue", { schema: "makeshop" })
export class ProductQueue {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("enum", {
    primary: true,
    name: "queue_type",
    enum: ["", "A", "M", "D"],
    default: () => "'A'",
  })
  queueType: "" | "A" | "M" | "D";

  @Column("datetime", {
    name: "queue_time",
    default: () => "'0000-00-00 00:00:00'",
  })
  queueTime: Date;
}
