import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_temp_id", ["tempId"], {})
@Entity("neoevent_applicant_temp", { schema: "makeshop" })
export class NeoeventApplicantTemp {
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

  @Column("char", { name: "apply_status", length: 1, default: () => "'A'" })
  applyStatus: string;

  @Column("char", { name: "give_status", length: 1, default: () => "'N'" })
  giveStatus: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("date", { name: "release_date", default: () => "'0000-00-00'" })
  releaseDate: string;

  @Column("date", { name: "give_date", default: () => "'0000-00-00'" })
  giveDate: string;

  @Column("mediumtext", { name: "ea_etctype", nullable: true })
  eaEtctype: string | null;

  @Column("varchar", { name: "temp_key", length: 20 })
  tempKey: string;

  @Column("varchar", { name: "ext_data", nullable: true, length: 20 })
  extData: string | null;
}
