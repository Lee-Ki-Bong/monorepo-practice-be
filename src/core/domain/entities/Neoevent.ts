import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("apply_date", ["adminuser", "applyStartDate", "applyEndDate"], {})
@Index("apply_type", ["adminuser", "applyType"], {})
@Index("display_type", ["adminuser", "displayType", "displayDevice"], {})
@Index("ev_code", ["adminuser", "evCode"], {})
@Index("ev_status", ["adminuser", "evStatus"], {})
@Index("give_type", ["adminuser", "giveType"], {})
@Index("idx_auto_ev_no", ["evNo"], {})
@Index("view_device", ["adminuser", "viewDevice"], {})
@Entity("neoevent", { schema: "makeshop" })
export class Neoevent {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "bigint", name: "ev_no", unsigned: true })
  evNo: string;

  @Column("varchar", { name: "ev_code", length: 20 })
  evCode: string;

  @Column("varchar", { name: "sub_code", length: 20 })
  subCode: string;

  @Column("varchar", { name: "ev_title", length: 255 })
  evTitle: string;

  @Column("varchar", { name: "sub_title", length: 255 })
  subTitle: string;

  @Column("char", { name: "ev_status", length: 1, default: () => "'S'" })
  evStatus: string;

  @Column("varchar", {
    name: "apply_type",
    length: 10,
    default: () => "'NONE'",
  })
  applyType: string;

  @Column("datetime", {
    name: "apply_start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  applyStartDate: Date;

  @Column("datetime", {
    name: "apply_end_date",
    default: () => "'9999-12-31 23:59:59'",
  })
  applyEndDate: Date;

  @Column("varchar", {
    name: "target_type",
    length: 10,
    default: () => "'NONE'",
  })
  targetType: string;

  @Column("char", { name: "release_type", length: 1, default: () => "'N'" })
  releaseType: string;

  @Column("char", { name: "release_display", length: 1, default: () => "'D'" })
  releaseDisplay: string;

  @Column("datetime", {
    name: "release_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  releaseDate: Date;

  @Column("varchar", { name: "release_text", length: 255 })
  releaseText: string;

  @Column("varchar", { name: "give_type", length: 10, default: () => "'NONE'" })
  giveType: string;

  @Column("char", { name: "cancel_type", length: 1, default: () => "'N'" })
  cancelType: string;

  @Column("char", { name: "display_type", length: 1, default: () => "'N'" })
  displayType: string;

  @Column("set", {
    name: "display_device",
    enum: ["PC", "MOBILE", "APP"],
    default: () => ["PC", "MOBILE", "APP"],
  })
  displayDevice: ("PC" | "MOBILE" | "APP")[];

  @Column("set", {
    name: "view_device",
    enum: ["PC", "MOBILE", "APP"],
    default: () => ["PC", "MOBILE", "APP"],
  })
  viewDevice: ("PC" | "MOBILE" | "APP")[];

  @Column("varchar", { name: "ev_sort_date", length: 14 })
  evSortDate: string;

  @Column("int", { name: "apply_limit", unsigned: true, default: () => "'0'" })
  applyLimit: number;

  @Column("int", { name: "part_limit", unsigned: true, default: () => "'0'" })
  partLimit: number;

  @Column("decimal", {
    name: "apply_count",
    unsigned: true,
    precision: 12,
    scale: 0,
    default: () => "'0'",
  })
  applyCount: string;

  @Column("decimal", {
    name: "apply_stock",
    unsigned: true,
    precision: 12,
    scale: 0,
    default: () => "'0'",
  })
  applyStock: string;

  @Column("int", { name: "view_count", unsigned: true, default: () => "'0'" })
  viewCount: number;

  @Column("varchar", { name: "pc_list_image", length: 255 })
  pcListImage: string;

  @Column("varchar", { name: "mobile_list_image", length: 255 })
  mobileListImage: string;

  @Column("mediumtext", { name: "pc_contents", nullable: true })
  pcContents: string | null;

  @Column("mediumtext", { name: "mobile_contents", nullable: true })
  mobileContents: string | null;

  @Column("mediumtext", { name: "detail_contents", nullable: true })
  detailContents: string | null;

  @Column("mediumtext", { name: "apply_form", nullable: true })
  applyForm: string | null;

  @Column("mediumtext", { name: "add_script", nullable: true })
  addScript: string | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;

  @Column("mediumint", {
    name: "privacy_expire_term",
    unsigned: true,
    default: () => "'30'",
  })
  privacyExpireTerm: number;

  @Column("enum", {
    name: "privacy_expire",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  privacyExpire: "" | "Y" | "N";

  @Column("varchar", { name: "reg_admin_id", length: 12 })
  regAdminId: string;

  @Column("varchar", { name: "event_sns_image", length: 255 })
  eventSnsImage: string;

  @Column("varchar", {
    name: "apply_count_type",
    length: 10,
    default: () => "'N'",
  })
  applyCountType: string;

  @Column("int", {
    name: "apply_count_limit",
    unsigned: true,
    default: () => "'0'",
  })
  applyCountLimit: number;

  @Column("varchar", { name: "brandname", length: 255 })
  brandname: string;

  @Column("int", { name: "daily_limit", unsigned: true, default: () => "'0'" })
  dailyLimit: number;

  @Column("varchar", {
    name: "link_window_type",
    length: 10,
    default: () => "'NEW'",
  })
  linkWindowType: string;

  @Column("varchar", { name: "link_window_url", length: 255 })
  linkWindowUrl: string;
}
