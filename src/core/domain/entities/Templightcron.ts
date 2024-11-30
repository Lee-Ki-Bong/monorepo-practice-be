import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("cron_index", ["cronHour", "cronDay", "cronMonth", "cronYear"], {})
@Index("cron_key", ["cronKey"], { unique: true })
@Entity("templightcron", { schema: "makeshop" })
export class Templightcron {
  @PrimaryGeneratedColumn({ type: "int", name: "cron_id", unsigned: true })
  cronId: number;

  @Column("varchar", { name: "cron_key", unique: true, length: 50 })
  cronKey: string;

  @Column("char", { name: "cron_hour", length: 2, default: () => "'*'" })
  cronHour: string;

  @Column("char", { name: "cron_day", length: 2, default: () => "'*'" })
  cronDay: string;

  @Column("char", { name: "cron_month", length: 2, default: () => "'*'" })
  cronMonth: string;

  @Column("varchar", { name: "cron_year", length: 4, default: () => "'*'" })
  cronYear: string;

  @Column("varchar", { name: "cron_filepath", length: 200 })
  cronFilepath: string;

  @Column("int", {
    name: "cron_priority",
    unsigned: true,
    default: () => "'30'",
  })
  cronPriority: number;
}
