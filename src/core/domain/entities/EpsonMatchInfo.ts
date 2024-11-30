import { Column, Entity, Index } from "typeorm";

@Index("ms_uid", ["matchType", "msUid"], {})
@Entity("epson_match_info", { schema: "makeshop" })
export class EpsonMatchInfo {
  @Column("varchar", { primary: true, name: "match_type", length: 20 })
  matchType: string;

  @Column("varchar", { primary: true, name: "match_key", length: 20 })
  matchKey: string;

  @Column("int", { name: "ms_uid", unsigned: true, default: () => "'0'" })
  msUid: number;

  @Column("mediumtext", { name: "match_info" })
  matchInfo: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
