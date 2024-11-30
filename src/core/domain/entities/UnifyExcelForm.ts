import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uef_id", ["uefId"], {})
@Index("uef_name", ["adminuser", "uefName"], { unique: true })
@Entity("unify_excel_form", { schema: "makeshop" })
export class UnifyExcelForm {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uef_id", unsigned: true })
  uefId: number;

  @Column("varchar", { name: "uef_name", length: 50 })
  uefName: string;

  @Column("mediumtext", { name: "uef_fields" })
  uefFields: string;

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
