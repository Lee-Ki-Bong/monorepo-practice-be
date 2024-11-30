import { Column, Entity, Index } from "typeorm";

@Index("index_plan_id", ["adminuser", "planId"], {})
@Index(
  "plan_sort",
  ["adminuser", "planId", "planCateIdx", "planProductSort"],
  {}
)
@Entity("neodesign_plan_product", { schema: "makeshop" })
export class NeodesignPlanProduct {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "plan_id",
    unsigned: true,
    default: () => "'0'",
  })
  planId: number;

  @Column("int", {
    primary: true,
    name: "plan_cate_idx",
    unsigned: true,
    default: () => "'0'",
  })
  planCateIdx: number;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("int", {
    name: "plan_product_sort",
    unsigned: true,
    default: () => "'0'",
  })
  planProductSort: number;
}
