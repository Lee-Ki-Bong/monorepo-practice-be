import { Column, Entity } from "typeorm";

@Entity("d2mp_uom", { schema: "makeshop" })
export class D2mpUom {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "sku", length: 10 })
  sku: string;

  @Column("varchar", { primary: true, name: "stock_unit", length: 5 })
  stockUnit: string;

  @Column("int", { name: "uom_unit1", unsigned: true, default: () => "'0'" })
  uomUnit1: number;

  @Column("int", { name: "uom_unit2", unsigned: true, default: () => "'0'" })
  uomUnit2: number;

  @Column("datetime", {
    name: "update_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  updateDate: Date;
}
