import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_pv_idx", ["pvIdx"], {})
@Index("pv_prd_id", ["adminuser", "pvPrdId", "pvProviderCode"], {})
@Entity("provider_product_logs", { schema: "makeshop" })
export class ProviderProductLogs {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "pv_idx", unsigned: true })
  pvIdx: number;

  @Column("int", { name: "pv_prd_id", unsigned: true, default: () => "'0'" })
  pvPrdId: number;

  @Column("mediumint", {
    name: "pv_provider_code",
    unsigned: true,
    default: () => "'0'",
  })
  pvProviderCode: number;

  @Column("varchar", { name: "pv_user_id", length: 20 })
  pvUserId: string;

  @Column("varchar", { name: "pv_type", length: 5, default: () => "'MOD'" })
  pvType: string;

  @Column("mediumtext", { name: "pv_content", nullable: true })
  pvContent: string | null;

  @Column("datetime", {
    name: "pv_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pvDate: Date;
}
