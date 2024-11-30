import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Entity("pgdata_conversion_set", { schema: "makeshop" })
export class PgdataConversionSet {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("varchar", { name: "key", length: 50 })
  key: string;

  @Column("varchar", { name: "file_name", length: 255 })
  fileName: string;

  @Column("mediumtext", { name: "ordernums" })
  ordernums: string;

  @Column("enum", {
    name: "status",
    enum: ["", "BEFORE", "AFTER", "STANDBY"],
    default: () => "'BEFORE'",
  })
  status: "" | "BEFORE" | "AFTER" | "STANDBY";

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("varchar", { name: "etc", nullable: true, length: 255 })
  etc: string | null;
}
