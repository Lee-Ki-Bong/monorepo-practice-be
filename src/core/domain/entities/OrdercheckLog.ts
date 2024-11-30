import { Column, Entity } from "typeorm";

@Entity("ordercheck_log", { schema: "makeshop" })
export class OrdercheckLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "date", length: 8 })
  date: string;

  @Column("enum", {
    primary: true,
    name: "type",
    enum: ["", "bas", "try", "pay", "end"],
    default: () => "'try'",
  })
  type: "" | "bas" | "try" | "pay" | "end";

  @Column("int", { name: "order_cnt", unsigned: true, default: () => "'0'" })
  orderCnt: number;

  @Column("int", { name: "order_price", unsigned: true, default: () => "'0'" })
  orderPrice: number;

  @Column("mediumtext", { name: "order_ordernum", nullable: true })
  orderOrdernum: string | null;
}
