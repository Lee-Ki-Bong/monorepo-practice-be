import { Column, Entity } from "typeorm";

@Entity("order_channel_history", { schema: "makeshop" })
export class OrderChannelHistory {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("date", {
    primary: true,
    name: "order_date",
    default: () => "'0000-00-00'",
  })
  orderDate: string;

  @Column("varchar", { primary: true, name: "channel_name", length: 20 })
  channelName: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("int", { name: "conn_cnt", unsigned: true, default: () => "'0'" })
  connCnt: number;

  @Column("int", { name: "order_cnt", unsigned: true, default: () => "'0'" })
  orderCnt: number;

  @Column("int", { name: "order_price", unsigned: true, default: () => "'0'" })
  orderPrice: number;
}
