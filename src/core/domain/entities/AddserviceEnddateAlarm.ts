import { Column, Entity } from "typeorm";

@Entity("addservice_enddate_alarm", { schema: "makeshop" })
export class AddserviceEnddateAlarm {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "makeshop_alarm_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  makeshopAlarmUse: "" | "Y" | "N";

  @Column("varchar", { name: "makeshop_email", nullable: true, length: 40 })
  makeshopEmail: string | null;

  @Column("varchar", { name: "makeshop_tel", nullable: true, length: 20 })
  makeshopTel: string | null;

  @Column("enum", {
    name: "imagebank_alarm_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  imagebankAlarmUse: "" | "Y" | "N";

  @Column("varchar", { name: "imagebank_email", nullable: true, length: 40 })
  imagebankEmail: string | null;

  @Column("varchar", { name: "imagebank_tel", nullable: true, length: 20 })
  imagebankTel: string | null;

  @Column("enum", {
    name: "beecon_alarm_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  beeconAlarmUse: "" | "Y" | "N";

  @Column("varchar", { name: "beecon_email", nullable: true, length: 40 })
  beeconEmail: string | null;

  @Column("varchar", { name: "beecon_tel", nullable: true, length: 20 })
  beeconTel: string | null;

  @Column("enum", {
    name: "beebank_alarm_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  beebankAlarmUse: "" | "Y" | "N";

  @Column("varchar", { name: "beebank_email", nullable: true, length: 40 })
  beebankEmail: string | null;

  @Column("varchar", { name: "beebank_tel", nullable: true, length: 20 })
  beebankTel: string | null;

  @Column("enum", {
    name: "ars_alarm_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  arsAlarmUse: "" | "Y" | "N";

  @Column("varchar", { name: "ars_email", nullable: true, length: 40 })
  arsEmail: string | null;

  @Column("varchar", { name: "ars_tel", nullable: true, length: 20 })
  arsTel: string | null;

  @Column("enum", {
    name: "imagebank_traffic_alarm_use",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  imagebankTrafficAlarmUse: "" | "Y" | "N" | null;

  @Column("varchar", { name: "imagebank_traffic_email", length: 40 })
  imagebankTrafficEmail: string;

  @Column("varchar", { name: "imagebank_traffic_tel", length: 20 })
  imagebankTrafficTel: string;

  @Column("enum", {
    name: "imagebank_traffic_sms_send",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  imagebankTrafficSmsSend: "" | "Y" | "N";

  @Column("enum", {
    name: "power_review_alarm_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  powerReviewAlarmUse: "" | "Y" | "N";

  @Column("varchar", { name: "power_review_email", nullable: true, length: 40 })
  powerReviewEmail: string | null;

  @Column("varchar", { name: "power_review_tel", nullable: true, length: 20 })
  powerReviewTel: string | null;

  @Column("enum", {
    name: "powerapp_alarm_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  powerappAlarmUse: "" | "Y" | "N";

  @Column("varchar", { name: "powerapp_email", nullable: true, length: 40 })
  powerappEmail: string | null;

  @Column("varchar", { name: "powerapp_tel", nullable: true, length: 20 })
  powerappTel: string | null;

  @Column("enum", {
    name: "board_alarm_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  boardAlarmUse: "" | "Y" | "N";

  @Column("varchar", { name: "board_email", nullable: true, length: 40 })
  boardEmail: string | null;

  @Column("varchar", { name: "board_tel", nullable: true, length: 20 })
  boardTel: string | null;

  @Column("enum", {
    name: "powerpack_alarm_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  powerpackAlarmUse: "" | "Y" | "N";

  @Column("varchar", { name: "powerpack_email", nullable: true, length: 40 })
  powerpackEmail: string | null;

  @Column("varchar", { name: "powerpack_tel", nullable: true, length: 20 })
  powerpackTel: string | null;

  @Column("enum", {
    name: "analyans_alarm_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  analyansAlarmUse: "" | "Y" | "N";

  @Column("varchar", { name: "analyans_email", nullable: true, length: 40 })
  analyansEmail: string | null;

  @Column("varchar", { name: "analyans_tel", nullable: true, length: 20 })
  analyansTel: string | null;

  @Column("enum", {
    name: "clickmap_alarm_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  clickmapAlarmUse: "" | "Y" | "N";

  @Column("varchar", { name: "clickmap_email", nullable: true, length: 40 })
  clickmapEmail: string | null;

  @Column("varchar", { name: "clickmap_tel", nullable: true, length: 20 })
  clickmapTel: string | null;
}
