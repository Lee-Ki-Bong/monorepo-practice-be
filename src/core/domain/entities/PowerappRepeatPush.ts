import { Column, Entity } from "typeorm";

@Entity("powerapp_repeat_push", { schema: "makeshop" })
export class PowerappRepeatPush {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("smallint", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'1'",
  })
  uid: number;

  @Column("enum", {
    name: "send_form_type",
    enum: ["", "BASIC", "IMAGE_TYPE1"],
    default: () => "'BASIC'",
  })
  sendFormType: "" | "BASIC" | "IMAGE_TYPE1";

  @Column("set", {
    name: "push_day",
    nullable: true,
    enum: ["0", "1", "2", "3", "4", "5", "6"],
  })
  pushDay: ("0" | "1" | "2" | "3" | "4" | "5" | "6")[] | null;

  @Column("varchar", { name: "push_month", nullable: true, length: 100 })
  pushMonth: string | null;

  @Column("varchar", { name: "push_time", nullable: true, length: 4 })
  pushTime: string | null;

  @Column("varchar", { name: "title", nullable: true, length: 255 })
  title: string | null;

  @Column("mediumtext", { name: "message", nullable: true })
  message: string | null;

  @Column("varchar", { name: "target_type", nullable: true, length: 20 })
  targetType: string | null;

  @Column("mediumtext", { name: "target_type_detail", nullable: true })
  targetTypeDetail: string | null;

  @Column("varchar", { name: "image_url", nullable: true, length: 255 })
  imageUrl: string | null;

  @Column("varchar", { name: "link_url", nullable: true, length: 255 })
  linkUrl: string | null;

  @Column("enum", {
    name: "latest_push",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  latestPush: "" | "Y" | "N";

  @Column("mediumint", {
    name: "latest_push_day",
    unsigned: true,
    default: () => "'0'",
  })
  latestPushDay: number;

  @Column("mediumint", {
    name: "benefit_day",
    unsigned: true,
    default: () => "'0'",
  })
  benefitDay: number;

  @Column("enum", {
    name: "benefit_type",
    enum: ["", "NO", "COUPON", "CASH", "POINT"],
    default: () => "'NO'",
  })
  benefitType: "" | "NO" | "COUPON" | "CASH" | "POINT";

  @Column("varchar", { name: "benefit", nullable: true, length: 11 })
  benefit: string | null;

  @Column("enum", {
    primary: true,
    name: "repeat_push_type",
    enum: ["", "WEEK", "MONTH", "OFFLINE_PUSH"],
    default: () => "'WEEK'",
  })
  repeatPushType: "" | "WEEK" | "MONTH" | "OFFLINE_PUSH";

  @Column("enum", {
    name: "repeat_state",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  repeatState: "" | "Y" | "N";

  @Column("int", { name: "push_info_1", unsigned: true, default: () => "'0'" })
  pushInfo_1: number;

  @Column("datetime", {
    name: "update_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  updateDate: Date;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
