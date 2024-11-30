import { Column, Entity, Index } from "typeorm";

@Index("idx", ["idx"], {})
@Entity("design_backup_data", { schema: "makeshop" })
export class DesignBackupData {
  @Column("int", { name: "idx", default: () => "'0'" })
  idx: number;

  @Column("varchar", { name: "type", length: 10 })
  type: string;

  @Column("varchar", {
    name: "code",
    nullable: true,
    length: 6,
    default: () => "'0'",
  })
  code: string | null;

  @Column("varchar", { name: "columntype", nullable: true, length: 32 })
  columntype: string | null;

  @Column("varchar", { name: "datavalue", nullable: true, length: 255 })
  datavalue: string | null;
}
