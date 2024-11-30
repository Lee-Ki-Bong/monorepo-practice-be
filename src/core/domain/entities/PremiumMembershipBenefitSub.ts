import { Column, Entity } from "typeorm";

@Entity("premium_membership_benefit_sub", { schema: "makeshop" })
export class PremiumMembershipBenefitSub {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "ms_id",
    unsigned: true,
    default: () => "'0'",
  })
  msId: number;

  @Column("varchar", { primary: true, name: "msb_type", length: 10 })
  msbType: string;

  @Column("int", {
    primary: true,
    name: "msb_id",
    unsigned: true,
    default: () => "'0'",
  })
  msbId: number;

  @Column("int", {
    primary: true,
    name: "msb_sub_id",
    unsigned: true,
    default: () => "'0'",
  })
  msbSubId: number;

  @Column("varchar", { name: "benefit_id", length: 100 })
  benefitId: string;

  @Column("int", {
    name: "benefit_count",
    unsigned: true,
    default: () => "'1'",
  })
  benefitCount: number;

  @Column("int", {
    name: "benefit_price",
    unsigned: true,
    default: () => "'0'",
  })
  benefitPrice: number;

  @Column("varchar", { name: "benefit_title", length: 255 })
  benefitTitle: string;
}
