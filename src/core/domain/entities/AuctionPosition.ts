import { Column, Entity, Index } from "typeorm";

@Index("adminuserspecial", ["adminuser", "special"], {})
@Index("regdate", ["adminuser", "special", "date"], {})
@Entity("auction_position", { schema: "makeshop" })
export class AuctionPosition {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "auction_uid",
    unsigned: true,
    default: () => "'0'",
  })
  auctionUid: number;

  @Column("smallint", {
    primary: true,
    name: "special",
    unsigned: true,
    default: () => "'0'",
  })
  special: number;

  @Column("char", { name: "date", length: 14 })
  date: string;
}
