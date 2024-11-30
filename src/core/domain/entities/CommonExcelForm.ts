import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_cef_id", ["cefId"], {})
@Entity("common_excel_form", { schema: "makeshop" })
export class CommonExcelForm {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "cef_type", length: 20 })
  cefType: string;

  @PrimaryGeneratedColumn({ type: "int", name: "cef_id", unsigned: true })
  cefId: number;

  @Column("varchar", { name: "cef_name", length: 50 })
  cefName: string;

  @Column("mediumtext", { name: "cef_fields" })
  cefFields: string;

  @Column("datetime", {
    name: "created",
    default: () => "'0000-00-00 00:00:00'",
  })
  created: Date;

  @Column("datetime", {
    name: "updated",
    default: () => "'0000-00-00 00:00:00'",
  })
  updated: Date;
}
