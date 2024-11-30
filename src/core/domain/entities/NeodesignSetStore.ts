import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_design_id", ["designId"], {})
@Entity("neodesign_set_store", { schema: "makeshop" })
export class NeodesignSetStore {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "dgnset_id",
    unsigned: true,
    default: () => "'0'",
  })
  dgnsetId: number;

  @Column("varchar", { primary: true, name: "page_type", length: 20 })
  pageType: string;

  @PrimaryGeneratedColumn({ type: "int", name: "design_id", unsigned: true })
  designId: number;

  @Column("varchar", { name: "separator1", length: 30 })
  separator1: string;

  @Column("varchar", { name: "separator2", length: 30 })
  separator2: string;

  @Column("varchar", { name: "separator3", length: 30 })
  separator3: string;

  @Column("varchar", { name: "design_title", length: 50 })
  designTitle: string;

  @Column("varchar", { name: "design_filename", length: 100 })
  designFilename: string;

  @Column("datetime", {
    name: "last_update_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  lastUpdateDate: Date;

  @Column("longtext", { name: "design_body" })
  designBody: string;

  @Column("longtext", { name: "design_css", nullable: true })
  designCss: string | null;

  @Column("longtext", { name: "design_js", nullable: true })
  designJs: string | null;

  @Column("tinyint", { name: "page_weight", default: () => "'0'" })
  pageWeight: number;

  @Column("mediumtext", { name: "design_checksum" })
  designChecksum: string;
}
