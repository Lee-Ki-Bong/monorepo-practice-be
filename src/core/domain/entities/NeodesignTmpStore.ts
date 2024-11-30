import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_dgntmp_id", ["dgntmpId"], {})
@Entity("neodesign_tmp_store", { schema: "makeshop" })
export class NeodesignTmpStore {
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

  @Column("int", {
    primary: true,
    name: "design_id",
    unsigned: true,
    default: () => "'0'",
  })
  designId: number;

  @PrimaryGeneratedColumn({
    type: "mediumint",
    name: "dgntmp_id",
    unsigned: true,
  })
  dgntmpId: number;

  @Column("varchar", { name: "dgntmp_title", length: 120 })
  dgntmpTitle: string;

  @Column("varchar", { name: "dgntmp_admin_id", length: 12 })
  dgntmpAdminId: string;

  @Column("datetime", {
    name: "dgntmp_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  dgntmpDate: Date;

  @Column("longtext", { name: "design_body", nullable: true })
  designBody: string | null;

  @Column("longtext", { name: "design_css", nullable: true })
  designCss: string | null;

  @Column("longtext", { name: "design_js", nullable: true })
  designJs: string | null;
}
