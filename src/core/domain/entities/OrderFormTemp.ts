import { Column, Entity, Index } from "typeorm";

@Index("ordernum", ["ordernum"], {})
@Entity("order_form_temp", { schema: "makeshop" })
export class OrderFormTemp {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("varchar", { primary: true, name: "tempid", length: 32 })
  tempid: string;

  @Column("varchar", { primary: true, name: "oft_type", length: 20 })
  oftType: string;

  @Column("mediumtext", { name: "oft_value" })
  oftValue: string;

  @Column("datetime", {
    name: "oft_add_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  oftAddDate: Date;
}
