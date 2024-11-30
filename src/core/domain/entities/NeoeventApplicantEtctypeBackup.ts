import { Column, Entity } from "typeorm";

@Entity("neoevent_applicant_etctype_backup", { schema: "makeshop" })
export class NeoeventApplicantEtctypeBackup {
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

  @Column("int", { primary: true, name: "ea_uid", default: () => "'0'" })
  eaUid: number;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("mediumtext", { name: "ea_etctype", nullable: true })
  eaEtctype: string | null;
}
