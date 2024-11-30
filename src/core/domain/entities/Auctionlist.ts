import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_al_uid", ["alUid"], {})
@Index("price_ukey", ["adminuser", "auctionUid", "price"], { unique: true })
@Entity("auctionlist", { schema: "makeshop" })
export class Auctionlist {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("int", { primary: true, name: "auction_uid", default: () => "'0'" })
  auctionUid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "al_uid" })
  alUid: number;

  @Column("varchar", { name: "startdate", length: 14 })
  startdate: string;

  @Column("int", { name: "auctionnum", default: () => "'0'" })
  auctionnum: number;

  @Column("varchar", { name: "id", length: 20 })
  id: string;

  @Column("varchar", { name: "date", length: 14 })
  date: string;

  @Column("bigint", { name: "price", nullable: true, unsigned: true })
  price: string | null;

  @Column("tinyint", { name: "amount", nullable: true, default: () => "'1'" })
  amount: number | null;

  @Column("varchar", { name: "content", nullable: true, length: 200 })
  content: string | null;

  @Column("enum", {
    name: "al_status",
    enum: ["", "BID", "CANCEL"],
    default: () => "'BID'",
  })
  alStatus: "" | "BID" | "CANCEL";

  @Column("mediumtext", { name: "etc", nullable: true })
  etc: string | null;
}
