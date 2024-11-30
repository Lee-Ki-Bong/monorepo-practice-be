import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_la_uid", ["laUid"], {})
@Entity("login_auth_method", { schema: "makeshop" })
export class LoginAuthMethod {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "la_uid", unsigned: true })
  laUid: number;

  @Column("enum", {
    name: "la_method",
    enum: ["", "NO", "SMS", "OTP"],
    default: () => "'NO'",
  })
  laMethod: "" | "NO" | "SMS" | "OTP";

  @Column("enum", {
    name: "la_target",
    enum: ["", "NONE", "SUB", "ALL"],
    default: () => "'NONE'",
  })
  laTarget: "" | "NONE" | "SUB" | "ALL";

  @Column("enum", {
    name: "la_method_md",
    enum: ["", "NO", "OTP"],
    default: () => "'NO'",
  })
  laMethodMd: "" | "NO" | "OTP";

  @Column("enum", {
    name: "la_target_md",
    enum: ["", "NONE", "SUB", "ALL"],
    default: () => "'NONE'",
  })
  laTargetMd: "" | "NONE" | "SUB" | "ALL";

  @Column("enum", {
    name: "la_sms_inside_ip_set",
    enum: ["", "NO", "USE", "USE_IP"],
    default: () => "'NO'",
  })
  laSmsInsideIpSet: "" | "NO" | "USE" | "USE_IP";

  @Column("varchar", { name: "la_sms_inside_ip", nullable: true, length: 15 })
  laSmsInsideIp: string | null;

  @Column("enum", {
    name: "la_otp_inside_ip_set",
    enum: ["", "NO", "USE", "USE_IP"],
    default: () => "'NO'",
  })
  laOtpInsideIpSet: "" | "NO" | "USE" | "USE_IP";

  @Column("varchar", { name: "la_otp_inside_ip", nullable: true, length: 15 })
  laOtpInsideIp: string | null;

  @Column("datetime", { name: "la_date_insert", nullable: true })
  laDateInsert: Date | null;

  @Column("datetime", { name: "la_date_update", nullable: true })
  laDateUpdate: Date | null;
}
