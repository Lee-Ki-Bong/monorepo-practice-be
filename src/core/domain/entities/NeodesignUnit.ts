import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_unit_id", ["unitId"], {})
@Index("unit_name", ["adminuser", "unitType", "unitPageType", "unitName"], {
  unique: true,
})
@Entity("neodesign_unit", { schema: "makeshop" })
export class NeodesignUnit {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "unit_id" })
  unitId: number;

  @Column("enum", {
    primary: true,
    name: "unit_type",
    enum: ["", "PC", "MOBILE"],
    default: () => "'PC'",
  })
  unitType: "" | "PC" | "MOBILE";

  @Column("varchar", { primary: true, name: "unit_page_type", length: 20 })
  unitPageType: string;

  @Column("varchar", { name: "unit_separator", length: 20 })
  unitSeparator: string;

  @Column("varchar", { name: "unit_name", length: 100 })
  unitName: string;

  @Column("varchar", { name: "unit_tag", length: 100 })
  unitTag: string;

  @Column("varchar", { name: "unit_desc", length: 255 })
  unitDesc: string;

  @Column("varchar", { name: "unit_keyword", nullable: true, length: 100 })
  unitKeyword: string | null;

  @Column("longtext", { name: "unit_html" })
  unitHtml: string;

  @Column("longtext", { name: "unit_css" })
  unitCss: string;

  @Column("longtext", { name: "unit_js", nullable: true })
  unitJs: string | null;

  @Column("datetime", {
    name: "unit_create_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  unitCreateDate: Date;

  @Column("datetime", {
    name: "unit_update_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  unitUpdateDate: Date;

  @Column("mediumtext", { name: "unit_checksum" })
  unitChecksum: string;
}
