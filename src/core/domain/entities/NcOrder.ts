import { Column, Entity } from "typeorm";

@Entity("nc_order", { schema: "makeshop" })
export class NcOrder {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "orderid", length: 25 })
  orderid: string;

  @Column("varchar", { primary: true, name: "productorderid", length: 25 })
  productorderid: string;

  @Column("varchar", { name: "productorderstatus", length: 30 })
  productorderstatus: string;

  @Column("varchar", { name: "nc_id", length: 80 })
  ncId: string;

  @Column("varchar", { name: "button_id", length: 120 })
  buttonId: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
