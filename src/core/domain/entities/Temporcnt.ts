import { Column, Entity } from "typeorm";

@Entity("temporcnt", { schema: "makeshop" })
export class Temporcnt {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "brcode", length: 32 })
  brcode: string;

  @Column("int", { name: "cnt_order", unsigned: true, default: () => "'0'" })
  cntOrder: number;

  @Column("int", { name: "cnt_delivery", unsigned: true, default: () => "'0'" })
  cntDelivery: number;
}
