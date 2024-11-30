import { Column, Entity, Index } from "typeorm";

@Index("gift_code", ["adminuser", "ordernum", "giftCode"], {})
@Entity("oo_gift", { schema: "makeshop" })
export class OoGift {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", {
    primary: true,
    name: "basket_num",
    unsigned: true,
    default: () => "'1'",
  })
  basketNum: number;

  @Column("int", { name: "gift_code", unsigned: true, default: () => "'0'" })
  giftCode: number;

  @Column("char", { name: "gift_type", length: 1, default: () => "'P'" })
  giftType: string;

  @Column("enum", {
    name: "gift_auto",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  giftAuto: "" | "Y" | "N";

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
}
