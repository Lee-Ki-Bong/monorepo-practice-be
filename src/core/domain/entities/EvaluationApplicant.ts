import { Column, Entity } from "typeorm";

@Entity("evaluation_applicant", { schema: "makeshop" })
export class EvaluationApplicant {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", {
    primary: true,
    name: "ev_code",
    length: 20,
    default: () => "'BASIC'",
  })
  evCode: string;

  @Column("int", {
    primary: true,
    name: "ev_uid",
    unsigned: true,
    default: () => "'0'",
  })
  evUid: number;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("date", { name: "ap_date", default: () => "'0000-00-00'" })
  apDate: string;

  @Column("date", { name: "se_date", default: () => "'0000-00-00'" })
  seDate: string;

  @Column("char", { name: "ea_status", length: 1, default: () => "'A'" })
  eaStatus: string;
}
