import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Entity("auction_temp", { schema: "makeshop" })
export class AuctionTemp {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("int", { name: "auction_uid", unsigned: true, default: () => "'0'" })
  auctionUid: number;

  @Column("varchar", { name: "startdate", length: 14 })
  startdate: string;

  @Column("int", { name: "ac_id", nullable: true, unsigned: true })
  acId: number | null;

  @Column("varchar", { name: "subject", nullable: true, length: 255 })
  subject: string | null;

  @Column("varchar", { name: "enddate", length: 14 })
  enddate: string;

  @Column("float", { name: "startprice", nullable: true, precision: 12 })
  startprice: number | null;

  @Column("float", { name: "fixedprice", nullable: true, precision: 12 })
  fixedprice: number | null;

  @Column("varchar", { name: "image", nullable: true, length: 255 })
  image: string | null;

  @Column("longtext", { name: "content", nullable: true })
  content: string | null;

  @Column("enum", {
    name: "type",
    enum: ["", "auction", "link"],
    default: () => "'auction'",
  })
  type: "" | "auction" | "link";

  @Column("longtext", { name: "etc", nullable: true })
  etc: string | null;
}
