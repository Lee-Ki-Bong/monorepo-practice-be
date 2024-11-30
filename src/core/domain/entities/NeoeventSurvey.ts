import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_es_uid", ["esUid"], {})
@Entity("neoevent_survey", { schema: "makeshop" })
export class NeoeventSurvey {
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

  @Column("int", {
    primary: true,
    name: "ea_uid",
    unsigned: true,
    default: () => "'0'",
  })
  eaUid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "es_uid", unsigned: true })
  esUid: number;

  @Column("varchar", { name: "es_no", length: 10 })
  esNo: string;

  @Column("mediumtext", { name: "es_answer" })
  esAnswer: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
