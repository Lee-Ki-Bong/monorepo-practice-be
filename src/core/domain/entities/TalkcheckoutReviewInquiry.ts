import { Column, Entity, Index } from "typeorm";

@Index("idx_tc_comment_id", ["tcCommentId"], {})
@Entity("talkcheckout_review_inquiry", { schema: "makeshop" })
export class TalkcheckoutReviewInquiry {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "tc_review_id", length: 50 })
  tcReviewId: string;

  @Column("int", { name: "uid", unsigned: true, default: () => "'0'" })
  uid: number;

  @Column("varchar", { name: "date", length: 14 })
  date: string;

  @Column("varchar", { name: "tc_comment_id", length: 50 })
  tcCommentId: string;

  @Column("datetime", {
    name: "tc_comment_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  tcCommentDate: Date;

  @Column("varchar", {
    name: "tc_comment_type",
    length: 1,
    default: () => "'C'",
  })
  tcCommentType: string;
}
