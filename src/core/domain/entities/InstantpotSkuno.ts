import { Column, Entity } from "typeorm";

@Entity("instantpot_skuno", { schema: "makeshop" })
export class InstantpotSkuno {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "sku_no", length: 50 })
  skuNo: string;

  @Column("varchar", { name: "model", length: 50 })
  model: string;
}
