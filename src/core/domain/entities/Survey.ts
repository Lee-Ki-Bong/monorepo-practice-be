import { Column, Entity } from "typeorm";

@Entity("survey", { schema: "makeshop" })
export class Survey {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "survey_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  surveyUse: "" | "Y" | "N";

  @Column("enum", {
    name: "survey_access",
    enum: ["", "USER", "NONE"],
    default: () => "'NONE'",
  })
  surveyAccess: "" | "USER" | "NONE";

  @Column("tinyint", { name: "survey_score_type", default: () => "'2'" })
  surveyScoreType: number;
}
