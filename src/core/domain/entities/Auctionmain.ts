import { Column, Entity } from "typeorm";

@Entity("auctionmain", { schema: "makeshop" })
export class Auctionmain {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("tinyint", {
    name: "gong_num",
    nullable: true,
    default: () => "'10'",
  })
  gongNum: number | null;

  @Column("tinyint", {
    name: "auction_num",
    nullable: true,
    default: () => "'10'",
  })
  auctionNum: number | null;

  @Column("tinyint", {
    name: "auction_order",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  auctionOrder: boolean | null;

  @Column("tinyint", {
    name: "gong_img",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  gongImg: boolean | null;

  @Column("tinyint", {
    name: "magam_day",
    nullable: true,
    default: () => "'0'",
  })
  magamDay: number | null;
}
