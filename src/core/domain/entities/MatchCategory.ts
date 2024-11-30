import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_match_idx", ["matchIdx"], {})
@Index(
  "match_all",
  [
    "adminuser",
    "matchName",
    "matchType",
    "matchData",
    "matchDepth",
    "matchCategory",
  ],
  { unique: true }
)
@Index("match_data", ["adminuser", "matchName", "matchType", "matchData"], {
  unique: true,
})
@Entity("match_category", { schema: "makeshop" })
export class MatchCategory {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "match_idx", unsigned: true })
  matchIdx: number;

  @Column("varchar", {
    name: "match_name",
    length: 10,
    default: () => "'enuri'",
  })
  matchName: string;

  @Column("enum", {
    name: "match_type",
    enum: ["category", "product"],
    default: () => "'category'",
  })
  matchType: "category" | "product";

  @Column("varchar", { name: "match_data", length: 10 })
  matchData: string;

  @Column("int", { name: "match_depth", unsigned: true, default: () => "'0'" })
  matchDepth: number;

  @Column("varchar", { name: "match_category", length: 10 })
  matchCategory: string;

  @Column("varchar", { name: "match_category_name", length: 200 })
  matchCategoryName: string;

  @Column("enum", {
    name: "match_status",
    enum: ["Y", "N", "M"],
    default: () => "'N'",
  })
  matchStatus: "Y" | "N" | "M";

  @Column("mediumtext", { name: "match_addinfo" })
  matchAddinfo: string;

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
