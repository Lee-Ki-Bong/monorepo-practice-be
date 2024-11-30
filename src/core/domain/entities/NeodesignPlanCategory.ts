import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("cate_sort", ["adminuser", "planId", "planCateSort"], {})
@Index("idx_auto_plan_cate_idx", ["planCateIdx"], {})
@Entity("neodesign_plan_category", { schema: "makeshop" })
export class NeodesignPlanCategory {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "plan_id",
    unsigned: true,
    default: () => "'0'",
  })
  planId: number;

  @PrimaryGeneratedColumn({
    type: "int",
    name: "plan_cate_idx",
    unsigned: true,
  })
  planCateIdx: number;

  @Column("varchar", { name: "plan_cate_name", length: 255 })
  planCateName: string;

  @Column("int", {
    name: "plan_cate_sort",
    unsigned: true,
    default: () => "'0'",
  })
  planCateSort: number;
}
