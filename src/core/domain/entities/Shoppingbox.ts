import { Column, Entity } from "typeorm";

@Entity("shoppingbox", { schema: "makeshop" })
export class Shoppingbox {
  @Column("varchar", { primary: true, name: "date", length: 8 })
  date: string;

  @Column("varchar", { primary: true, name: "mallname", length: 50 })
  mallname: string;

  @Column("varchar", { primary: true, name: "shopid", length: 50 })
  shopid: string;

  @Column("varchar", { primary: true, name: "category", length: 50 })
  category: string;

  @Column("varchar", { primary: true, name: "media", length: 50 })
  media: string;

  @Column("varchar", { primary: true, name: "aditem", length: 50 })
  aditem: string;

  @Column("varchar", { primary: true, name: "product", length: 50 })
  product: string;

  @Column("varchar", { name: "tool", length: 50 })
  tool: string;

  @Column("int", {
    primary: true,
    name: "account",
    unsigned: true,
    default: () => "'0'",
  })
  account: number;

  @Column("int", {
    name: "ad",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  ad: number | null;

  @Column("int", {
    name: "click",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  click: number | null;

  @Column("int", {
    name: "buy",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  buy: number | null;

  @Column("int", {
    name: "sale",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  sale: number | null;

  @Column("int", {
    name: "ppc",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  ppc: number | null;

  @Column("decimal", {
    name: "change",
    nullable: true,
    precision: 3,
    scale: 2,
    default: () => "'0.00'",
  })
  change: string | null;

  @Column("int", {
    name: "roas",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  roas: number | null;
}
