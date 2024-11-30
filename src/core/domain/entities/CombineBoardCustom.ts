import { Column, Entity, Index } from "typeorm";

@Index("brand", ["code", "brandUid", "display"], {})
@Index("code", ["code", "id"], {})
@Index("code_combine_date", ["code", "combineDate"], {})
@Index("codedate", ["code", "date"], {})
@Index("display", ["code", "display", "num1", "num2"], {})
@Index("event_end_date", ["code", "eventEndDate"], {})
@Index("gid", ["code", "gid", "display"], {})
@Index("ordernum", ["code", "ordernum"], {})
@Index("reply_status", ["code", "replyStatus"], {})
@Index("reserve_date", ["code", "reserveDate"], {})
@Index("score", ["code", "display", "score_1"], {})
@Entity("combine_board_custom", { schema: "makeshop" })
export class CombineBoardCustom {
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

  @Column("varchar", { name: "passwd", nullable: true, length: 128 })
  passwd: string | null;

  @Column("varchar", { name: "ip", nullable: true, length: 15 })
  ip: string | null;

  @Column("varchar", { name: "hname", nullable: true, length: 30 })
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
    enum: ["", "YES", "NO"],
    default: () => "'YES'",
  })
  display: "" | "YES" | "NO";

  @Column("varchar", { name: "write_path", length: 10, default: () => "'WEB'" })
  writePath: string;

  @Column("varchar", { name: "score_1", nullable: true, length: 4 })
  score_1: string | null;

  @Column("varchar", { name: "score_2", nullable: true, length: 4 })
  score_2: string | null;

  @Column("varchar", { name: "score_3", nullable: true, length: 4 })
  score_3: string | null;

  @Column("varchar", { name: "score_4", nullable: true, length: 4 })
  score_4: string | null;

  @Column("varchar", { name: "score_5", nullable: true, length: 10 })
  score_5: string | null;

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
    nullable: true,
    enum: ["", "NONE", "PROGRESS", "DONE", "YET"],
    default: () => "'NONE'",
  })
  replyStatus: "" | "NONE" | "PROGRESS" | "DONE" | "YET" | null;

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

  @Column("enum", {
    name: "agree",
    nullable: true,
    enum: ["", "Y", "N", "F", "S"],
    default: () => "'N'",
  })
  agree: "" | "Y" | "N" | "F" | "S" | null;

  @Column("varchar", { name: "agree_selective", nullable: true, length: 50 })
  agreeSelective: string | null;

  @Column("char", {
    name: "power_review",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  powerReview: string | null;

  @Column("datetime", {
    name: "event_start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  eventStartDate: Date;

  @Column("datetime", {
    name: "event_end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  eventEndDate: Date;

  @Column("char", { name: "grade", length: 1 })
  grade: string;

  @Column("int", {
    name: "openapi_company_uid",
    nullable: true,
    unsigned: true,
  })
  openapiCompanyUid: number | null;

  @Column("varchar", { name: "custom_1", nullable: true, length: 255 })
  custom_1: string | null;

  @Column("varchar", { name: "custom_2", nullable: true, length: 255 })
  custom_2: string | null;

  @Column("varchar", { name: "custom_3", nullable: true, length: 255 })
  custom_3: string | null;

  @Column("varchar", { name: "custom_4", nullable: true, length: 255 })
  custom_4: string | null;

  @Column("varchar", { name: "custom_5", nullable: true, length: 255 })
  custom_5: string | null;

  @Column("varchar", { name: "agree_text", nullable: true, length: 255 })
  agreeText: string | null;

  @Column("longtext", { name: "content2", nullable: true })
  content2: string | null;

  @Column("mediumtext", { name: "order_brand_name", nullable: true })
  orderBrandName: string | null;

  @Column("datetime", {
    primary: true,
    name: "combine_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  combineDate: Date;
}
