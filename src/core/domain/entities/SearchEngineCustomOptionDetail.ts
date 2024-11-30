import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_id", ["id"], {})
@Entity("search_engine_custom_option_detail", { schema: "makeshop" })
export class SearchEngineCustomOptionDetail {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "custom_option_id",
    unsigned: true,
    default: () => "'0'",
  })
  customOptionId: number;

  @Column("varchar", { name: "name", nullable: true, length: 50 })
  name: string | null;

  @Column("varchar", { name: "search_value", length: 255 })
  searchValue: string;

  @Column("char", { name: "mix", length: 1, default: () => "'0'" })
  mix: string;

  @Column("mediumtext", { name: "mix_option" })
  mixOption: string;
}
