import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_psci_id", ["psciId"], {})
@Entity("product_size_chart_img", { schema: "makeshop" })
export class ProductSizeChartImg {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "psci_id", unsigned: true })
  psciId: number;

  @Column("char", { name: "psci_name", length: 255 })
  psciName: string;

  @Column("char", { name: "psci_ext", length: 3 })
  psciExt: string;
}
