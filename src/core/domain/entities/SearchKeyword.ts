import { Column, Entity, Index } from "typeorm";

@Index("adminuser", ["adminuser", "skDate", "skCnt"], {})
@Entity("search_keyword", { schema: "makeshop" })
export class SearchKeyword {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("datetime", {
    primary: true,
    name: "sk_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  skDate: Date;

  @Column("varchar", { primary: true, name: "sk_search", length: 30 })
  skSearch: string;

  @Column("int", { name: "sk_cnt", unsigned: true, default: () => "'0'" })
  skCnt: number;

  @Column("int", { name: "sk_sum", unsigned: true, default: () => "'0'" })
  skSum: number;
}
