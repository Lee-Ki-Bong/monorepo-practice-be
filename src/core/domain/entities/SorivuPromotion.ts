import { Column, Entity } from "typeorm";

@Entity("sorivu_promotion", { schema: "makeshop" })
export class SorivuPromotion {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    primary: true,
    name: "pr_type",
    enum: ["", "exposure", "visit"],
    default: () => "'exposure'",
  })
  prType: "" | "exposure" | "visit";

  @Column("enum", {
    name: "pr_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  prUse: "" | "Y" | "N";

  @Column("enum", {
    name: "money_type",
    enum: ["", "point", "reserve", "emoney"],
    default: () => "'point'",
  })
  moneyType: "" | "point" | "reserve" | "emoney";

  @Column("int", { name: "point", default: () => "'0'" })
  point: number;

  @Column("varchar", { name: "terms", nullable: true, length: 10 })
  terms: string | null;

  @Column("int", { name: "score", nullable: true })
  score: number | null;
}
