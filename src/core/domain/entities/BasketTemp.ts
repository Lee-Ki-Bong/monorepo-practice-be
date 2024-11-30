import { Column, Entity, Index } from "typeorm";

@Index("adminbrand", ["adminuser", "brandcode"], {})
@Index("admindate", ["adminuser", "date"], {})
@Index("option_type", ["adminuser", "optionType"], {})
@Index("stock_id", ["adminuser", "uid", "stockId"], {})
@Entity("basket_temp", { schema: "makeshop" })
export class BasketTemp {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "tempid", length: 32 })
  tempid: string;

  @Column("int", { name: "uid", unsigned: true, default: () => "'0'" })
  uid: number;

  @Column("varchar", { primary: true, name: "brandcode", length: 12 })
  brandcode: string;

  @Column("int", {
    primary: true,
    name: "stock_id",
    unsigned: true,
    default: () => "'1'",
  })
  stockId: number;

  @Column("enum", {
    name: "option_type",
    enum: ["", "NO", "NU", "NL", "OC", "PC", "PP", "PS"],
    default: () => "'NO'",
  })
  optionType: "" | "NO" | "NU" | "NL" | "OC" | "PC" | "PP" | "PS";

  @Column("tinyint", { primary: true, name: "spcode", default: () => "'0'" })
  spcode: number;

  @Column("tinyint", { primary: true, name: "spcode2", default: () => "'0'" })
  spcode2: number;

  @Column("varchar", {
    primary: true,
    name: "optcode",
    length: 200,
    default: () => "'0'",
  })
  optcode: string;

  @Column("varchar", { primary: true, name: "optioncode", length: 32 })
  optioncode: string;

  @Column("mediumtext", { name: "optionvalue" })
  optionvalue: string;

  @Column("int", { name: "amount", nullable: true, default: () => "'0'" })
  amount: number | null;

  @Column("varchar", { name: "date", nullable: true, length: 12 })
  date: string | null;

  @Column("varchar", { name: "id", nullable: true, length: 20 })
  id: string | null;

  @Column("varchar", { name: "pack_uid", length: 80 })
  packUid: string;

  @Column("varchar", { name: "linkurl", nullable: true, length: 50 })
  linkurl: string | null;

  @Column("varchar", { name: "ad_url", nullable: true, length: 250 })
  adUrl: string | null;

  @Column("enum", {
    name: "pay_path",
    enum: ["", "WEB", "MOBILE", "POWERAPP"],
    default: () => "'WEB'",
  })
  payPath: "" | "WEB" | "MOBILE" | "POWERAPP";

  @Column("int", {
    name: "smartpickup_store_uid",
    unsigned: true,
    default: () => "'0'",
  })
  smartpickupStoreUid: number;

  @Column("date", {
    name: "smartpickup_wishdate",
    default: () => "'0000-00-00'",
  })
  smartpickupWishdate: string;

  @Column("varchar", { name: "etctype", length: 255 })
  etctype: string;
}
