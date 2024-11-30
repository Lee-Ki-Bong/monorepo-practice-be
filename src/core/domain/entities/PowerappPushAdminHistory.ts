import { Column, Entity } from "typeorm";

@Entity("powerapp_push_admin_history", { schema: "makeshop" })
export class PowerappPushAdminHistory {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("varchar", { name: "title", nullable: true, length: 255 })
  title: string | null;

  @Column("mediumtext", { name: "message", nullable: true })
  message: string | null;

  @Column("char", { name: "send_type", nullable: true, length: 2 })
  sendType: string | null;

  @Column("smallint", {
    name: "send_uid",
    unsigned: true,
    default: () => "'1'",
  })
  sendUid: number;

  @Column("enum", {
    name: "send_form_type",
    enum: ["", "BASIC", "IMAGE_TYPE1"],
    default: () => "'BASIC'",
  })
  sendFormType: "" | "BASIC" | "IMAGE_TYPE1";

  @Column("char", { name: "target_type", nullable: true, length: 2 })
  targetType: string | null;

  @Column("varchar", {
    name: "target_type_content",
    nullable: true,
    length: 255,
  })
  targetTypeContent: string | null;

  @Column("datetime", {
    name: "start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  startDate: Date;

  @Column("varchar", { name: "image_url", nullable: true, length: 255 })
  imageUrl: string | null;

  @Column("varchar", { name: "link_url", nullable: true, length: 255 })
  linkUrl: string | null;

  @Column("int", { name: "push_count", unsigned: true, default: () => "'0'" })
  pushCount: number;

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

  @Column("enum", {
    name: "is_cancel",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  isCancel: "" | "Y" | "N";

  @Column("enum", {
    name: "version",
    enum: ["", "OLD", "V1"],
    default: () => "'V1'",
  })
  version: "" | "OLD" | "V1";

  @Column("datetime", {
    name: "log_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  logDate: Date;
}
