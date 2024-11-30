import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_psd_id", ["psdId"], {})
@Entity("product_search_item_detail", { schema: "makeshop" })
export class ProductSearchItemDetail {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "psi_id",
    unsigned: true,
    default: () => "'0'",
  })
  psiId: number;

  @PrimaryGeneratedColumn({ type: "int", name: "psd_id", unsigned: true })
  psdId: number;

  @Column("varchar", { name: "psd_name", length: 50 })
  psdName: string;
}
