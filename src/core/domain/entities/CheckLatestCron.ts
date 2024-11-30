import { Column, Entity } from "typeorm";

@Entity("check_latest_cron", { schema: "makeshop" })
export class CheckLatestCron {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "proc_type", length: 14 })
  procType: string;

  @Column("datetime", {
    name: "start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  startDate: Date;

  @Column("datetime", {
    name: "end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  endDate: Date;

  @Column("datetime", {
    name: "etc_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  etcDate: Date;
}
