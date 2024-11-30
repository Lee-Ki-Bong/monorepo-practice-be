import { Column, Entity } from "typeorm";

@Entity("faq", { schema: "makeshop" })
export class Faq {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("smallint", {
    name: "category_col",
    unsigned: true,
    default: () => "'5'",
  })
  categoryCol: number;

  @Column("enum", {
    name: "icon",
    nullable: true,
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  icon: "" | "N" | "Y" | null;

  @Column("varchar", { name: "best", nullable: true, length: 255 })
  best: string | null;

  @Column("smallint", {
    name: "best_col",
    nullable: true,
    unsigned: true,
    default: () => "'5'",
  })
  bestCol: number | null;

  @Column("smallint", {
    name: "faq_limit",
    unsigned: true,
    default: () => "'10'",
  })
  faqLimit: number;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", { name: "mod_date", nullable: true })
  modDate: Date | null;
}
