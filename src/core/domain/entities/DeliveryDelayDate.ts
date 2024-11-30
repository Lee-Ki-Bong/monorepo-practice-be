import { Column, Entity } from "typeorm";

@Entity("delivery_delay_date", { schema: "makeshop" })
export class DeliveryDelayDate {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

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
