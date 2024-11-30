import { Column, Entity } from "typeorm";

@Entity("plan_product", { schema: "makeshop" })
export class PlanProduct {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { primary: true, name: "plan_id", default: () => "'0'" })
  planId: number;

  @Column("int", { primary: true, name: "cate_id", default: () => "'0'" })
  cateId: number;

  @Column("int", { primary: true, name: "pid", default: () => "'0'" })
  pid: number;

  @Column("int", { name: "sortnum", default: () => "'0'" })
  sortnum: number;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;
}
