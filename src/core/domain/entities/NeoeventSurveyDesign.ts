import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_es_design_id", ["esDesignId"], {})
@Entity("neoevent_survey_design", { schema: "makeshop" })
export class NeoeventSurveyDesign {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", {
    primary: true,
    name: "ev_no",
    length: 20,
    default: () => "'0'",
  })
  evNo: string;

  @PrimaryGeneratedColumn({ type: "int", name: "es_design_id", unsigned: true })
  esDesignId: number;

  @Column("enum", {
    name: "es_design_type",
    enum: ["", "Q", "I", "O"],
    default: () => "'Q'",
  })
  esDesignType: "" | "Q" | "I" | "O";

  @Column("mediumtext", { name: "es_design_pc" })
  esDesignPc: string;

  @Column("mediumtext", { name: "es_design_mobile" })
  esDesignMobile: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("int", { name: "es_page_no", unsigned: true, default: () => "'0'" })
  esPageNo: number;
}
