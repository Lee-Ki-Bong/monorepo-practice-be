import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_survey_aid", ["surveyAid"], {})
@Entity("survey_answer", { schema: "makeshop" })
export class SurveyAnswer {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "survey_qid",
    unsigned: true,
    default: () => "'0'",
  })
  surveyQid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "survey_aid", unsigned: true })
  surveyAid: number;

  @Column("varchar", { name: "survey_answer_text", length: 200 })
  surveyAnswerText: string;

  @Column("int", {
    name: "survey_answer_score",
    unsigned: true,
    default: () => "'0'",
  })
  surveyAnswerScore: number;
}
