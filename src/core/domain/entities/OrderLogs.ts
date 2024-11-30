import { Column, Entity, Index } from "typeorm";

@Index("idx_date", ["date"], {})
@Entity("order_logs", { schema: "makeshop" })
export class OrderLogs {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("varchar", { name: "date", length: 14 })
  date: string;

  @Column("varchar", { name: "type", length: 20 })
  type: string;

  @Column("mediumtext", { name: "content" })
  content: string;

  @Column("varchar", { name: "ip", length: 15 })
  ip: string;
}
