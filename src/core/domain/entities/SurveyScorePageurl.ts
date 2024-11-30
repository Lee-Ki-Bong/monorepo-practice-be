import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_survey_sid", ["surveySid"], {})
@Entity("survey_score_pageurl", { schema: "makeshop" })
export class SurveyScorePageurl {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "survey_sid", unsigned: true })
  surveySid: number;

  @Column("int", { name: "survey_score_max", nullable: true })
  surveyScoreMax: number | null;

  @Column("int", { name: "survey_score_min", nullable: true })
  surveyScoreMin: number | null;

  @Column("varchar", { name: "survey_score_url", nullable: true, length: 100 })
  surveyScoreUrl: string | null;

  @Column("enum", {
    name: "survey_link_type",
    enum: ["", "link_direct", "link_wizard"],
    default: () => "'link_direct'",
  })
  surveyLinkType: "" | "link_direct" | "link_wizard";
}
