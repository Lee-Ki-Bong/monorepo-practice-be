import { Column, Entity } from "typeorm";

@Entity("yk_special_survey", { schema: "makeshop" })
export class YkSpecialSurvey {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("varchar", { name: "phone", length: 20 })
  phone: string;

  @Column("varchar", { name: "p_line", length: 20 })
  pLine: string;

  @Column("varchar", { name: "p_date", length: 20 })
  pDate: string;

  @Column("varchar", { name: "m_number", length: 20 })
  mNumber: string;

  @Column("varchar", { name: "b_code", length: 20 })
  bCode: string;

  @Column("varchar", { name: "q1", length: 10 })
  q1: string;

  @Column("varchar", { name: "q2", length: 10 })
  q2: string;

  @Column("mediumtext", { name: "q2_etc" })
  q2Etc: string;

  @Column("varchar", { name: "q3", length: 10 })
  q3: string;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;
}
