import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("confirm_id", ["adminuser", "evCode", "evUid", "euIdx", "confirmId"], {})
@Index(
  "eu_amount",
  ["adminuser", "evCode", "evUid", "userId", "euAmount", "isCancel"],
  {}
)
@Index(
  "eu_password",
  ["adminuser", "evCode", "euName", "euPhone", "euPassword"],
  {}
)
@Index("idx_auto_eu_idx", ["euIdx"], {})
@Entity("evaluation_user", { schema: "makeshop" })
export class EvaluationUser {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ev_code", length: 20 })
  evCode: string;

  @Column("int", {
    primary: true,
    name: "ev_uid",
    unsigned: true,
    default: () => "'0'",
  })
  evUid: number;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @PrimaryGeneratedColumn({ type: "int", name: "eu_idx", unsigned: true })
  euIdx: number;

  @Column("date", { name: "se_date", default: () => "'0000-00-00'" })
  seDate: string;

  @Column("char", { name: "eu_status", length: 1, default: () => "'A'" })
  euStatus: string;

  @Column("char", { name: "eu_review_status", length: 1, default: () => "'N'" })
  euReviewStatus: string;

  @Column("varchar", { name: "eu_name", length: 100 })
  euName: string;

  @Column("varchar", { name: "eu_phone", length: 20 })
  euPhone: string;

  @Column("varchar", { name: "eu_password", length: 128 })
  euPassword: string;

  @Column("mediumtext", { name: "eu_enter_form" })
  euEnterForm: string;

  @Column("mediumint", {
    name: "eu_amount",
    unsigned: true,
    default: () => "'1'",
  })
  euAmount: number;

  @Column("enum", {
    name: "is_cancel",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  isCancel: "" | "Y" | "N";

  @Column("varchar", { name: "confirm_id", length: 10 })
  confirmId: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
