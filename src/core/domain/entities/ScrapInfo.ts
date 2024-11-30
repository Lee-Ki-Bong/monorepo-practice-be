import { Column, Entity } from "typeorm";

@Entity("scrap_info", { schema: "makeshop" })
export class ScrapInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("char", {
    primary: true,
    name: "scrap_type",
    length: 1,
    default: () => "'B'",
  })
  scrapType: string;

  @Column("varchar", { primary: true, name: "scrap_code", length: 24 })
  scrapCode: string;

  @Column("varchar", { primary: true, name: "scrap_unique", length: 10 })
  scrapUnique: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("datetime", {
    name: "scrap_date",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  scrapDate: Date | null;
}
