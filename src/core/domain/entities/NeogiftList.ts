import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("gift_code", ["giftCode"], {})
@Entity("neogift_list", { schema: "makeshop" })
export class NeogiftList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "gift_code", unsigned: true })
  giftCode: number;

  @Column("enum", {
    name: "gift_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  giftUse: "" | "Y" | "N";

  @Column("enum", {
    name: "gift_date_type",
    enum: ["", "U", "L"],
    default: () => "'U'",
  })
  giftDateType: "" | "U" | "L";

  @Column("datetime", {
    name: "gift_startdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  giftStartdate: Date;

  @Column("datetime", {
    name: "gift_end_date",
    default: () => "'9999-12-31 23:59:59'",
  })
  giftEndDate: Date;

  @Column("varchar", { name: "gift_name", length: 250 })
  giftName: string;

  @Column("mediumtext", { name: "gift_comment" })
  giftComment: string;

  @Column("char", { name: "gift_type", length: 1, default: () => "'P'" })
  giftType: string;

  @Column("enum", {
    name: "gift_pay_type",
    enum: ["", "ALL", "CASH"],
    default: () => "'ALL'",
  })
  giftPayType: "" | "ALL" | "CASH";

  @Column("enum", {
    name: "gift_payer",
    enum: ["", "A", "M", "N", "G"],
    default: () => "'A'",
  })
  giftPayer: "" | "A" | "M" | "N" | "G";

  @Column("enum", {
    name: "gift_first",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  giftFirst: "" | "Y" | "N";

  @Column("mediumtext", { name: "gift_group" })
  giftGroup: string;

  @Column("char", { name: "gift_condition", length: 2 })
  giftCondition: string;

  @Column("enum", {
    name: "gift_except_provider",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  giftExceptProvider: "" | "Y" | "N";

  @Column("smallint", {
    name: "gift_plus_buy",
    unsigned: true,
    default: () => "'0'",
  })
  giftPlusBuy: number;

  @Column("smallint", {
    name: "gift_plus_gift",
    unsigned: true,
    default: () => "'0'",
  })
  giftPlusGift: number;

  @Column("enum", {
    name: "gift_plus_unit",
    enum: ["", "EACH", "OVER"],
    default: () => "'OVER'",
  })
  giftPlusUnit: "" | "EACH" | "OVER";

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;

  @Column("datetime", {
    name: "moddate",
    default: () => "'0000-00-00 00:00:00'",
  })
  moddate: Date;
}
