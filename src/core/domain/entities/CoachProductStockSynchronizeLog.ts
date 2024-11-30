import { Column, Entity } from "typeorm";

@Entity("coach_product_stock_synchronize_log", { schema: "makeshop" })
export class CoachProductStockSynchronizeLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "log_flag",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  logFlag: "" | "Y" | "N";

  @Column("varchar", { primary: true, name: "log_date", length: 8 })
  logDate: string;

  @Column("datetime", {
    primary: true,
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
