import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("_diff_dir", { schema: "makeshop" })
export class DiffDir {
  @PrimaryGeneratedColumn({ type: "int", name: "code" })
  code: number;

  @Column("varchar", { name: "name", length: 20 })
  name: string;

  @Column("text", { name: "dir" })
  dir: string;

  @Column("datetime", {
    name: "created_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  createdDate: Date;

  @Column("datetime", { name: "update_date", nullable: true })
  updateDate: Date | null;

  @Column("varchar", { name: "created_ip", length: 15 })
  createdIp: string;

  @Column("varchar", { name: "update_ip", nullable: true, length: 15 })
  updateIp: string | null;

  @Column("int", { name: "file_count", default: () => "'0'" })
  fileCount: number;

  @Column("char", { name: "flag", length: 1 })
  flag: string;
}
