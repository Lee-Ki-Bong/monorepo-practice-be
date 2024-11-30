import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Entity("preregist_number_auth", { schema: "makeshop" })
export class PreregistNumberAuth {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "sub_id", length: 12 })
  subId: string;

  @Column("char", { name: "position", length: 1, default: () => "'D'" })
  position: string;

  @Column("varchar", { name: "hphone", length: 20 })
  hphone: string;

  @Column("datetime", {
    name: "auth_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  authDate: Date;

  @Column("enum", {
    name: "confirm_status",
    enum: ["", "NO", "STANDBY", "CONFIRM", "HOLD"],
    default: () => "'NO'",
  })
  confirmStatus: "" | "NO" | "STANDBY" | "CONFIRM" | "HOLD";

  @Column("varchar", { name: "certi_key", nullable: true, length: 8 })
  certiKey: string | null;

  @Column("varchar", {
    name: "business_license_img",
    nullable: true,
    length: 255,
  })
  businessLicenseImg: string | null;

  @Column("datetime", {
    name: "confirm_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  confirmDate: Date;

  @Column("varchar", { name: "reason", length: 50 })
  reason: string;

  @Column("varchar", { name: "api_message", length: 255 })
  apiMessage: string;

  @Column("varchar", { name: "regist_id", length: 40 })
  registId: string;

  @Column("varchar", { name: "etc_license_img", length: 255 })
  etcLicenseImg: string;
}
