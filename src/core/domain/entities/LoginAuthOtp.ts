import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_lao_uid", ["laoUid"], {})
@Entity("login_auth_otp", { schema: "makeshop" })
export class LoginAuthOtp {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "sub_id", length: 12 })
  subId: string;

  @Column("varchar", { name: "md_id", length: 12 })
  mdId: string;

  @Column("varchar", { name: "submd_id", length: 12 })
  submdId: string;

  @Column("enum", {
    name: "lao_sub_type",
    enum: ["", "SUB", "MD"],
    default: () => "'SUB'",
  })
  laoSubType: "" | "SUB" | "MD";

  @PrimaryGeneratedColumn({ type: "int", name: "lao_uid", unsigned: true })
  laoUid: number;

  @Column("varchar", { name: "lao_secret_key", length: 255 })
  laoSecretKey: string;

  @Column("enum", {
    name: "lao_confirm",
    enum: ["", "NO", "STANDBY", "CONFIRM"],
    default: () => "'NO'",
  })
  laoConfirm: "" | "NO" | "STANDBY" | "CONFIRM";

  @Column("datetime", { name: "lao_date_insert", nullable: true })
  laoDateInsert: Date | null;
}
