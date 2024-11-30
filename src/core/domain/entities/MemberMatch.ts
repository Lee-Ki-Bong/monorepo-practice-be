import { Column, Entity } from "typeorm";

@Entity("member_match", { schema: "makeshop" })
export class MemberMatch {
  @Column("int", { primary: true, name: "mc_key", default: () => "'0'" })
  mcKey: number;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("varchar", { name: "match_type", length: 4 })
  matchType: string;

  @Column("varchar", { name: "match_name", length: 200 })
  matchName: string;

  @Column("datetime", {
    name: "match_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  matchDate: Date;
}
