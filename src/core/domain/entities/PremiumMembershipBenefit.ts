import { Column, Entity } from "typeorm";

@Entity("premium_membership_benefit", { schema: "makeshop" })
export class PremiumMembershipBenefit {
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

  @Column("varchar", {
    name: "msb_issue_type",
    length: 10,
    default: () => "'INS'",
  })
  msbIssueType: string;

  @Column("smallint", {
    name: "msb_max_count",
    unsigned: true,
    default: () => "'0'",
  })
  msbMaxCount: number;

  @Column("varchar", { name: "pm_id", length: 100 })
  pmId: string;

  @Column("varchar", { name: "img_url", length: 255 })
  imgUrl: string;

  @Column("varchar", { name: "msb_title", length: 255 })
  msbTitle: string;

  @Column("varchar", { name: "add_info1", length: 255 })
  addInfo1: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
