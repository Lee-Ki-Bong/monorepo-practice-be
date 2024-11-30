import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_psi_id", ["psiId"], {})
@Index("type_idx", ["adminuser", "psiType"], {})
@Entity("product_search_item", { schema: "makeshop" })
export class ProductSearchItem {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "psi_id", unsigned: true })
  psiId: number;

  @Column("varchar", { name: "psi_name", length: 255 })
  psiName: string;

  @Column("enum", {
    name: "psi_type",
    enum: ["", "DEFAULT", "ADD", "OPTION"],
    default: () => "'ADD'",
  })
  psiType: "" | "DEFAULT" | "ADD" | "OPTION";
}
