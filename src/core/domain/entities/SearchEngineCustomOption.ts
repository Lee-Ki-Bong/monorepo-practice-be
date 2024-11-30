import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_id", ["id"], {})
@Entity("search_engine_custom_option", { schema: "makeshop" })
export class SearchEngineCustomOption {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "option_type", length: 20 })
  optionType: string;

  @Column("varchar", { name: "finder_key", length: 20 })
  finderKey: string;

  @Column("varchar", { name: "origin_name", length: 50 })
  originName: string;

  @Column("varchar", { name: "name", length: 50 })
  name: string;

  @Column("varchar", { name: "tooltip", nullable: true, length: 255 })
  tooltip: string | null;

  @Column("tinyint", { name: "enabled", default: () => "'1'" })
  enabled: number;
}
