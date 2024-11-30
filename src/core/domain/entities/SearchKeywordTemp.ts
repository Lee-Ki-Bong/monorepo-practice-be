import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("sk_id", ["skId"], {})
@Entity("search_keyword_temp", { schema: "makeshop" })
export class SearchKeywordTemp {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "sk_id", unsigned: true })
  skId: number;

  @Column("datetime", {
    name: "sk_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  skDate: Date;

  @Column("varchar", { name: "sk_search", length: 30 })
  skSearch: string;

  @Column("int", { name: "sk_sum", unsigned: true, default: () => "'0'" })
  skSum: number;
}
