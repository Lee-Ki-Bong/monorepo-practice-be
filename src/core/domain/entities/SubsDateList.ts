import { Column, Entity } from "typeorm";

@Entity("subs_date_list", { schema: "makeshop" })
export class SubsDateList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "sd_provider",
    unsigned: true,
    default: () => "'0'",
  })
  sdProvider: number;

  @Column("enum", {
    primary: true,
    name: "sd_type",
    enum: ["", "HOLIDAY", "FIX"],
    default: () => "'HOLIDAY'",
  })
  sdType: "" | "HOLIDAY" | "FIX";

  @Column("date", {
    primary: true,
    name: "sd_date",
    default: () => "'0000-00-00'",
  })
  sdDate: string;

  @Column("datetime", {
    name: "date_insert",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateInsert: Date;
}
