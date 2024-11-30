import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_cid", ["cid"], {})
@Index("reg_date", ["adminuser", "bType", "matchingId", "regDate"], {})
@Index("user", ["adminuser", "bType", "matchingId", "userId"], {})
@Entity("simple_board_comment", { schema: "makeshop" })
export class SimpleBoardComment {
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

  @Column("int", {
    primary: true,
    name: "bid",
    unsigned: true,
    default: () => "'0'",
  })
  bid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "cid", unsigned: true })
  cid: number;

  @Column("varchar", { name: "user_id", nullable: true, length: 20 })
  userId: string | null;

  @Column("varchar", { name: "ip", nullable: true, length: 15 })
  ip: string | null;

  @Column("varchar", { name: "hname", nullable: true, length: 20 })
  hname: string | null;

  @Column("varchar", { name: "subject", nullable: true, length: 255 })
  subject: string | null;

  @Column("longtext", { name: "content", nullable: true })
  content: string | null;

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
}
