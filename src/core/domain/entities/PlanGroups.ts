import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_group_id", ["groupId"], {})
@Index("index_display", ["adminuser", "display"], {})
@Index("index_reg_date", ["adminuser", "regDate"], {})
@Entity("plan_groups", { schema: "makeshop" })
export class PlanGroups {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "group_id", unsigned: true })
  groupId: number;

  @Column("varchar", { name: "group_title", nullable: true, length: 255 })
  groupTitle: string | null;

  @Column("enum", {
    name: "display",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  display: "" | "Y" | "N" | null;

  @Column("varchar", { name: "writer", nullable: true, length: 12 })
  writer: string | null;

  @Column("datetime", {
    name: "reg_date",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date | null;

  @Column("varchar", {
    name: "product_sort",
    length: 25,
    default: () => "'custom'",
  })
  productSort: string;
}
