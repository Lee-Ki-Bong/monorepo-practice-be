import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("design_backup", { schema: "makeshop" })
export class DesignBackup {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "adminuser", length: 20 })
  adminuser: string;

  @Column("varchar", { name: "backup_name", length: 100 })
  backupName: string;

  @Column("varchar", { name: "backup_file", length: 38 })
  backupFile: string;

  @Column("datetime", {
    name: "chkdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  chkdate: Date;
}
