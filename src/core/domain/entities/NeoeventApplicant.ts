import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("apply_status", ["adminuser", "applyStatus"], {})
@Index("ea_name", ["adminuser", "evNo", "eaName"], {})
@Index("give_status", ["adminuser", "giveStatus"], {})
@Index("idx_auto_ea_uid", ["eaUid"], {})
@Index("order_sender", ["adminuser", "evNo", "orderSender"], {})
@Index("reg_date", ["adminuser", "regDate"], {})
@Index("user_id", ["adminuser", "userId"], {})
@Entity("neoevent_applicant", { schema: "makeshop" })
export class NeoeventApplicant {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("bigint", {
    primary: true,
    name: "ev_no",
    unsigned: true,
    default: () => "'0'",
  })
  evNo: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @PrimaryGeneratedColumn({ type: "int", name: "ea_uid", unsigned: true })
  eaUid: number;

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

  @Column("varchar", { name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", { name: "apply_stock", unsigned: true, default: () => "'1'" })
  applyStock: number;

  @Column("varchar", { name: "order_sender", length: 30 })
  orderSender: string;

  @Column("varchar", { name: "ea_name", length: 20 })
  eaName: string;

  @Column("mediumtext", { name: "ea_privacy", nullable: true })
  eaPrivacy: string | null;

  @Column("mediumtext", { name: "ea_answer", nullable: true })
  eaAnswer: string | null;

  @Column("mediumtext", { name: "ea_etctype", nullable: true })
  eaEtctype: string | null;

  @Column("varchar", { name: "ext_data", nullable: true, length: 20 })
  extData: string | null;

  @Column("datetime", {
    name: "sm_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  smRegDate: Date;
}
