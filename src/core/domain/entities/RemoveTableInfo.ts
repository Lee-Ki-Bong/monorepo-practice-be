import { Column, Entity, Index } from "typeorm";

@Index("rt_type", ["rtType"], {})
@Entity("remove_table_info", { schema: "makeshop" })
export class RemoveTableInfo {
  @Column("varchar", { primary: true, name: "rt_table", length: 200 })
  rtTable: string;

  @Column("set", {
    name: "rt_type",
    enum: ["ONCE", "LIMIT", "PAST"],
    default: () => ["ONCE"],
  })
  rtType: ("ONCE" | "LIMIT" | "PAST")[];

  @Column("varchar", { name: "rt_pk", length: 50 })
  rtPk: string;

  @Column("varchar", { name: "rt_limit_field", length: 50 })
  rtLimitField: string;

  @Column("int", {
    name: "rt_limit_year",
    unsigned: true,
    default: () => "'0'",
  })
  rtLimitYear: number;

  @Column("varchar", { name: "rt_limit_format", length: 100 })
  rtLimitFormat: string;
}
