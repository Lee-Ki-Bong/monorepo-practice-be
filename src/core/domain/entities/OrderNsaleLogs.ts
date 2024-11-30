import { Column, Entity, Index } from "typeorm";

@Index(
  "check_date",
  ["adminuser", "userId", "historyType", "checkDate", "nowStatus"],
  {}
)
@Index(
  "ordernum",
  ["adminuser", "userId", "historyType", "ordernum", "nowStatus"],
  {}
)
@Index("user_id", ["adminuser", "userId"], {})
@Entity("order_nsale_logs", { schema: "makeshop" })
export class OrderNsaleLogs {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "history_type", length: 10 })
  historyType: string;

  @Column("varchar", { name: "user_id", nullable: true, length: 20 })
  userId: string | null;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", { primary: true, name: "basket_num", default: () => "'0'" })
  basketNum: number;

  @Column("varchar", { name: "custom_id", nullable: true, length: 50 })
  customId: string | null;

  @Column("varchar", { name: "now_status", nullable: true, length: 10 })
  nowStatus: string | null;

  @Column("date", {
    name: "check_date",
    nullable: true,
    default: () => "'0000-00-00'",
  })
  checkDate: string | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
