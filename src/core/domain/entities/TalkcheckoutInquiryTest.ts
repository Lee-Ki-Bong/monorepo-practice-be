import { Column, Entity, Index } from "typeorm";

@Index("idx_tc_question_id", ["tcQuestionId"], {})
@Index("idx_tc_review_id", ["tcReviewId"], {})
@Entity("talkcheckout_inquiry_test", { schema: "makeshop" })
export class TalkcheckoutInquiryTest {
  @Column("varchar", { primary: true, name: "board_code", length: 24 })
  boardCode: string;

  @Column("varchar", { primary: true, name: "board_num1", length: 7 })
  boardNum1: string;

  @Column("varchar", { primary: true, name: "board_num2", length: 7 })
  boardNum2: string;

  @Column("varchar", { name: "tc_review_id", length: 50 })
  tcReviewId: string;

  @Column("varchar", { name: "tc_question_id", length: 50 })
  tcQuestionId: string;

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
