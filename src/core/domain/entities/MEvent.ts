import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Entity("m_event", { schema: "makeshop" })
export class MEvent {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "subject", length: 100 })
  subject: string;

  @Column("datetime", {
    name: "start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  startDate: Date;

  @Column("datetime", {
    name: "end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  endDate: Date;

  @Column("varchar", { name: "banner_image", length: 5 })
  bannerImage: string;

  @Column("varchar", { name: "thumbnail", length: 5 })
  thumbnail: string;

  @Column("varchar", { name: "event_image", length: 5 })
  eventImage: string;

  @Column("varchar", { name: "event_link", nullable: true, length: 200 })
  eventLink: string | null;

  @Column("longtext", { name: "event_script", nullable: true })
  eventScript: string | null;

  @Column("longtext", { name: "contents", nullable: true })
  contents: string | null;

  @Column("enum", {
    name: "display",
    enum: ["", "YES", "NO"],
    default: () => "'YES'",
  })
  display: "" | "YES" | "NO";

  @Column("enum", {
    name: "banner_display",
    enum: ["", "YES", "NO"],
    default: () => "'YES'",
  })
  bannerDisplay: "" | "YES" | "NO";

  @Column("int", { name: "click_num", unsigned: true, default: () => "'0'" })
  clickNum: number;

  @Column("set", {
    name: "social_scrap_type",
    nullable: true,
    enum: ["CL", "TW", "FB", "M2", "KA", "KS"],
  })
  socialScrapType: ("CL" | "TW" | "FB" | "M2" | "KA" | "KS")[] | null;

  @Column("varchar", { name: "sort_date", length: 14 })
  sortDate: string;

  @Column("datetime", {
    name: "regist_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  registDate: Date;
}
