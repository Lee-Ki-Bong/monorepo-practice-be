import { Column, Entity, Index } from "typeorm";

@Index("adminbrand", ["adminuser", "brandcode"], {})
@Index("admindate", ["adminuser", "date"], {})
@Index("option_type", ["adminuser", "optionType"], {})
@Entity("basket_return", { schema: "makeshop" })
export class BasketReturn {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "tempid", length: 48 })
  tempid: string;

  @Column("varchar", { name: "brandcode", length: 12 })
  brandcode: string;

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
    length: 32,
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

  @Column("varchar", { name: "id", nullable: true, length: 13 })
  id: string | null;

  @Column("int", { name: "price", nullable: true })
  price: number | null;

  @Column("int", { name: "reserve", nullable: true, default: () => "'0'" })
  reserve: number | null;

  @Column("mediumtext", { name: "log", nullable: true })
  log: string | null;

  @Column("int", {
    primary: true,
    name: "product_uid",
    unsigned: true,
    default: () => "'0'",
  })
  productUid: number;
}
