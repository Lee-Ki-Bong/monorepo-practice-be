import { Column, Entity, Index } from "typeorm";

@Index("adminuser", ["adminuser"], { unique: true })
@Entity("mobile", { schema: "makeshop" })
export class Mobile {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "title", length: 200 })
  title: string;

  @Column("varchar", { name: "title_color", nullable: true, length: 6 })
  titleColor: string | null;

  @Column("varchar", { name: "winc", nullable: true, length: 20 })
  winc: string | null;

  @Column("varchar", { name: "pgid", nullable: true, length: 20 })
  pgid: string | null;

  @Column("enum", {
    name: "skintype",
    enum: ["", "NEWS", "MULTI"],
    default: () => "'NEWS'",
  })
  skintype: "" | "NEWS" | "MULTI";

  @Column("varchar", {
    name: "templatetype",
    nullable: true,
    length: 6,
    default: () => "'blue'",
  })
  templatetype: string | null;

  @Column("varchar", { name: "skincolor", nullable: true, length: 6 })
  skincolor: string | null;

  @Column("mediumtext", { name: "keyword" })
  keyword: string;

  @Column("mediumtext", { name: "companyintro", nullable: true })
  companyintro: string | null;

  @Column("mediumtext", { name: "usecontract", nullable: true })
  usecontract: string | null;

  @Column("mediumtext", { name: "cscenter", nullable: true })
  cscenter: string | null;

  @Column("varchar", { name: "cs_phone", nullable: true, length: 13 })
  csPhone: string | null;

  @Column("int", { name: "brand_id_max", unsigned: true, default: () => "'1'" })
  brandIdMax: number;

  @Column("int", {
    name: "category_id_max",
    unsigned: true,
    default: () => "'1'",
  })
  categoryIdMax: number;

  @Column("int", { name: "news_id_max", unsigned: true, default: () => "'1'" })
  newsIdMax: number;

  @Column("datetime", {
    name: "created",
    default: () => "'0000-00-00 00:00:00'",
  })
  created: Date;

  @Column("datetime", {
    name: "updated",
    default: () => "'0000-00-00 00:00:00'",
  })
  updated: Date;
}
