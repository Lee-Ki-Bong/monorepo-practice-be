import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser", ["adminuser", "dateLog"], {})
@Index("dgnset_id", ["adminuser", "dgnsetId"], {})
@Index("idx_auto_log_id", ["logId"], {})
@Entity("neodesign_logs", { schema: "makeshop" })
export class NeodesignLogs {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "log_id", unsigned: true })
  logId: number;

  @Column("int", { name: "dgnset_id", unsigned: true, default: () => "'0'" })
  dgnsetId: number;

  @Column("varchar", { name: "dgnset_title", length: 50 })
  dgnsetTitle: string;

  @Column("enum", {
    name: "dgnset_type",
    enum: ["PC", "MOBILE", "POWERPACK", "RW"],
    default: () => "'PC'",
  })
  dgnsetType: "PC" | "MOBILE" | "POWERPACK" | "RW";

  @Column("varchar", { name: "page_type", length: 20 })
  pageType: string;

  @Column("int", { name: "design_id", unsigned: true, default: () => "'0'" })
  designId: number;

  @Column("varchar", { name: "design_title", length: 50 })
  designTitle: string;

  @Column("varchar", { name: "unit_page_type", length: 20 })
  unitPageType: string;

  @Column("varchar", { name: "unit_name", length: 100 })
  unitName: string;

  @Column("varchar", { name: "unit_tag", length: 100 })
  unitTag: string;

  @Column("varchar", { name: "unit_desc", length: 255 })
  unitDesc: string;

  @Column("varchar", { name: "unit_keyword", length: 100 })
  unitKeyword: string;

  @Column("varchar", { name: "unit_temp_title", length: 50 })
  unitTempTitle: string;

  @Column("varchar", { name: "unit_separator", length: 20 })
  unitSeparator: string;

  @Column("datetime", {
    name: "date_log",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateLog: Date;

  @Column("varchar", { name: "sub_id", length: 20 })
  subId: string;

  @Column("varchar", { name: "ip", nullable: true, length: 15 })
  ip: string | null;

  @Column("enum", {
    name: "action_type",
    enum: ["", "SKIN", "UPLOAD", "PAGE", "UNIT", "TAG"],
    default: () => "'SKIN'",
  })
  actionType: "" | "SKIN" | "UPLOAD" | "PAGE" | "UNIT" | "TAG";

  @Column("mediumtext", { name: "content" })
  content: string;
}
