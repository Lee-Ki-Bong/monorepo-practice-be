import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("uid", ["uid"], {})
@Entity("design_rollback_log", { schema: "makeshop" })
export class DesignRollbackLog {
  @PrimaryGeneratedColumn({ type: "int", name: "log_uid", unsigned: true })
  logUid: number;

  @Column("int", { name: "uid", unsigned: true, default: () => "'0'" })
  uid: number;

  @Column("datetime", {
    name: "chkdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  chkdate: Date;

  @Column("varchar", { name: "chkip", length: 15 })
  chkip: string;

  @Column("mediumtext", { name: "item", nullable: true })
  item: string | null;

  @Column("varchar", { name: "source_type", length: 20 })
  sourceType: string;

  @Column("varchar", { name: "ftp_type", length: 20 })
  ftpType: string;
}
