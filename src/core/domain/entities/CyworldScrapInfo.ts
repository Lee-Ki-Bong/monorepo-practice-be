import { Column, Entity } from "typeorm";

@Entity("cyworld_scrap_info", { schema: "makeshop" })
export class CyworldScrapInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "sid", nullable: true, length: 20 })
  sid: string | null;

  @Column("enum", {
    name: "state",
    enum: ["", "off", "waiting", "return-1", "return-2", "ok"],
    default: () => "'off'",
  })
  state: "" | "off" | "waiting" | "return-1" | "return-2" | "ok";

  @Column("mediumtext", { name: "message", nullable: true })
  message: string | null;

  @Column("varchar", { name: "shop_name", length: 50 })
  shopName: string;

  @Column("varchar", { name: "applicant", length: 12 })
  applicant: string;

  @Column("varchar", { name: "contact", length: 12 })
  contact: string;

  @Column("mediumint", {
    name: "category",
    unsigned: true,
    default: () => "'1'",
  })
  category: number;

  @Column("varchar", {
    name: "celphone",
    length: 13,
    default: () => "'000-0000-0000'",
  })
  celphone: string;

  @Column("varchar", {
    name: "telphone",
    length: 13,
    default: () => "'000-0000-0000'",
  })
  telphone: string;

  @Column("varchar", { name: "email_addr", length: 40 })
  emailAddr: string;

  @Column("text", { name: "shop_info" })
  shopInfo: string;

  @Column("varchar", { name: "link_title", nullable: true, length: 100 })
  linkTitle: string | null;

  @Column("varchar", { name: "link_url", nullable: true, length: 100 })
  linkUrl: string | null;

  @Column("varchar", { name: "text_content", nullable: true, length: 140 })
  textContent: string | null;

  @Column("varchar", { name: "benefit", nullable: true, length: 140 })
  benefit: string | null;

  @Column("char", {
    name: "scrap_button",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  scrapButton: string | null;

  @Column("char", {
    name: "use_scrap",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  useScrap: string | null;

  @Column("enum", {
    name: "scrap_for",
    nullable: true,
    enum: ["", "all", "member"],
    default: () => "'member'",
  })
  scrapFor: "" | "all" | "member" | null;

  @Column("enum", {
    name: "scrap_group",
    nullable: true,
    enum: ["", "all", "category", "products"],
    default: () => "'all'",
  })
  scrapGroup: "" | "all" | "category" | "products" | null;

  @Column("enum", {
    name: "scrap_type",
    nullable: true,
    enum: ["", "allowed", "banned"],
    default: () => "'allowed'",
  })
  scrapType: "" | "allowed" | "banned" | null;

  @Column("enum", {
    name: "image_size",
    enum: ["", "large", "medium", "small"],
    default: () => "'medium'",
  })
  imageSize: "" | "large" | "medium" | "small";

  @Column("datetime", {
    name: "moddate",
    default: () => "'0000-00-00 00:00:00'",
  })
  moddate: Date;
}
