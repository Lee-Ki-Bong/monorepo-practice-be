import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_rb_idx", ["rbIdx"], {})
@Index("index_sequence", ["adminuser", "rIdx", "rbSequence"], {})
@Entity("roulette_benefit", { schema: "makeshop" })
export class RouletteBenefit {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "r_idx",
    unsigned: true,
    default: () => "'0'",
  })
  rIdx: number;

  @PrimaryGeneratedColumn({ type: "int", name: "rb_idx", unsigned: true })
  rbIdx: number;

  @Column("int", { name: "rb_sequence", unsigned: true, default: () => "'0'" })
  rbSequence: number;

  @Column("enum", {
    name: "rb_benefit_type",
    enum: ["", "COUPON", "RESERVE", "DIRECT", "FAIL"],
    default: () => "'FAIL'",
  })
  rbBenefitType: "" | "COUPON" | "RESERVE" | "DIRECT" | "FAIL";

  @Column("varchar", { name: "rb_couponnum", length: 255 })
  rbCouponnum: string;

  @Column("int", { name: "rb_reserve", unsigned: true, default: () => "'0'" })
  rbReserve: number;

  @Column("varchar", { name: "rb_direct", length: 100 })
  rbDirect: string;

  @Column("varchar", { name: "rb_text", length: 100 })
  rbText: string;

  @Column("int", {
    name: "rb_total_count",
    unsigned: true,
    default: () => "'0'",
  })
  rbTotalCount: number;

  @Column("int", {
    name: "rb_per_day_count",
    unsigned: true,
    default: () => "'0'",
  })
  rbPerDayCount: number;

  @Column("decimal", {
    name: "rb_percent",
    precision: 9,
    scale: 6,
    default: () => "'0.000000'",
  })
  rbPercent: string;

  @Column("int", { name: "rb_part_cnt", unsigned: true, default: () => "'0'" })
  rbPartCnt: number;

  @Column("varchar", { name: "rb_reserve_type", length: 100 })
  rbReserveType: string;
}
