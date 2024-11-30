import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("apply_name", ["adminuser", "applyName"], {})
@Index("idx_auto_apply_uid", ["applyUid"], {})
@Index("user_id", ["adminuser", "userId"], {})
@Entity("neoevent_applicant_detail", { schema: "makeshop" })
export class NeoeventApplicantDetail {
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

  @Column("varchar", { primary: true, name: "apply_key", length: 20 })
  applyKey: string;

  @PrimaryGeneratedColumn({ type: "int", name: "apply_uid", unsigned: true })
  applyUid: number;

  @Column("varchar", { name: "apply_name", length: 255 })
  applyName: string;

  @Column("mediumtext", { name: "apply_value", nullable: true })
  applyValue: string | null;
}
