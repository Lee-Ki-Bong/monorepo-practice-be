import { Column, Entity } from "typeorm";

@Entity("plan_group_products", { schema: "makeshop" })
export class PlanGroupProducts {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "group_id",
    unsigned: true,
    default: () => "'0'",
  })
  groupId: number;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("int", {
    name: "plan_product_sort",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  planProductSort: number | null;
}
