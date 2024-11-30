import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_psc_id", ["pscId"], {})
@Entity("product_size_chart", { schema: "makeshop" })
export class ProductSizeChart {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "psc_id", unsigned: true })
  pscId: number;

  @Column("enum", {
    name: "psc_type",
    enum: ["", "HANDS", "DATA", "IMG"],
    default: () => "'HANDS'",
  })
  pscType: "" | "HANDS" | "DATA" | "IMG";

  @Column("varchar", { name: "psc_name", length: 255 })
  pscName: string;

  @Column("varchar", { name: "psc_img_name", length: 255 })
  pscImgName: string;

  @Column("mediumtext", { name: "psc_data", nullable: true })
  pscData: string | null;

  @Column("datetime", {
    name: "psc_created",
    default: () => "'0000-00-00 00:00:00'",
  })
  pscCreated: Date;

  @Column("datetime", {
    name: "psc_updated",
    default: () => "'0000-00-00 00:00:00'",
  })
  pscUpdated: Date;
}
