import { Column, Entity } from "typeorm";

@Entity("inpuiry_result", { schema: "makeshop" })
export class InpuiryResult {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", {
    primary: true,
    name: "ev_no",
    length: 20,
    default: () => "'0'",
  })
  evNo: string;

  @Column("varchar", {
    primary: true,
    name: "user_id",
    length: 20,
    default: () => "'0'",
  })
  userId: string;

  @Column("int", {
    primary: true,
    name: "ea_uid",
    unsigned: true,
    default: () => "'0'",
  })
  eaUid: number;

  @Column("mediumtext", { name: "user_data", nullable: true })
  userData: string | null;

  @Column("mediumtext", { name: "organ_age_data", nullable: true })
  organAgeData: string | null;

  @Column("mediumtext", { name: "survey_analysis_data", nullable: true })
  surveyAnalysisData: string | null;

  @Column("mediumtext", { name: "nutri_product_data", nullable: true })
  nutriProductData: string | null;
}
