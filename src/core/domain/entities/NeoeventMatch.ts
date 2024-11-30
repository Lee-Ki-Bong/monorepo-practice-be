import { Column, Entity, Index } from "typeorm";

@Index("match_type", ["adminuser", "matchGroup", "matchType", "matchUid"], {})
@Entity("neoevent_match", { schema: "makeshop" })
export class NeoeventMatch {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("bigint", {
    primary: true,
    name: "ev_no",
    unsigned: true,
    default: () => "'0'",
  })
  evNo: string;

  @Column("varchar", { primary: true, name: "match_group", length: 10 })
  matchGroup: string;

  @Column("varchar", { primary: true, name: "match_type", length: 20 })
  matchType: string;

  @Column("varchar", {
    primary: true,
    name: "match_uid",
    length: 20,
    default: () => "'0'",
  })
  matchUid: string;
}
