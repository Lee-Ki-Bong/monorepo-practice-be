import { Column, Entity, Index } from "typeorm";

@Index("idx_auto_match_idx", ["matchIdx"], {})
@Entity("match_category2", { schema: "makeshop" })
export class MatchCategory2 {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("int", { primary: true, name: "match_idx", unsigned: true })
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
