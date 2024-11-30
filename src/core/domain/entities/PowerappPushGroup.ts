import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_push_group_id", ["pushGroupId"], {})
@Entity("powerapp_push_group", { schema: "makeshop" })
export class PowerappPushGroup {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({
    type: "int",
    name: "push_group_id",
    unsigned: true,
  })
  pushGroupId: number;

  @Column("varchar", { name: "push_group_title", nullable: true, length: 100 })
  pushGroupTitle: string | null;

  @Column("mediumtext", { name: "push_group_desc", nullable: true })
  pushGroupDesc: string | null;

  @Column("enum", {
    name: "push_group_type",
    enum: ["", "USER", "CONN", "WISH", "ORDER"],
    default: () => "'USER'",
  })
  pushGroupType: "" | "USER" | "CONN" | "WISH" | "ORDER";

  @Column("mediumtext", { name: "push_group_detail", nullable: true })
  pushGroupDetail: string | null;

  @Column("datetime", {
    name: "push_group_regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  pushGroupRegdate: Date;

  @Column("datetime", {
    name: "push_group_update",
    default: () => "'0000-00-00 00:00:00'",
  })
  pushGroupUpdate: Date;
}
