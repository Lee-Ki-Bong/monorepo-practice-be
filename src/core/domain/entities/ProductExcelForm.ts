import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_pef_id", ["pefId"], {})
@Index("uef_name", ["adminuser", "pefName"], { unique: true })
@Entity("product_excel_form", { schema: "makeshop" })
export class ProductExcelForm {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "pef_id", unsigned: true })
  pefId: number;

  @Column("varchar", { name: "pef_name", length: 50 })
  pefName: string;

  @Column("mediumtext", { name: "pef_fields" })
  pefFields: string;

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
