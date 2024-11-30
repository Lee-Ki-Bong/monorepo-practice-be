import { Column, Entity, Index } from "typeorm";

@Index("uid", ["adminuser", "uid"], {})
@Entity("product_channel_match", { schema: "makeshop" })
export class ProductChannelMatch {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "channel_name", length: 20 })
  channelName: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("varchar", { name: "channel_url", length: 255 })
  channelUrl: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
