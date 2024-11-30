import { Column, Entity } from "typeorm";

@Entity("rm_pay", { schema: "makeshop" })
export class RmPay {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "rp_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  rpUse: "" | "Y" | "N";

  @Column("enum", {
    name: "rp_scope",
    enum: ["", "NONE", "WEB", "MOBILE", "ALL"],
    default: () => "'NONE'",
  })
  rpScope: "" | "NONE" | "WEB" | "MOBILE" | "ALL";

  @Column("int", { name: "rp_benefit_min", default: () => "'0'" })
  rpBenefitMin: number;

  @Column("int", { name: "rp_benefit_price", default: () => "'0'" })
  rpBenefitPrice: number;

  @Column("enum", {
    name: "rp_benefit_unit",
    enum: ["", "WON", "PERCENT"],
    default: () => "'WON'",
  })
  rpBenefitUnit: "" | "WON" | "PERCENT";

  @Column("datetime", {
    name: "rp_regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  rpRegdate: Date;
}
