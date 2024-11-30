import { Column, Entity } from "typeorm";

@Entity("vote", { schema: "makeshop" })
export class Vote {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "code", length: 14 })
  code: string;

  @Column("smallint", {
    name: "paging_limit",
    unsigned: true,
    default: () => "'0'",
  })
  pagingLimit: number;

  @Column("char", { name: "display", nullable: true, length: 1 })
  display: string | null;

  @Column("datetime", {
    name: "vote_start",
    default: () => "'0000-00-00 00:00:00'",
  })
  voteStart: Date;

  @Column("datetime", {
    name: "vote_end",
    default: () => "'0000-00-00 00:00:00'",
  })
  voteEnd: Date;

  @Column("char", {
    name: "iptype",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  iptype: string | null;

  @Column("char", {
    name: "commtype",
    nullable: true,
    length: 3,
    default: () => "'YYY'",
  })
  commtype: string | null;

  @Column("varchar", { name: "vote_subject", nullable: true, length: 200 })
  voteSubject: string | null;

  @Column("varchar", { name: "vote_choice1", nullable: true, length: 200 })
  voteChoice1: string | null;

  @Column("varchar", { name: "vote_choice2", nullable: true, length: 200 })
  voteChoice2: string | null;

  @Column("varchar", { name: "vote_choice3", nullable: true, length: 200 })
  voteChoice3: string | null;

  @Column("varchar", { name: "vote_choice4", nullable: true, length: 200 })
  voteChoice4: string | null;

  @Column("varchar", { name: "vote_choice5", nullable: true, length: 200 })
  voteChoice5: string | null;

  @Column("varchar", { name: "vote_choice6", nullable: true, length: 200 })
  voteChoice6: string | null;

  @Column("varchar", { name: "vote_choice7", nullable: true, length: 200 })
  voteChoice7: string | null;

  @Column("varchar", { name: "vote_choice8", nullable: true, length: 200 })
  voteChoice8: string | null;

  @Column("varchar", { name: "vote_choice9", nullable: true, length: 200 })
  voteChoice9: string | null;

  @Column("varchar", { name: "vote_choice10", nullable: true, length: 200 })
  voteChoice10: string | null;

  @Column("int", { name: "vote_int1", nullable: true, default: () => "'0'" })
  voteInt1: number | null;

  @Column("int", { name: "vote_int2", nullable: true, default: () => "'0'" })
  voteInt2: number | null;

  @Column("int", { name: "vote_int3", nullable: true, default: () => "'0'" })
  voteInt3: number | null;

  @Column("int", { name: "vote_int4", nullable: true, default: () => "'0'" })
  voteInt4: number | null;

  @Column("int", { name: "vote_int5", nullable: true, default: () => "'0'" })
  voteInt5: number | null;

  @Column("int", { name: "vote_int6", nullable: true, default: () => "'0'" })
  voteInt6: number | null;

  @Column("int", { name: "vote_int7", nullable: true, default: () => "'0'" })
  voteInt7: number | null;

  @Column("int", { name: "vote_int8", nullable: true, default: () => "'0'" })
  voteInt8: number | null;

  @Column("int", { name: "vote_int9", nullable: true, default: () => "'0'" })
  voteInt9: number | null;

  @Column("int", { name: "vote_int10", nullable: true, default: () => "'0'" })
  voteInt10: number | null;

  @Column("int", { name: "reserve", nullable: true, default: () => "'0'" })
  reserve: number | null;

  @Column("int", { name: "time", nullable: true, default: () => "'0'" })
  time: number | null;
}
