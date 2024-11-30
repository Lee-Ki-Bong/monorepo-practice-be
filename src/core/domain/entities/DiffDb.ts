import { Column, Entity, Index } from "typeorm";

@Index("server", ["server", "table", "field"], {})
@Entity("_diff_db", { schema: "makeshop" })
export class DiffDb {
  @Column("varchar", { primary: true, name: "server", length: 20 })
  server: string;

  @Column("varchar", { primary: true, name: "table", length: 20 })
  table: string;

  @Column("varchar", { primary: true, name: "field", length: 20 })
  field: string;

  @Column("text", { name: "type" })
  type: string;

  @Column("varchar", { name: "null", length: 10 })
  null: string;

  @Column("varchar", { name: "key", length: 20 })
  key: string;

  @Column("text", { name: "default" })
  default: string;

  @Column("text", { name: "extra" })
  extra: string;
}
