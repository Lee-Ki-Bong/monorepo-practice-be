import { Column, Entity, Index } from "typeorm";

@Index("reservenum", ["adminuser", "reservenum"], {})
@Entity("smart_reserve_stats", { schema: "makeshop" })
export class SmartReserveStats {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "reservenum", length: 8 })
  reservenum: string;

  @Column("date", {
    primary: true,
    name: "stats_date",
    default: () => "'0000-00-00'",
  })
  statsDate: string;

  @Column("varchar", { name: "reserve_type", length: 10 })
  reserveType: string;

  @Column("varchar", { name: "reserve_name", length: 255 })
  reserveName: string;

  @Column("enum", {
    name: "reserve_unit",
    enum: ["", "WON", "PERCENT"],
    default: () => "'WON'",
  })
  reserveUnit: "" | "WON" | "PERCENT";

  @Column("decimal", {
    name: "reserve_price",
    unsigned: true,
    precision: 10,
    scale: 1,
    default: () => "'0.0'",
  })
  reservePrice: string;

  @Column("int", { name: "give_count", unsigned: true, default: () => "'0'" })
  giveCount: number;

  @Column("int", { name: "expire_count", unsigned: true, default: () => "'0'" })
  expireCount: number;

  @Column("decimal", {
    name: "give_price",
    unsigned: true,
    precision: 12,
    scale: 0,
    default: () => "'0'",
  })
  givePrice: string;

  @Column("decimal", {
    name: "restore_price",
    unsigned: true,
    precision: 12,
    scale: 0,
    default: () => "'0'",
  })
  restorePrice: string;

  @Column("decimal", {
    name: "use_price",
    unsigned: true,
    precision: 12,
    scale: 0,
    default: () => "'0'",
  })
  usePrice: string;

  @Column("decimal", {
    name: "sub_price",
    unsigned: true,
    precision: 12,
    scale: 0,
    default: () => "'0'",
  })
  subPrice: string;

  @Column("decimal", {
    name: "recovery_price",
    unsigned: true,
    precision: 12,
    scale: 0,
    default: () => "'0'",
  })
  recoveryPrice: string;

  @Column("decimal", {
    name: "expire_price",
    unsigned: true,
    precision: 12,
    scale: 0,
    default: () => "'0'",
  })
  expirePrice: string;

  @Column("decimal", {
    name: "dormant_price",
    unsigned: true,
    precision: 12,
    scale: 0,
    default: () => "'0'",
  })
  dormantPrice: string;

  @Column("decimal", {
    name: "exit_price",
    unsigned: true,
    precision: 12,
    scale: 0,
    default: () => "'0'",
  })
  exitPrice: string;

  @Column("decimal", {
    name: "delete_price",
    unsigned: true,
    precision: 12,
    scale: 0,
    default: () => "'0'",
  })
  deletePrice: string;

  @Column("decimal", {
    name: "rest_price",
    precision: 12,
    scale: 0,
    default: () => "'0'",
  })
  restPrice: string;
}
