import { Column, Entity, Index } from "typeorm";

@Index("server", ["server", "filename", "filedate", "dirCode"], {})
@Entity("_diff_file", { schema: "makeshop" })
export class DiffFile {
  @Column("varchar", { name: "server", nullable: true, length: 20 })
  server: string | null;

  @Column("varchar", { name: "filename", length: 50 })
  filename: string;

  @Column("int", { name: "filesize", default: () => "'0'" })
  filesize: number;

  @Column("datetime", {
    name: "filedate",
    default: () => "'0000-00-00 00:00:00'",
  })
  filedate: Date;

  @Column("char", { name: "dir-code", length: 3 })
  dirCode: string;
}
