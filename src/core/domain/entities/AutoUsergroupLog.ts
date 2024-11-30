import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser", ["adminuser", "userId"], {})
@Index("date_regist", ["dateRegist"], {})
@Entity("auto_usergroup_log", { schema: "makeshop" })
export class AutoUsergroupLog {
  @PrimaryGeneratedColumn({ type: "int", name: "log_id" })
  logId: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("mediumtext", { name: "content" })
  content: string;

  @Column("int", { name: "order_price", default: () => "'0'" })
  orderPrice: number;

  @Column("mediumint", { name: "order_count", default: () => "'0'" })
  orderCount: number;

  @Column("enum", {
    name: "period_type",
    enum: ["", "LATEST", "FIX", "ALL"],
    default: () => "'LATEST'",
  })
  periodType: "" | "LATEST" | "FIX" | "ALL";

  @Column("date", { name: "sdate", default: () => "'0000-00-00'" })
  sdate: string;

  @Column("date", { name: "edate", default: () => "'0000-00-00'" })
  edate: string;

  @Column("int", { name: "auto_reserve", unsigned: true, default: () => "'0'" })
  autoReserve: number;

  @Column("varchar", { name: "auto_coupon", nullable: true, length: 8 })
  autoCoupon: string | null;

  @Column("int", { name: "auto_point", unsigned: true, default: () => "'0'" })
  autoPoint: number;

  @Column("enum", {
    name: "state",
    enum: ["", "FAIL", "DONE"],
    default: () => "'DONE'",
  })
  state: "" | "FAIL" | "DONE";

  @Column("datetime", {
    name: "date_regist",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateRegist: Date;
}
