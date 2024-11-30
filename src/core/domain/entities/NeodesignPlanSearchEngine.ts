import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_id", ["id"], {})
@Index("plan_id_plan_cate_idx", ["adminuser", "planId", "planCateIdx"], {
  unique: true,
})
@Entity("neodesign_plan_search_engine", { schema: "makeshop" })
export class NeodesignPlanSearchEngine {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "plan_id", unsigned: true, default: () => "'0'" })
  planId: number;

  @Column("int", {
    name: "plan_cate_idx",
    unsigned: true,
    default: () => "'0'",
  })
  planCateIdx: number;

  @Column("tinyint", { name: "plan_enabled", default: () => "'0'" })
  planEnabled: number;

  @Column("varchar", { name: "plan_sort", nullable: true, length: 20 })
  planSort: string | null;

  @Column("mediumtext", { name: "plan_search_data", nullable: true })
  planSearchData: string | null;
}
