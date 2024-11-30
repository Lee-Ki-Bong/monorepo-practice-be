import { Column, Entity } from "typeorm";

@Entity("event_game_joinlist", { schema: "makeshop" })
export class EventGameJoinlist {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "game_uid",
    unsigned: true,
    default: () => "'0'",
  })
  gameUid: number;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("enum", {
    name: "entryfee",
    enum: ["", "N", "R", "P"],
    default: () => "'N'",
  })
  entryfee: "" | "N" | "R" | "P";

  @Column("varchar", { name: "entryfee_opt", length: 100 })
  entryfeeOpt: string;

  @Column("varchar", { name: "score", length: 25, default: () => "'0'" })
  score: string;

  @Column("enum", {
    name: "benefit",
    enum: ["", "N", "C", "R", "P"],
    default: () => "'N'",
  })
  benefit: "" | "N" | "C" | "R" | "P";

  @Column("varchar", { name: "benefit_opt", length: 100 })
  benefitOpt: string;

  @Column("datetime", {
    primary: true,
    name: "startdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  startdate: Date;

  @Column("datetime", {
    name: "enddate",
    default: () => "'0000-00-00 00:00:00'",
  })
  enddate: Date;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;
}
