import { Column, Entity, Index } from "typeorm";

@Index("ems_type", ["adminuser", "scEmsType"], {})
@Entity("shipping_country", { schema: "makeshop" })
export class ShippingCountry {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    primary: true,
    name: "sc_ems_type",
    enum: ["", "EMS", "PREMIUM"],
    default: () => "'PREMIUM'",
  })
  scEmsType: "" | "EMS" | "PREMIUM";

  @Column("char", { primary: true, name: "sc_code", length: 2 })
  scCode: string;

  @Column("varchar", { name: "sc_name", length: 50 })
  scName: string;

  @Column("int", { name: "sc_sort", unsigned: true, default: () => "'0'" })
  scSort: number;

  @Column("datetime", {
    name: "sc_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  scRegDate: Date;
}
