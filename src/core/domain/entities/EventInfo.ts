import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_info_uid", ["infoUid"], {})
@Entity("event_info", { schema: "makeshop" })
export class EventInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "info_uid", unsigned: true })
  infoUid: number;

  @Column("int", { name: "event_uid", unsigned: true, default: () => "'0'" })
  eventUid: number;

  @Column("varchar", { name: "event_tmp_key", length: 32 })
  eventTmpKey: string;

  @Column("enum", {
    name: "event_type",
    enum: ["", "click", "complate"],
    default: () => "'click'",
  })
  eventType: "" | "click" | "complate";

  @Column("enum", {
    name: "click_icon_set",
    enum: ["", "B", "M"],
    default: () => "'B'",
  })
  clickIconSet: "" | "B" | "M";

  @Column("enum", {
    name: "click_m_icon_set",
    enum: ["", "B", "M"],
    default: () => "'B'",
  })
  clickMIconSet: "" | "B" | "M";

  @Column("enum", {
    name: "click_location_set",
    enum: ["", "R", "F"],
    default: () => "'R'",
  })
  clickLocationSet: "" | "R" | "F";

  @Column("enum", {
    name: "click_page_set",
    enum: ["", "R", "S"],
    default: () => "'R'",
  })
  clickPageSet: "" | "R" | "S";

  @Column("enum", {
    name: "complate_icon_set",
    enum: ["", "B", "M"],
    default: () => "'B'",
  })
  complateIconSet: "" | "B" | "M";

  @Column("enum", {
    name: "complate_location_set",
    enum: ["", "R", "F"],
    default: () => "'R'",
  })
  complateLocationSet: "" | "R" | "F";

  @Column("enum", {
    name: "complate_page_set",
    nullable: true,
    enum: ["", "R", "S", "I"],
    default: () => "'R'",
  })
  complatePageSet: "" | "R" | "S" | "I" | null;

  @Column("int", { name: "target_cnt", unsigned: true, default: () => "'0'" })
  targetCnt: number;

  @Column("enum", {
    name: "progress_alam",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  progressAlam: "" | "Y" | "N";

  @Column("enum", {
    name: "benefits_set",
    enum: ["", "M", "A"],
    default: () => "'M'",
  })
  benefitsSet: "" | "M" | "A";

  @Column("enum", {
    name: "benefits_info",
    enum: ["", "C", "R", "P"],
    default: () => "'C'",
  })
  benefitsInfo: "" | "C" | "R" | "P";
}
