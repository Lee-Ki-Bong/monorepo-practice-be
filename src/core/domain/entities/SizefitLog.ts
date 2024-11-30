import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_sf_uid", ["sfUid"], {})
@Index("regdate", ["adminuser", "regdate"], {})
@Index("user_id", ["adminuser", "userId"], {})
@Entity("sizefit_log", { schema: "makeshop" })
export class SizefitLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "sf_uid", unsigned: true })
  sfUid: number;

  @Column("char", { name: "sf_type", length: 2, default: () => "'sf'" })
  sfType: string;

  @Column("varchar", { name: "user_id", length: 20 })
  userId: string;

  @Column("int", { name: "mp_id", unsigned: true, default: () => "'0'" })
  mpId: number;

  @Column("smallint", {
    name: "birth_month",
    unsigned: true,
    default: () => "'0'",
  })
  birthMonth: number;

  @Column("float", {
    name: "weight",
    unsigned: true,
    precision: 12,
    default: () => "'0'",
  })
  weight: number;

  @Column("float", {
    name: "height",
    unsigned: true,
    precision: 12,
    default: () => "'0'",
  })
  height: number;

  @Column("float", {
    name: "waist",
    unsigned: true,
    precision: 12,
    default: () => "'0'",
  })
  waist: number;

  @Column("enum", {
    name: "sex",
    enum: ["", "FEMALE", "MALE", "COMMON"],
    default: () => "'COMMON'",
  })
  sex: "" | "FEMALE" | "MALE" | "COMMON";

  @Column("enum", {
    name: "body_type",
    enum: ["", "LOOSE", "NORMAL", "TIGHT"],
    default: () => "'NORMAL'",
  })
  bodyType: "" | "LOOSE" | "NORMAL" | "TIGHT";

  @Column("enum", {
    name: "thigh_fit",
    nullable: true,
    enum: ["", "LOOSE", "NORMAL", "TIGHT"],
  })
  thighFit: "" | "LOOSE" | "NORMAL" | "TIGHT" | null;

  @Column("enum", {
    name: "diaper_type",
    enum: ["", "PANTY", "BAND"],
    default: () => "'BAND'",
  })
  diaperType: "" | "PANTY" | "BAND";

  @Column("int", { name: "inner_size", unsigned: true, default: () => "'0'" })
  innerSize: number;

  @Column("int", { name: "shoes_size", unsigned: true, default: () => "'0'" })
  shoesSize: number;

  @Column("varchar", { name: "diaper_lineup", length: 10 })
  diaperLineup: string;

  @Column("char", { name: "diaper_prefer", length: 2 })
  diaperPrefer: string;

  @Column("float", {
    name: "exp_thigh",
    precision: 4,
    scale: 1,
    default: () => "'0.0'",
  })
  expThigh: number;

  @Column("float", {
    name: "exp_z_thigh",
    nullable: true,
    precision: 5,
    scale: 3,
  })
  expZThigh: number | null;

  @Column("float", {
    name: "exp_waist",
    precision: 4,
    scale: 1,
    default: () => "'0.0'",
  })
  expWaist: number;

  @Column("float", {
    name: "exp_z_waist",
    nullable: true,
    precision: 5,
    scale: 3,
  })
  expZWaist: number | null;

  @Column("float", {
    name: "exp_head",
    precision: 4,
    scale: 1,
    default: () => "'0.0'",
  })
  expHead: number;

  @Column("float", {
    name: "exp_z_head",
    nullable: true,
    precision: 5,
    scale: 3,
  })
  expZHead: number | null;

  @Column("float", {
    name: "exp_weight",
    precision: 4,
    scale: 1,
    default: () => "'0.0'",
  })
  expWeight: number;

  @Column("mediumtext", { name: "result_info" })
  resultInfo: string;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;

  @Column("varchar", { name: "ordernum", nullable: true, length: 26 })
  ordernum: string | null;

  @Column("int", {
    name: "uid",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  uid: number | null;
}
