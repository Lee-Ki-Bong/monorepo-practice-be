import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_cate_id", ["cateId"], {})
@Entity("plan_category", { schema: "makeshop" })
export class PlanCategory {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { primary: true, name: "plan_id", default: () => "'0'" })
  planId: number;

  @PrimaryGeneratedColumn({ type: "int", name: "cate_id" })
  cateId: number;

  @Column("varchar", { name: "cate_name", length: 100 })
  cateName: string;

  @Column("int", { name: "sortnum", default: () => "'0'" })
  sortnum: number;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;
}
