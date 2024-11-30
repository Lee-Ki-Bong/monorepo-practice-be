import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_survey_qid", ["surveyQid"], {})
@Entity("survey_question", { schema: "makeshop" })
export class SurveyQuestion {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "survey_qid", unsigned: true })
  surveyQid: number;

  @Column("varchar", { name: "survey_question_text", length: 200 })
  surveyQuestionText: string;
}
