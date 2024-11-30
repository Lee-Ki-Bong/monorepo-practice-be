import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_clog_idx", ["clogIdx"], {})
@Entity("calorie_log", { schema: "makeshop" })
export class CalorieLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("enum", {
    primary: true,
    name: "clog_page",
    enum: ["", "bmi", "kcal"],
    default: () => "'bmi'",
  })
  clogPage: "" | "bmi" | "kcal";

  @PrimaryGeneratedColumn({ type: "int", name: "clog_idx", unsigned: true })
  clogIdx: number;

  @Column("enum", {
    name: "clog_sex",
    enum: ["", "M", "F"],
    default: () => "'F'",
  })
  clogSex: "" | "M" | "F";

  @Column("int", { name: "clog_age", unsigned: true, default: () => "'0'" })
  clogAge: number;

  @Column("int", { name: "clog_tall", unsigned: true, default: () => "'0'" })
  clogTall: number;

  @Column("int", { name: "clog_weight", unsigned: true, default: () => "'0'" })
  clogWeight: number;

  @Column("int", {
    name: "clog_target_weight",
    unsigned: true,
    default: () => "'0'",
  })
  clogTargetWeight: number;

  @Column("int", { name: "clog_term", unsigned: true, default: () => "'0'" })
  clogTerm: number;

  @Column("int", {
    name: "clog_activity",
    unsigned: true,
    default: () => "'0'",
  })
  clogActivity: number;

  @Column("int", { name: "clog_ratio", unsigned: true, default: () => "'0'" })
  clogRatio: number;

  @Column("int", { name: "clog_kcal", unsigned: true, default: () => "'0'" })
  clogKcal: number;

  @Column("varchar", { name: "clog_ip", length: 20 })
  clogIp: string;

  @Column("datetime", {
    name: "clog_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  clogDate: Date;
}
