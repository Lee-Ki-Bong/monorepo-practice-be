import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_automnum", ["automnum"], {})
@Entity("del_board", { schema: "makeshop" })
export class DelBoard {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "automnum", unsigned: true })
  automnum: number;

  @Column("varchar", { name: "codenum", length: 100 })
  codenum: string;

  @Column("varchar", { name: "date", length: 14 })
  date: string;

  @Column("int", { name: "brand_uid", nullable: true, unsigned: true })
  brandUid: number | null;

  @Column("varchar", { name: "ip", nullable: true, length: 15 })
  ip: string | null;

  @Column("varchar", { name: "hname", nullable: true, length: 20 })
  hname: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 100 })
  email: string | null;

  @Column("varchar", { name: "attach1", nullable: true, length: 100 })
  attach1: string | null;

  @Column("int", { name: "comment", nullable: true, default: () => "'0'" })
  comment: number | null;

  @Column("varchar", { name: "subject", nullable: true, length: 255 })
  subject: string | null;

  @Column("longtext", { name: "content", nullable: true })
  content: string | null;

  @Column("char", { name: "lock_ok", length: 1, default: () => "'N'" })
  lockOk: string;

  @Column("enum", {
    name: "is_spam",
    enum: ["", "YES", "NO"],
    default: () => "'NO'",
  })
  isSpam: "" | "YES" | "NO";

  @Column("enum", {
    name: "display",
    enum: ["", "YES", "NO"],
    default: () => "'YES'",
  })
  display: "" | "YES" | "NO";

  @Column("varchar", { name: "score", nullable: true, length: 20 })
  score: string | null;

  @Column("varchar", { name: "type", nullable: true, length: 10 })
  type: string | null;

  @Column("datetime", {
    name: "moddate",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  moddate: Date | null;

  @Column("varchar", { name: "id", nullable: true, length: 20 })
  id: string | null;

  @Column("enum", {
    name: "super",
    nullable: true,
    enum: ["", "true", "false"],
    default: () => "'true'",
  })
  super: "" | "true" | "false" | null;

  @Column("varchar", { name: "super_ip", nullable: true, length: 20 })
  superIp: string | null;
}
