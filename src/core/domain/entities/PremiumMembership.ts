import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_ms_id", ["msId"], {})
@Entity("premium_membership", { schema: "makeshop" })
export class PremiumMembership {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "ms_id", unsigned: true })
  msId: number;

  @Column("varchar", {
    name: "ms_now_state",
    length: 10,
    default: () => "'STOP'",
  })
  msNowState: string;

  @Column("varchar", { name: "ms_name", length: 255 })
  msName: string;

  @Column("varchar", { name: "ms_term", length: 5 })
  msTerm: string;

  @Column("int", { name: "ms_price", unsigned: true, default: () => "'0'" })
  msPrice: number;

  @Column("enum", {
    name: "ms_rejoin",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  msRejoin: "" | "Y" | "N";

  @Column("varchar", { name: "ms_add_sale", length: 5, default: () => "'ALL'" })
  msAddSale: string;

  @Column("enum", {
    name: "ms_add_sale_type",
    enum: ["", "RATE", "WON"],
    default: () => "'RATE'",
  })
  msAddSaleType: "" | "RATE" | "WON";

  @Column("int", { name: "ms_add_sale_price", default: () => "'0'" })
  msAddSalePrice: number;

  @Column("enum", {
    name: "ms_delivery",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  msDelivery: "" | "Y" | "N";

  @Column("enum", {
    name: "ms_join_benefit",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  msJoinBenefit: "" | "Y" | "N";

  @Column("smallint", {
    name: "ms_join_benefit_day",
    unsigned: true,
    default: () => "'0'",
  })
  msJoinBenefitDay: number;

  @Column("enum", {
    name: "ms_next_benefit",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  msNextBenefit: "" | "Y" | "N";

  @Column("smallint", {
    name: "ms_next_benefit_day",
    unsigned: true,
    default: () => "'0'",
  })
  msNextBenefitDay: number;

  @Column("int", {
    name: "ms_next_benefit_target",
    unsigned: true,
    default: () => "'0'",
  })
  msNextBenefitTarget: number;

  @Column("mediumint", {
    name: "ms_month_benefit_cnt",
    unsigned: true,
    default: () => "'0'",
  })
  msMonthBenefitCnt: number;

  @Column("enum", {
    name: "ms_extension_benefit",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  msExtensionBenefit: "" | "Y" | "N";

  @Column("tinyint", { name: "ms_extension_benefit_day", default: () => "'0'" })
  msExtensionBenefitDay: number;

  @Column("varchar", { name: "ms_extension_benefit_target", length: 50 })
  msExtensionBenefitTarget: string;

  @Column("mediumtext", { name: "ms_policy", nullable: true })
  msPolicy: string | null;

  @Column("int", { name: "ms_use_cnt", unsigned: true, default: () => "'0'" })
  msUseCnt: number;

  @Column("datetime", {
    name: "ms_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  msRegDate: Date;

  @Column("datetime", {
    name: "ms_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  msModDate: Date;
}
