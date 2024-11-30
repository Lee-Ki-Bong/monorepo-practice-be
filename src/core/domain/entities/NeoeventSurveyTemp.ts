import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_temp_id", ["tempId"], {})
@Entity("neoevent_survey_temp", { schema: "makeshop" })
export class NeoeventSurveyTemp {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", {
    primary: true,
    name: "ev_no",
    length: 20,
    default: () => "'0'",
  })
  evNo: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @PrimaryGeneratedColumn({ type: "int", name: "temp_id", unsigned: true })
  tempId: number;

  @Column("varchar", { name: "es_no", length: 10 })
  esNo: string;

  @Column("mediumtext", { name: "es_answer" })
  esAnswer: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("int", { name: "es_page_no", unsigned: true, default: () => "'0'" })
  esPageNo: number;

  @Column("varchar", { name: "temp_key", length: 20 })
  tempKey: string;
}
