import { Column, Entity } from "typeorm";

@Entity("link", { schema: "makeshop" })
export class Link {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "url", length: 50 })
  url: string;

  @Column("varchar", { name: "id", nullable: true, length: 12 })
  id: string | null;

  @Column("varchar", { name: "passwd", nullable: true, length: 12 })
  passwd: string | null;

  @Column("varchar", { name: "linkcomname", nullable: true, length: 255 })
  linkcomname: string | null;

  @Column("int", { name: "cookieday", nullable: true, default: () => "'0'" })
  cookieday: number | null;

  @Column("varchar", { name: "group_id", nullable: true, length: 4 })
  groupId: string | null;

  @Column("int", { name: "cnt", nullable: true, default: () => "'0'" })
  cnt: number | null;

  @Column("varchar", { name: "startdate", nullable: true, length: 8 })
  startdate: string | null;

  @Column("varchar", { name: "enddate", nullable: true, length: 8 })
  enddate: string | null;

  @Column("int", { name: "price", nullable: true, default: () => "'0'" })
  price: number | null;

  @Column("varchar", { name: "tempkey", nullable: true, length: 32 })
  tempkey: string | null;

  @Column("enum", {
    name: "ipaddress_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  ipaddressUse: "" | "Y" | "N";

  @Column("varchar", { name: "ipaddress", nullable: true, length: 100 })
  ipaddress: string | null;

  @Column("enum", {
    name: "link_benefit_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  linkBenefitUse: "" | "Y" | "N";

  @Column("enum", {
    name: "link_benefit_type",
    enum: ["", "DISCOUNT", "RESERVE", "FREEDELI", "POINT"],
    default: () => "'DISCOUNT'",
  })
  linkBenefitType: "" | "DISCOUNT" | "RESERVE" | "FREEDELI" | "POINT";

  @Column("enum", {
    name: "link_benefit_term",
    enum: ["", "DAY", "WEEK", "MONTH", "UNLIMIT"],
    default: () => "'DAY'",
  })
  linkBenefitTerm: "" | "DAY" | "WEEK" | "MONTH" | "UNLIMIT";

  @Column("smallint", {
    name: "link_benefit_count",
    unsigned: true,
    default: () => "'1'",
  })
  linkBenefitCount: number;

  @Column("smallint", {
    name: "link_benefit_floor_position",
    unsigned: true,
    default: () => "'0'",
  })
  linkBenefitFloorPosition: number;

  @Column("int", {
    name: "link_benefit_minimum_price",
    nullable: true,
    unsigned: true,
  })
  linkBenefitMinimumPrice: number | null;

  @Column("int", { name: "link_benefit_rate", nullable: true, unsigned: true })
  linkBenefitRate: number | null;

  @Column("enum", {
    name: "link_benefit_unit",
    nullable: true,
    enum: ["", "PRICE", "PERCENT", "MULTI"],
  })
  linkBenefitUnit: "" | "PRICE" | "PERCENT" | "MULTI" | null;

  @Column("enum", {
    name: "link_benefit_group",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  linkBenefitGroup: "" | "Y" | "N";

  @Column("enum", {
    name: "link_benefit_cash",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  linkBenefitCash: "" | "Y" | "N";

  @Column("enum", {
    name: "link_benefit_coupon",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  linkBenefitCoupon: "" | "Y" | "N";

  @Column("enum", {
    name: "link_benefit_discount",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  linkBenefitDiscount: "" | "Y" | "N";

  @Column("mediumtext", { name: "link_benefit_banner", nullable: true })
  linkBenefitBanner: string | null;
}
