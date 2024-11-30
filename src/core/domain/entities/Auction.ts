import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_auction_uid", ["auctionUid"], {})
@Index("name", ["id", "subject", "enddate"], {})
@Entity("auction", { schema: "makeshop" })
export class Auction {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "auction_uid", unsigned: true })
  auctionUid: number;

  @Column("varchar", { name: "startdate", length: 14 })
  startdate: string;

  @Column("int", { name: "auctionnum", default: () => "'0'" })
  auctionnum: number;

  @Column("varchar", { name: "id", nullable: true, length: 20 })
  id: string | null;

  @Column("int", { name: "ac_id", nullable: true, unsigned: true })
  acId: number | null;

  @Column("varchar", { name: "subject", nullable: true, length: 255 })
  subject: string | null;

  @Column("varchar", { name: "enddate", length: 14 })
  enddate: string;

  @Column("varchar", { name: "area", nullable: true, length: 20 })
  area: string | null;

  @Column("varchar", { name: "used", nullable: true, length: 30 })
  used: string | null;

  @Column("varchar", { name: "mkorder", nullable: true, length: 26 })
  mkorder: string | null;

  @Column("float", { name: "startprice", nullable: true, precision: 12 })
  startprice: number | null;

  @Column("bigint", { name: "lastprice", nullable: true, unsigned: true })
  lastprice: string | null;

  @Column("float", { name: "fixedprice", nullable: true, precision: 12 })
  fixedprice: number | null;

  @Column("tinyint", { name: "amount", nullable: true })
  amount: number | null;

  @Column("varchar", { name: "image", nullable: true, length: 255 })
  image: string | null;

  @Column("longtext", { name: "content", nullable: true })
  content: string | null;

  @Column("int", { name: "bids", nullable: true, default: () => "'0'" })
  bids: number | null;

  @Column("int", { name: "cnt", nullable: true, default: () => "'0'" })
  cnt: number | null;

  @Column("int", { name: "danwi", nullable: true, default: () => "'0'" })
  danwi: number | null;

  @Column("int", { name: "danwi2", nullable: true, default: () => "'0'" })
  danwi2: number | null;

  @Column("varchar", { name: "filter", length: 255 })
  filter: string;

  @Column("enum", {
    name: "filtertype",
    enum: ["", "Y", "1", "2"],
    default: () => "'Y'",
  })
  filtertype: "" | "Y" | "1" | "2";

  @Column("varchar", { name: "change_word", length: 255 })
  changeWord: string;

  @Column("enum", {
    name: "type",
    enum: ["", "auction", "link"],
    default: () => "'auction'",
  })
  type: "" | "auction" | "link";

  @Column("enum", {
    name: "status",
    enum: ["", "SELL", "STOP", "CANCEL"],
    default: () => "'SELL'",
  })
  status: "" | "SELL" | "STOP" | "CANCEL";

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;

  @Column("longtext", { name: "etc", nullable: true })
  etc: string | null;

  @Column("enum", {
    name: "display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  display: "" | "Y" | "N";

  @Column("enum", {
    name: "best_product_display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  bestProductDisplay: "" | "Y" | "N";

  @Column("enum", {
    name: "immediate_end",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  immediateEnd: "" | "Y" | "N";

  @Column("enum", {
    name: "auto_extend_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  autoExtendUse: "" | "Y" | "N";

  @Column("int", { name: "auto_extend_time", default: () => "'1'" })
  autoExtendTime: number;
}
