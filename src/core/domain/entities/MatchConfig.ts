import { Column, Entity } from "typeorm";

@Entity("match_config", { schema: "makeshop" })
export class MatchConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("varchar", {
    primary: true,
    name: "match_name",
    length: 10,
    default: () => "'plto'",
  })
  matchName: string;

  @Column("smallint", {
    name: "match_price_percent",
    unsigned: true,
    default: () => "'0'",
  })
  matchPricePercent: number;

  @Column("int", {
    name: "match_price_fixed",
    unsigned: true,
    default: () => "'0'",
  })
  matchPriceFixed: number;

  @Column("mediumtext", { name: "match_addinfo" })
  matchAddinfo: string;
}
