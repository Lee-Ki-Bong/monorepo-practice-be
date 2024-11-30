import { Column, Entity } from "typeorm";

@Entity("tmp_power_option_stock", { schema: "makeshop" })
export class TmpPowerOptionStock {
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
}
