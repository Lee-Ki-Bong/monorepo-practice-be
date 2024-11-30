import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("date", ["code", "display"], {})
@Index("disdate", ["date", "display"], {})
@Index("idx_auto_uid", ["uid"], {})
@Entity("tempboard", { schema: "makeshop" })
export class Tempboard {
  @Column("varchar", { primary: true, name: "code", length: 24 })
  code: string;

  @Column("varchar", { name: "num1", nullable: true, length: 7 })
  num1: string | null;

  @Column("varchar", { name: "date", length: 14 })
  date: string;

  @Column("varchar", { name: "date2", nullable: true, length: 14 })
  date2: string | null;

  @Column("enum", { name: "sms", nullable: true, enum: ["", "Y", "N"] })
  sms: "" | "Y" | "N" | null;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "adminuser", nullable: true, length: 12 })
  adminuser: string | null;

  @Column("int", { name: "brand_uid", nullable: true, unsigned: true })
  brandUid: number | null;

  @Column("varchar", { name: "passwd", length: 12 })
  passwd: string;

  @Column("varchar", { name: "ip", nullable: true, length: 15 })
  ip: string | null;

  @Column("varchar", { name: "hname", nullable: true, length: 20 })
  hname: string | null;

  @Column("varchar", { name: "sub_id", nullable: true, length: 12 })
  subId: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 100 })
  email: string | null;

  @Column("varchar", { name: "attach1", nullable: true, length: 100 })
  attach1: string | null;

  @Column("int", { name: "cnt", nullable: true, default: () => "'0'" })
  cnt: number | null;

  @Column("int", { name: "comment", nullable: true, default: () => "'0'" })
  comment: number | null;

  @Column("varchar", { name: "subject", nullable: true, length: 100 })
  subject: string | null;

  @Column("text", { name: "subtitle", nullable: true })
  subtitle: string | null;

  @Column("longtext", { name: "content", nullable: true })
  content: string | null;

  @Column("mediumtext", { name: "addinfo", nullable: true })
  addinfo: string | null;

  @Column("varchar", {
    name: "recommend_brand_uid",
    nullable: true,
    length: 100,
  })
  recommendBrandUid: string | null;

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
    nullable: true,
    enum: ["", "YES", "NO", "NONE"],
    default: () => "'YES'",
  })
  display: "" | "YES" | "NO" | "NONE" | null;

  @Column("enum", {
    name: "notice",
    nullable: true,
    enum: ["", "Y", "N", "A"],
    default: () => "'N'",
  })
  notice: "" | "Y" | "N" | "A" | null;

  @Column("tinyint", { name: "score", nullable: true, default: () => "'5'" })
  score: number | null;

  @Column("varchar", { name: "id", nullable: true, length: 20 })
  id: string | null;

  @Column("enum", {
    name: "use_reply_comment",
    nullable: true,
    enum: ["", "NONE", "ONLY_REPLY", "ONLY_COMMENT", "BOTH"],
    default: () => "'BOTH'",
  })
  useReplyComment: "" | "NONE" | "ONLY_REPLY" | "ONLY_COMMENT" | "BOTH" | null;

  @Column("longtext", { name: "mobile_content", nullable: true })
  mobileContent: string | null;

  @Column("varchar", { name: "mobile_attach1", nullable: true, length: 100 })
  mobileAttach1: string | null;
}
