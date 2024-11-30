import { Column, Entity, Index } from "typeorm";

@Index("uid", ["uid"], {})
@Entity("navercheckout_order_temp", { schema: "makeshop" })
export class NavercheckoutOrderTemp {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "order_key", length: 26 })
  orderKey: string;

  @Column("int", {
    primary: true,
    name: "cart_id",
    unsigned: true,
    default: () => "'0'",
  })
  cartId: number;

  @Column("varchar", { primary: true, name: "tempid", length: 32 })
  tempid: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("int", { name: "amount", unsigned: true, default: () => "'0'" })
  amount: number;

  @Column("varchar", { primary: true, name: "opt_id", length: 50 })
  optId: string;

  @Column("int", {
    primary: true,
    name: "sto_id",
    unsigned: true,
    default: () => "'0'",
  })
  stoId: number;

  @Column("int", { name: "opt_stock", unsigned: true, default: () => "'0'" })
  optStock: number;

  @Column("varchar", { name: "id", nullable: true, length: 20 })
  id: string | null;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;

  @Column("enum", {
    name: "order_status",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  orderStatus: "" | "Y" | "N" | null;
}
