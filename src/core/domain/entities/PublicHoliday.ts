import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("public_holiday", { schema: "makeshop" })
export class PublicHoliday {
  @PrimaryGeneratedColumn({ type: "int", name: "ph_idx", unsigned: true })
  phIdx: number;

  @Column("date", { name: "ph_date", default: () => "'0000-00-00'" })
  phDate: string;

  @Column("varchar", { name: "ph_day_name", length: 30 })
  phDayName: string;
}
