import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_bid", ["bid"], {})
@Index("reg_date", ["adminuser", "bType", "regDate"], {})
@Index("user", ["adminuser", "bType", "userId"], {})
@Entity("simple_board", { schema: "makeshop" })
export class SimpleBoard {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "b_type", length: 20 })
  bType: string;

  @Column("int", {
    primary: true,
    name: "matching_id",
    unsigned: true,
    default: () => "'0'",
  })
  matchingId: number;

  @PrimaryGeneratedColumn({ type: "int", name: "bid", unsigned: true })
  bid: number;

  @Column("enum", {
    name: "notice",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  notice: "" | "Y" | "N";

  @Column("varchar", { name: "user_id", nullable: true, length: 20 })
  userId: string | null;

  @Column("varchar", { name: "ip", nullable: true, length: 15 })
  ip: string | null;

  @Column("int", { name: "hits", unsigned: true, default: () => "'0'" })
  hits: number;

  @Column("varchar", { name: "hname", nullable: true, length: 20 })
  hname: string | null;

  @Column("tinyint", { name: "score", nullable: true, default: () => "'5'" })
  score: number | null;

  @Column("varchar", { name: "attach1", nullable: true, length: 100 })
  attach1: string | null;

  @Column("varchar", { name: "subject", nullable: true, length: 255 })
  subject: string | null;

  @Column("longtext", { name: "content", nullable: true })
  content: string | null;

  @Column("varchar", { name: "add_url", nullable: true, length: 255 })
  addUrl: string | null;

  @Column("varchar", { name: "add_data", nullable: true, length: 255 })
  addData: string | null;

  @Column("enum", {
    name: "write_path",
    enum: ["", "WEB", "MOBILE"],
    default: () => "'WEB'",
  })
  writePath: "" | "WEB" | "MOBILE";

  @Column("char", { name: "status", length: 1, default: () => "'Y'" })
  status: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("int", { name: "cnt_comment", default: () => "'0'" })
  cntComment: number;

  @Column("int", { name: "cnt_recommend", default: () => "'0'" })
  cntRecommend: number;
}
