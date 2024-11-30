import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_idx", ["idx"], {})
@Entity("premiumbeecon_config", { schema: "makeshop" })
export class PremiumbeeconConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 32 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "idx", unsigned: true })
  idx: number;

  @Column("varchar", { primary: true, name: "usergroup_code", length: 10 })
  usergroupCode: string;

  @Column("varchar", { name: "apply_target", length: 16 })
  applyTarget: string;

  @Column("enum", {
    name: "benefit_type",
    enum: ["", "DISCOUNT", "RESERVE", "FREEDELI"],
    default: () => "'DISCOUNT'",
  })
  benefitType: "" | "DISCOUNT" | "RESERVE" | "FREEDELI";

  @Column("enum", {
    name: "benefit_term",
    enum: ["", "DAY", "WEEK", "MONTH", "UNLIMIT"],
    default: () => "'DAY'",
  })
  benefitTerm: "" | "DAY" | "WEEK" | "MONTH" | "UNLIMIT";

  @Column("smallint", {
    name: "benefit_count",
    unsigned: true,
    default: () => "'1'",
  })
  benefitCount: number;

  @Column("smallint", {
    name: "floor_position",
    unsigned: true,
    default: () => "'0'",
  })
  floorPosition: number;

  @Column("int", { name: "minimum_price", nullable: true, unsigned: true })
  minimumPrice: number | null;

  @Column("int", { name: "benefit_rate", nullable: true, unsigned: true })
  benefitRate: number | null;

  @Column("enum", {
    name: "benefit_unit",
    nullable: true,
    enum: ["", "PRICE", "PERCENT", "MULTI"],
  })
  benefitUnit: "" | "PRICE" | "PERCENT" | "MULTI" | null;

  @Column("enum", {
    name: "setup_type",
    enum: ["", "NONE", "PERIOD", "CYCLE"],
    default: () => "'NONE'",
  })
  setupType: "" | "NONE" | "PERIOD" | "CYCLE";

  @Column("datetime", { name: "period_start", nullable: true })
  periodStart: Date | null;

  @Column("datetime", { name: "period_end", nullable: true })
  periodEnd: Date | null;

  @Column("enum", {
    name: "cycle_type",
    nullable: true,
    enum: ["", "WEEKLY", "MONTHLY"],
  })
  cycleType: "" | "WEEKLY" | "MONTHLY" | null;

  @Column("char", { name: "cycle_range", length: 3 })
  cycleRange: string;

  @Column("varchar", { name: "cycle_start", nullable: true, length: 5 })
  cycleStart: string | null;

  @Column("varchar", { name: "cycle_end", nullable: true, length: 5 })
  cycleEnd: string | null;

  @Column("varchar", { name: "other_benefit", nullable: true, length: 20 })
  otherBenefit: string | null;

  @Column("varchar", { name: "except_group_code", nullable: true, length: 20 })
  exceptGroupCode: string | null;

  @Column("varchar", {
    name: "except_category_code",
    nullable: true,
    length: 11,
  })
  exceptCategoryCode: string | null;

  @Column("enum", { name: "status", nullable: true, enum: ["", "A", "S", "E"] })
  status: "" | "A" | "S" | "E" | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("enum", {
    name: "trans_beecon_remain",
    enum: ["", "N", "Y"],
    default: () => "'Y'",
  })
  transBeeconRemain: "" | "N" | "Y";
}
