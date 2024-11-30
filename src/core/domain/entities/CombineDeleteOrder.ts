import { Column, Entity, Index } from "typeorm";

@Index("admin_combine_date", ["adminuser", "combineDate"], {})
@Index("id", ["adminuser", "id"], {})
@Index("ordernum", ["ordernum"], {})
@Entity("combine_delete_order", { schema: "makeshop" })
export class CombineDeleteOrder {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 50 })
  ordernum: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("int", { name: "price", default: () => "'0'" })
  price: number;

  @Column("int", { name: "deli_price", default: () => "'0'" })
  deliPrice: number;

  @Column("int", { name: "used_emoney", default: () => "'0'" })
  usedEmoney: number;

  @Column("int", { name: "used_reserve", default: () => "'0'" })
  usedReserve: number;

  @Column("char", { name: "order_status", length: 1, default: () => "'N'" })
  orderStatus: string;

  @Column("datetime", {
    name: "date_order",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateOrder: Date;

  @Column("datetime", {
    name: "date_insert",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateInsert: Date;

  @Column("datetime", {
    primary: true,
    name: "combine_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  combineDate: Date;
}
