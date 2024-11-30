import { Column, Entity, Index } from "typeorm";

@Index("adminuser", ["adminuser", "giftName"], {})
@Index("adminuser_2", ["adminuser", "giftAmount"], {})
@Entity("gift_list", { schema: "makeshop" })
export class GiftList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "gift_regdate", length: 14 })
  giftRegdate: string;

  @Column("varchar", { name: "gift_code", nullable: true, length: 13 })
  giftCode: string | null;

  @Column("varchar", { name: "orderbygift", nullable: true, length: 14 })
  orderbygift: string | null;

  @Column("enum", {
    name: "gift_language",
    enum: ["", "ALL", "KOR", "ENG"],
    default: () => "'ALL'",
  })
  giftLanguage: "" | "ALL" | "KOR" | "ENG";

  @Column("bigint", {
    name: "gift_fprice",
    unsigned: true,
    default: () => "'0'",
  })
  giftFprice: string;

  @Column("bigint", {
    name: "gift_sprice",
    unsigned: true,
    default: () => "'0'",
  })
  giftSprice: string;

  @Column("mediumint", {
    name: "gift_limit",
    unsigned: true,
    default: () => "'0'",
  })
  giftLimit: number;

  @Column("mediumint", { name: "gift_amount", nullable: true, unsigned: true })
  giftAmount: number | null;

  @Column("varchar", { name: "gift_image", nullable: true, length: 25 })
  giftImage: string | null;

  @Column("char", { name: "gift_xcode", nullable: true, length: 3 })
  giftXcode: string | null;

  @Column("char", {
    name: "gift_pro",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  giftPro: string | null;

  @Column("char", {
    name: "gift_first",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  giftFirst: string | null;

  @Column("char", {
    name: "gift_add",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  giftAdd: string | null;

  @Column("enum", {
    name: "gift_money",
    nullable: true,
    enum: ["", "Y", "N", "R"],
    default: () => "'N'",
  })
  giftMoney: "" | "Y" | "N" | "R" | null;

  @Column("enum", {
    name: "gift_category",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  giftCategory: "" | "Y" | "N" | null;

  @Column("char", { name: "gift_termdeli", length: 1, default: () => "'N'" })
  giftTermdeli: string;

  @Column("bigint", {
    name: "gift_reservemoney",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  giftReservemoney: string | null;

  @Column("varchar", { name: "gift_name", length: 250 })
  giftName: string;

  @Column("varchar", { name: "gift_spname", nullable: true, length: 250 })
  giftSpname: string | null;

  @Column("varchar", { name: "gift_spname2", nullable: true, length: 250 })
  giftSpname2: string | null;

  @Column("enum", {
    name: "gift_opt_check",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  giftOptCheck: "" | "Y" | "N";

  @Column("datetime", {
    name: "gift_startdate",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  giftStartdate: Date | null;

  @Column("datetime", {
    name: "gift_enddate",
    nullable: true,
    default: () => "'9999-12-31 23:59:59'",
  })
  giftEnddate: Date | null;

  @Column("smallint", {
    name: "gift_fixed_stock",
    unsigned: true,
    default: () => "'0'",
  })
  giftFixedStock: number;

  @Column("bigint", {
    name: "gift_replace_reserve",
    unsigned: true,
    default: () => "'0'",
  })
  giftReplaceReserve: string;
}
