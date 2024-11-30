import { Column, Entity } from "typeorm";

@Entity("order_paydata", { schema: "makeshop" })
export class OrderPaydata {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 50 })
  ordernum: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("varchar", { primary: true, name: "tempid", length: 32 })
  tempid: string;

  @Column("mediumtext", { name: "paydata", nullable: true })
  paydata: string | null;
}
