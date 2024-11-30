import { Column, Entity } from "typeorm";

@Entity("search_engine_finder", { schema: "makeshop" })
export class SearchEngineFinder {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("char", { primary: true, name: "cate_code", length: 3 })
  cateCode: string;

  @Column("enum", {
    name: "matching_use",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  matchingUse: "" | "Y" | "N";

  @Column("enum", {
    name: "finder_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  finderUse: "" | "Y" | "N";

  @Column("char", { name: "cate2_use", length: 1, default: () => "'N'" })
  cate2Use: string;

  @Column("varchar", { name: "enuri_cate", nullable: true, length: 10 })
  enuriCate: string | null;
}
