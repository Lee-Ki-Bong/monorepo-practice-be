import { Column, Entity } from "typeorm";

@Entity("rm_service", { schema: "makeshop" })
export class RmService {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    primary: true,
    name: "service_type",
    enum: ["", "sms", "mail"],
    default: () => "'sms'",
  })
  serviceType: "" | "sms" | "mail";

  @Column("enum", {
    name: "use_type",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useType: "" | "Y" | "N" | null;

  @Column("varchar", { name: "user_target", nullable: true, length: 30 })
  userTarget: string | null;

  @Column("enum", {
    name: "url_type",
    nullable: true,
    enum: ["", "default", "short"],
    default: () => "'default'",
  })
  urlType: "" | "default" | "short" | null;

  @Column("enum", {
    name: "overlap_limit_use",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  overlapLimitUse: "" | "Y" | "N" | null;

  @Column("char", { name: "overlap_limit_date", nullable: true, length: 2 })
  overlapLimitDate: string | null;

  @Column("enum", {
    name: "send_next_use",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  sendNextUse: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "benefit_use",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  benefitUse: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "benefit_type",
    nullable: true,
    enum: ["", "coupon", "reserve", "point"],
  })
  benefitType: "" | "coupon" | "reserve" | "point" | null;

  @Column("varchar", { name: "benefit_value", nullable: true, length: 30 })
  benefitValue: string | null;

  @Column("enum", {
    name: "order_change",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  orderChange: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "nospam",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  nospam: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "add_ad",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  addAd: "" | "Y" | "N" | null;

  @Column("varchar", { name: "rm_email", nullable: true, length: 100 })
  rmEmail: string | null;

  @Column("varchar", { name: "rm_name", nullable: true, length: 100 })
  rmName: string | null;

  @Column("varchar", { name: "subject", nullable: true, length: 100 })
  subject: string | null;

  @Column("mediumtext", { name: "content", nullable: true })
  content: string | null;

  @Column("char", { name: "send_next_hour", nullable: true, length: 2 })
  sendNextHour: string | null;
}
