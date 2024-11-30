import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_match_idx", ["matchIdx"], {})
@Index(
  "match",
  ["adminuser", "matchType", "matchData", "enuriLevel", "enuriCategory"],
  { unique: true }
)
@Entity("enuri_match_category", { schema: "makeshop" })
export class EnuriMatchCategory {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "match_idx", unsigned: true })
  matchIdx: number;

  @Column("enum", {
    name: "match_type",
    enum: ["", "category", "product"],
    default: () => "'category'",
  })
  matchType: "" | "category" | "product";

  @Column("varchar", { name: "match_data", length: 10 })
  matchData: string;

  @Column("int", { name: "enuri_level", unsigned: true, default: () => "'0'" })
  enuriLevel: number;

  @Column("varchar", { name: "enuri_category", length: 10 })
  enuriCategory: string;

  @Column("varchar", { name: "enuri_category_name", length: 200 })
  enuriCategoryName: string;

  @Column("enum", {
    name: "match_status",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  matchStatus: "" | "Y" | "N";

  @Column("datetime", {
    name: "match_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  matchRegDate: Date;

  @Column("datetime", {
    name: "match_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  matchModDate: Date;
}
