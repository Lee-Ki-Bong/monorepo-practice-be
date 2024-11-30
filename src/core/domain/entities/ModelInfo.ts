import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_mi_uid", ["miUid"], {})
@Entity("model_info", { schema: "makeshop" })
export class ModelInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "mi_uid", unsigned: true })
  miUid: number;

  @Column("varchar", { name: "mi_name", length: 30 })
  miName: string;

  @Column("datetime", {
    name: "date_insert",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateInsert: Date;
}
