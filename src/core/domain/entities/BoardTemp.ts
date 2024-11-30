import { Column, Entity, Index } from "typeorm";

@Index("brand", ["code", "brandUid", "display"], {})
@Index("code", ["code", "id"], {})
@Index("codedate", ["code", "date"], {})
@Index("display", ["code", "display", "num1", "num2"], {})
@Index("gid", ["code", "gid", "display"], {})
@Index("reply_status", ["code", "replyStatus"], {})
@Index("score", ["code", "display", "score_1"], {})
@Entity("board_temp", { schema: "makeshop" })
export class BoardTemp {
  @Column("varchar", { primary: true, name: "code", length: 24 })
  code: string;

  @Column("varchar", { primary: true, name: "num1", length: 7 })
  num1: string;

  @Column("varchar", { primary: true, name: "num2", length: 5 })
  num2: string;

  @Column("varchar", { name: "date", length: 14 })
  date: string;

  @Column("varchar", { name: "gid", length: 30 })
  gid: string;

  @Column("int", { name: "brand_uid", nullable: true, unsigned: true })
  brandUid: number | null;

  @Column("varchar", { name: "ordernum", length: 100 })
  ordernum: string;

  @Column("varchar", { name: "qna_ordernum", length: 100 })
  qnaOrdernum: string;

  @Column("varchar", { name: "passwd", nullable: true, length: 128 })
  passwd: string | null;

  @Column("varchar", { name: "ip", nullable: true, length: 15 })
  ip: string | null;

  @Column("varchar", { name: "hname", nullable: true, length: 20 })
  hname: string | null;

  @Column("varchar", { name: "sub_id", nullable: true, length: 20 })
  subId: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 100 })
  email: string | null;

  @Column("varchar", { name: "attach1", nullable: true, length: 100 })
  attach1: string | null;

  @Column("int", { name: "cnt", nullable: true, default: () => "'0'" })
  cnt: number | null;

  @Column("int", { name: "comment", nullable: true, default: () => "'0'" })
  comment: number | null;

  @Column("varchar", { name: "subject", nullable: true, length: 255 })
  subject: string | null;

  @Column("longtext", { name: "content", nullable: true })
  content: string | null;

  @Column("mediumtext", { name: "addinfo", nullable: true })
  addinfo: string | null;

  @Column("varchar", { name: "etctype", nullable: true, length: 255 })
  etctype: string | null;

  @Column("mediumtext", { name: "recommend_brand_uid", nullable: true })
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
    enum: ["", "YES", "NO"],
    default: () => "'YES'",
  })
  display: "" | "YES" | "NO";

  @Column("enum", {
    name: "write_path",
    nullable: true,
    enum: ["", "WEB", "MOBILE", "NAVER_PAY"],
    default: () => "'WEB'",
  })
  writePath: "" | "WEB" | "MOBILE" | "NAVER_PAY" | null;

  @Column("tinyint", { name: "score", nullable: true, default: () => "'5'" })
  score: number | null;

  @Column("tinyint", { name: "score_1", nullable: true, default: () => "'5'" })
  score_1: number | null;

  @Column("tinyint", { name: "score_2", nullable: true, default: () => "'5'" })
  score_2: number | null;

  @Column("tinyint", { name: "score_3", nullable: true, default: () => "'5'" })
  score_3: number | null;

  @Column("tinyint", { name: "score_4", nullable: true, default: () => "'5'" })
  score_4: number | null;

  @Column("tinyint", { name: "score_5", nullable: true, default: () => "'5'" })
  score_5: number | null;

  @Column("varchar", { name: "id", nullable: true, length: 20 })
  id: string | null;

  @Column("char", {
    name: "reserve_check",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  reserveCheck: string | null;

  @Column("datetime", {
    name: "reserve_date",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  reserveDate: Date | null;

  @Column("datetime", {
    name: "point_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pointDate: Date;

  @Column("enum", {
    name: "reply_status",
    enum: ["", "NONE", "PROGRESS", "DONE"],
    default: () => "'NONE'",
  })
  replyStatus: "" | "NONE" | "PROGRESS" | "DONE";

  @Column("varchar", { name: "reply_id", nullable: true, length: 20 })
  replyId: string | null;

  @Column("mediumint", {
    name: "reply_cnt",
    unsigned: true,
    default: () => "'0'",
  })
  replyCnt: number;

  @Column("int", {
    name: "recommend_cnt",
    unsigned: true,
    default: () => "'0'",
  })
  recommendCnt: number;

  @Column("enum", {
    name: "use_reply_comment",
    nullable: true,
    enum: ["", "NONE", "ONLY_REPLY", "ONLY_COMMENT", "BOTH"],
    default: () => "'BOTH'",
  })
  useReplyComment: "" | "NONE" | "ONLY_REPLY" | "ONLY_COMMENT" | "BOTH" | null;

  @Column("enum", { name: "agree", enum: ["", "Y", "N"], default: () => "'N'" })
  agree: "" | "Y" | "N";

  @Column("char", { name: "agree_selective", length: 2, default: () => "'--'" })
  agreeSelective: string;

  @Column("char", { name: "power_review", length: 1 })
  powerReview: string;

  @Column("char", { name: "grade", length: 1 })
  grade: string;
}
