import { Column, Entity, Index } from "typeorm";

@Index("opt_ids", ["adminuser", "uid", "optIds"], {})
@Entity("oo_hybrid_option", { schema: "makeshop" })
export class OoHybridOption {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", {
    primary: true,
    name: "basket_num",
    unsigned: true,
    default: () => "'0'",
  })
  basketNum: number;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("int", {
    primary: true,
    name: "sto_id",
    unsigned: true,
    default: () => "'0'",
  })
  stoId: number;

  @Column("varchar", { primary: true, name: "opt_ids", length: 100 })
  optIds: string;

  @Column("varchar", { name: "opt_name", length: 100 })
  optName: string;

  @Column("enum", {
    name: "option_type",
    enum: ["", "NO", "PC", "PP", "PS", "BASIC", "ADDITION", "DIY", "HYBRID"],
    default: () => "'NO'",
  })
  optionType:
    | ""
    | "NO"
    | "PC"
    | "PP"
    | "PS"
    | "BASIC"
    | "ADDITION"
    | "DIY"
    | "HYBRID";

  @Column("int", { name: "opt_price", default: () => "'0'" })
  optPrice: number;

  @Column("int", { name: "opt_stock", default: () => "'0'" })
  optStock: number;

  @Column("mediumtext", { name: "opt_value", nullable: true })
  optValue: string | null;

  @Column("varchar", { name: "option_image", length: 255 })
  optionImage: string;

  @Column("varchar", { name: "option_detail_image", length: 255 })
  optionDetailImage: string;

  @Column("int", {
    primary: true,
    name: "trade_num",
    unsigned: true,
    default: () => "'0'",
  })
  tradeNum: number;

  @Column("enum", {
    primary: true,
    name: "order_type",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  orderType: "" | "Y" | "N";

  @Column("varchar", { name: "trade_type", length: 12 })
  tradeType: string;
}
