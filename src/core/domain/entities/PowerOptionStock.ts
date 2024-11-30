import { Column, Entity } from "typeorm";

@Entity("power_option_stock", { schema: "makeshop" })
export class PowerOptionStock {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("mediumtext", { name: "mix_info" })
  mixInfo: string;

  @Column("mediumtext", { name: "stock" })
  stock: string;

  @Column("mediumtext", { name: "note" })
  note: string;
}
