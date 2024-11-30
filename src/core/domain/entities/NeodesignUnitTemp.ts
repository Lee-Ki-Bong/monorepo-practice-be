import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("unit_temp_id", ["unitTempId"], { unique: true })
@Entity("neodesign_unit_temp", { schema: "makeshop" })
export class NeodesignUnitTemp {
  @PrimaryGeneratedColumn({ type: "int", name: "unit_temp_id", unsigned: true })
  unitTempId: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { name: "unit_id", unsigned: true, default: () => "'0'" })
  unitId: number;

  @Column("varchar", { name: "unit_temp_title", length: 50 })
  unitTempTitle: string;

  @Column("longtext", { name: "unit_temp_html", nullable: true })
  unitTempHtml: string | null;

  @Column("longtext", { name: "unit_temp_css", nullable: true })
  unitTempCss: string | null;

  @Column("longtext", { name: "unit_temp_js", nullable: true })
  unitTempJs: string | null;

  @Column("datetime", {
    name: "unit_temp_date_insert",
    default: () => "'0000-00-00 00:00:00'",
  })
  unitTempDateInsert: Date;
}
