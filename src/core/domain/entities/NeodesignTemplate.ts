import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_design_id", ["designId"], {})
@Entity("neodesign_template", { schema: "makeshop" })
export class NeodesignTemplate {
  @Column("int", {
    primary: true,
    name: "tpl_group_id",
    unsigned: true,
    default: () => "'0'",
  })
  tplGroupId: number;

  @Column("varchar", { primary: true, name: "page_type", length: 20 })
  pageType: string;

  @PrimaryGeneratedColumn({ type: "int", name: "design_id", unsigned: true })
  designId: number;

  @Column("set", {
    primary: true,
    name: "version_type",
    enum: ["ver1", "oo", "unify"],
    default: () => ["ver1", "oo", "unify"],
  })
  versionType: ("ver1" | "oo" | "unify")[];

  @Column("varchar", { name: "design_title", length: 50 })
  designTitle: string;

  @Column("varchar", { name: "design_filename", length: 30 })
  designFilename: string;

  @Column("longtext", { name: "design_body" })
  designBody: string;

  @Column("longtext", { name: "design_css", nullable: true })
  designCss: string | null;

  @Column("longtext", { name: "design_js", nullable: true })
  designJs: string | null;
}
