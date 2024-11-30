import { Column, Entity, Index } from "typeorm";

@Index("dgnbn_id", ["adminuser", "dgnbnId"], {})
@Index("match_key", ["adminuser", "matchType", "matchKey"], {})
@Index("match_type", ["adminuser", "matchType"], {})
@Entity("neodesign_banner_match", { schema: "makeshop" })
export class NeodesignBannerMatch {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "dgnbn_id",
    unsigned: true,
    default: () => "'0'",
  })
  dgnbnId: number;

  @Column("varchar", { primary: true, name: "match_type", length: 20 })
  matchType: string;

  @Column("varchar", {
    primary: true,
    name: "match_key",
    length: 20,
    default: () => "'0'",
  })
  matchKey: string;
}
