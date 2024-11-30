import { Column, Entity } from "typeorm";

@Entity("plan_group_matches", { schema: "makeshop" })
export class PlanGroupMatches {
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
    name: "plan_id",
    unsigned: true,
    default: () => "'0'",
  })
  planId: number;

  @Column("int", {
    name: "group_sort",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  groupSort: number | null;
}
