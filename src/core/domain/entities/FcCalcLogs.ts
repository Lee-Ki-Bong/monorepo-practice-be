import { Column, Entity, Index } from "typeorm";

@Index("adminuser", ["adminuser", "date"], {})
@Entity("fc_calc_logs", { schema: "makeshop" })
export class FcCalcLogs {
  @Column("varchar", { name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "date", length: 14 })
  date: string;

  @Column("varchar", { name: "check_date", length: 6 })
  checkDate: string;

  @Column("varchar", { name: "ip", nullable: true, length: 15 })
  ip: string | null;
}
