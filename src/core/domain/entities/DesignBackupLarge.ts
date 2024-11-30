import { Column, Entity, Index } from "typeorm";

@Index("idx", ["idx"], {})
@Entity("design_backup_large", { schema: "makeshop" })
export class DesignBackupLarge {
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

  @Column("mediumtext", { name: "datavalue", nullable: true })
  datavalue: string | null;
}
