import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_ph_uid", ["phUid"], {})
@Entity("privacy_history", { schema: "makeshop" })
export class PrivacyHistory {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "ph_uid", unsigned: true })
  phUid: number;

  @Column("varchar", { name: "subid", length: 20 })
  subid: string;

  @Column("enum", {
    name: "ph_type",
    enum: ["", "C", "P"],
    default: () => "'C'",
  })
  phType: "" | "C" | "P";

  @Column("longtext", { name: "ph_content" })
  phContent: string;

  @Column("enum", {
    name: "ph_display",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  phDisplay: "" | "N" | "Y";

  @Column("datetime", {
    name: "date_insert",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateInsert: Date;

  @Column("date", { name: "date_apply", default: () => "'0000-00-00'" })
  dateApply: string;

  @Column("date", { name: "date_end", default: () => "'0000-00-00'" })
  dateEnd: string;
}
