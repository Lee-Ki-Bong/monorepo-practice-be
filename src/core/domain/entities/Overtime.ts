import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("_overtime", { schema: "makeshop" })
export class Overtime {
  @PrimaryGeneratedColumn({ type: "int", name: "idx" })
  idx: number;

  @Column("enum", {
    name: "o_type",
    enum: ["", "START", "END"],
    default: () => "'END'",
  })
  oType: "" | "START" | "END";

  @Column("enum", {
    name: "o_day_type",
    nullable: true,
    enum: ["", "NORMAL", "HOLIDAY"],
    default: () => "'NORMAL'",
  })
  oDayType: "" | "NORMAL" | "HOLIDAY" | null;

  @Column("varchar", { name: "o_ip", length: 20 })
  oIp: string;

  @Column("varchar", { name: "o_name", length: 20 })
  oName: string;

  @Column("datetime", {
    name: "o_time",
    default: () => "'0000-00-00 00:00:00'",
  })
  oTime: Date;

  @Column("tinyint", { name: "o_add", default: () => "'0'" })
  oAdd: number;

  @Column("mediumtext", { name: "o_comment" })
  oComment: string;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;
}
