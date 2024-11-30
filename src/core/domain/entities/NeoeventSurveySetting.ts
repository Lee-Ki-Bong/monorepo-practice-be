import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_es_set_id", ["esSetId"], {})
@Entity("neoevent_survey_setting", { schema: "makeshop" })
export class NeoeventSurveySetting {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", {
    primary: true,
    name: "ev_no",
    length: 20,
    default: () => "'0'",
  })
  evNo: string;

  @Column("int", {
    primary: true,
    name: "es_design_id",
    unsigned: true,
    default: () => "'0'",
  })
  esDesignId: number;

  @PrimaryGeneratedColumn({ type: "int", name: "es_set_id", unsigned: true })
  esSetId: number;

  @Column("varchar", { name: "es_no", length: 10 })
  esNo: string;

  @Column("mediumtext", { name: "es_value" })
  esValue: string;

  @Column("varchar", { name: "es_skip_no", length: 10 })
  esSkipNo: string;

  @Column("varchar", { name: "es_type", length: 20, default: () => "'skip'" })
  esType: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
