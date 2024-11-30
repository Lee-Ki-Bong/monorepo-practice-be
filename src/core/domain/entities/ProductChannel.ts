import { Column, Entity } from "typeorm";

@Entity("product_channel", { schema: "makeshop" })
export class ProductChannel {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "channel_name", length: 20 })
  channelName: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
