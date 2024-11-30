import { Column, Entity } from "typeorm";

@Entity("powerapp_keyword", { schema: "makeshop" })
export class PowerappKeyword {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "keyword_id", length: 50 })
  keywordId: string;

  @Column("enum", {
    name: "keyword_type",
    enum: ["", "default", "add"],
    default: () => "'default'",
  })
  keywordType: "" | "default" | "add";

  @Column("varchar", { name: "keyword_title", length: 50 })
  keywordTitle: string;

  @Column("enum", {
    name: "keyword_view",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  keywordView: "" | "Y" | "N";

  @Column("int", { name: "keyword_day", unsigned: true, default: () => "'7'" })
  keywordDay: number;

  @Column("datetime", {
    name: "update_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  updateDate: Date;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
