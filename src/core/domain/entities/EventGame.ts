import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_game_uid", ["gameUid"], {})
@Entity("event_game", { schema: "makeshop" })
export class EventGame {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "game_uid", unsigned: true })
  gameUid: number;

  @Column("varchar", { name: "game_type", length: 10 })
  gameType: string;

  @Column("varchar", { name: "game_title", length: 100 })
  gameTitle: string;

  @Column("datetime", {
    name: "startdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  startdate: Date;

  @Column("datetime", {
    name: "enddate",
    default: () => "'0000-00-00 00:00:00'",
  })
  enddate: Date;

  @Column("varchar", { name: "duplicate", length: 50, default: () => "'N'" })
  duplicate: string;

  @Column("int", {
    name: "duplicate_cnt",
    unsigned: true,
    default: () => "'1'",
  })
  duplicateCnt: number;

  @Column("enum", {
    name: "benefit",
    enum: ["", "N", "C", "R", "P"],
    default: () => "'N'",
  })
  benefit: "" | "N" | "C" | "R" | "P";

  @Column("varchar", { name: "benefit_opt", length: 100 })
  benefitOpt: string;

  @Column("varchar", { name: "benefit_rate", length: 100 })
  benefitRate: string;

  @Column("varchar", { name: "complete_msg", length: 255 })
  completeMsg: string;

  @Column("enum", {
    name: "entryfee",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  entryfee: "" | "N" | "Y";

  @Column("int", { name: "entryfee_pay", unsigned: true, default: () => "'0'" })
  entryfeePay: number;

  @Column("mediumtext", { name: "xml" })
  xml: string;

  @Column("varchar", { name: "regdate", length: 14 })
  regdate: string;
}
