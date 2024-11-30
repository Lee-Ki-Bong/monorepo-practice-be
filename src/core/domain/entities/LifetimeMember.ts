import { Column, Entity } from "typeorm";

@Entity("lifetime_member", { schema: "makeshop" })
export class LifetimeMember {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "use_lifetime",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useLifetime: "" | "Y" | "N";

  @Column("enum", {
    name: "use_withdraw",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useWithdraw: "" | "Y" | "N";

  @Column("enum", {
    name: "display_join_pc",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  displayJoinPc: "" | "Y" | "N";

  @Column("enum", {
    name: "display_join_mobile",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  displayJoinMobile: "" | "Y" | "N";

  @Column("enum", {
    name: "display_login_pc",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  displayLoginPc: "" | "Y" | "N";

  @Column("enum", {
    name: "display_login_mobile",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  displayLoginMobile: "" | "Y" | "N";

  @Column("enum", {
    name: "display_login",
    enum: ["", "LOGIN", "MYPAGE"],
    default: () => "'LOGIN'",
  })
  displayLogin: "" | "LOGIN" | "MYPAGE";

  @Column("enum", {
    name: "display_login_duplicate",
    enum: ["", "ONCE", "DUP"],
    default: () => "'ONCE'",
  })
  displayLoginDuplicate: "" | "ONCE" | "DUP";

  @Column("enum", {
    name: "use_once_benefit",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useOnceBenefit: "" | "Y" | "N";

  @Column("enum", {
    name: "once_benefit",
    enum: ["", "N", "C", "R", "P"],
    default: () => "'N'",
  })
  onceBenefit: "" | "N" | "C" | "R" | "P";

  @Column("varchar", { name: "once_benefit_opt", length: 100 })
  onceBenefitOpt: string;

  @Column("varchar", { name: "once_benefit_msg", length: 100 })
  onceBenefitMsg: string;

  @Column("varchar", {
    name: "use_regular_benefit",
    length: 4,
    default: () => "'N'",
  })
  useRegularBenefit: string;

  @Column("enum", {
    name: "regular_benefit",
    enum: ["", "N", "C", "R", "P"],
    default: () => "'N'",
  })
  regularBenefit: "" | "N" | "C" | "R" | "P";

  @Column("varchar", { name: "regular_benefit_opt", length: 100 })
  regularBenefitOpt: string;

  @Column("varchar", { name: "regular_benefit_msg", length: 100 })
  regularBenefitMsg: string;

  @Column("enum", {
    name: "use_1year_benefit",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  use_1yearBenefit: "" | "Y" | "N";

  @Column("enum", {
    name: "benefit_1year",
    enum: ["", "N", "C", "R", "P"],
    default: () => "'N'",
  })
  benefit_1year: "" | "N" | "C" | "R" | "P";

  @Column("varchar", { name: "benefit_opt_1year", length: 100 })
  benefitOpt_1year: string;

  @Column("varchar", { name: "benefit_msg_1year", length: 100 })
  benefitMsg_1year: string;

  @Column("enum", {
    name: "use_3year_benefit",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  use_3yearBenefit: "" | "Y" | "N";

  @Column("enum", {
    name: "benefit_3year",
    enum: ["", "N", "C", "R", "P"],
    default: () => "'N'",
  })
  benefit_3year: "" | "N" | "C" | "R" | "P";

  @Column("varchar", { name: "benefit_opt_3year", length: 100 })
  benefitOpt_3year: string;

  @Column("varchar", { name: "benefit_msg_3year", length: 100 })
  benefitMsg_3year: string;

  @Column("enum", {
    name: "use_5year_benefit",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  use_5yearBenefit: "" | "Y" | "N";

  @Column("enum", {
    name: "benefit_5year",
    enum: ["", "N", "C", "R", "P"],
    default: () => "'N'",
  })
  benefit_5year: "" | "N" | "C" | "R" | "P";

  @Column("varchar", { name: "benefit_opt_5year", length: 100 })
  benefitOpt_5year: string;

  @Column("varchar", { name: "benefit_msg_5year", length: 100 })
  benefitMsg_5year: string;

  @Column("enum", {
    name: "use_del_reserve",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  useDelReserve: "" | "Y" | "N" | null;
}
