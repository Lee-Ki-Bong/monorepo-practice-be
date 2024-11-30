import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_da_uid", ["daUid"], {})
@Entity("dormant_del_apply", { schema: "makeshop" })
export class DormantDelApply {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "da_uid", unsigned: true })
  daUid: number;

  @Column("datetime", {
    name: "da_app_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  daAppDate: Date;

  @Column("enum", {
    name: "da_exec",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  daExec: "" | "Y" | "N";

  @Column("datetime", {
    name: "da_exec_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  daExecDate: Date;

  @Column("int", {
    name: "da_exec_count",
    unsigned: true,
    default: () => "'0'",
  })
  daExecCount: number;
}
