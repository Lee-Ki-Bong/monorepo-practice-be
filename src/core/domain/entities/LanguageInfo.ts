import { Column, Entity } from "typeorm";

@Entity("language_info", { schema: "makeshop" })
export class LanguageInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "lang_default",
    enum: ["", "KOR", "ENG"],
    default: () => "'KOR'",
  })
  langDefault: "" | "KOR" | "ENG";

  @Column("enum", {
    name: "lang_currency",
    enum: ["", "KRW", "USD"],
    default: () => "'KRW'",
  })
  langCurrency: "" | "KRW" | "USD";

  @Column("set", {
    name: "lang_paymethod",
    enum: ["CARD", "BANK", "PAYPAL", "PAYGATE"],
    default: () => ["CARD"],
  })
  langPaymethod: ("CARD" | "BANK" | "PAYPAL" | "PAYGATE")[];

  @Column("enum", {
    name: "lang_policy",
    enum: ["", "NONE", "DISABLE", "ABLE"],
    default: () => "'NONE'",
  })
  langPolicy: "" | "NONE" | "DISABLE" | "ABLE";

  @Column("set", {
    name: "discount_policy",
    nullable: true,
    enum: ["PERIOD", "GIFT", "BEECON", "COUPON", "CASH"],
  })
  discountPolicy: ("PERIOD" | "GIFT" | "BEECON" | "COUPON" | "CASH")[] | null;

  @Column("mediumtext", { name: "lang_bank_info", nullable: true })
  langBankInfo: string | null;

  @Column("enum", {
    name: "lang_use_mail",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  langUseMail: "" | "Y" | "N" | null;
}
