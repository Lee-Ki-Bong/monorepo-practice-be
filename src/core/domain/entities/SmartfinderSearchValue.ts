import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("csv_value", ["adminuser", "csiId", "csvValue"], { unique: true })
@Index("idx_auto_csv_id", ["csvId"], {})
@Entity("smartfinder_search_value", { schema: "makeshop" })
export class SmartfinderSearchValue {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "csi_id",
    unsigned: true,
    default: () => "'0'",
  })
  csiId: number;

  @PrimaryGeneratedColumn({ type: "int", name: "csv_id", unsigned: true })
  csvId: number;

  @Column("int", { name: "csv_pid", unsigned: true, default: () => "'0'" })
  csvPid: number;

  @Column("enum", {
    name: "csv_type",
    enum: ["", "NORMAL", "LIKE"],
    default: () => "'NORMAL'",
  })
  csvType: "" | "NORMAL" | "LIKE";

  @Column("varchar", { name: "csv_value", length: 255 })
  csvValue: string;

  @Column("mediumint", { name: "csv_sort", default: () => "'0'" })
  csvSort: number;
}
