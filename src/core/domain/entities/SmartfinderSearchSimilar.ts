import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_css_id", ["cssId"], {})
@Entity("smartfinder_search_similar", { schema: "makeshop" })
export class SmartfinderSearchSimilar {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "css_id", unsigned: true })
  cssId: number;

  @Column("int", {
    primary: true,
    name: "css_gid",
    unsigned: true,
    default: () => "'0'",
  })
  cssGid: number;

  @Column("enum", {
    name: "css_type",
    enum: ["", "NORMAL", "LIKE"],
    default: () => "'NORMAL'",
  })
  cssType: "" | "NORMAL" | "LIKE";

  @Column("varchar", { name: "css_keyword", length: 255 })
  cssKeyword: string;
}
