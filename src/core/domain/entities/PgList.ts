import { Column, Entity } from "typeorm";

@Entity("pg_list", { schema: "makeshop" })
export class PgList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    primary: true,
    name: "pg_type",
    enum: ["", "PG", "SIMPLE", "CELL", "OVERSEA"],
    default: () => "'PG'",
  })
  pgType: "" | "PG" | "SIMPLE" | "CELL" | "OVERSEA";

  @Column("char", { primary: true, name: "card_type", length: 3 })
  cardType: string;

  @Column("varchar", { primary: true, name: "card_id", length: 20 })
  cardId: string;

  @Column("enum", {
    name: "deduction",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  deduction: "" | "Y" | "N";

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
