import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_stock_id", ["stockId"], {})
@Index("opt_value", ["adminuser", "uid", "optValue"], { unique: true })
@Index("order_time", ["adminuser", "orderTime"], {})
@Index("r_stock", ["adminuser", "rStock", "uid"], {})
@Index("sale", ["adminuser", "uid", "sale"], {})
@Index("sort", ["adminuser", "uid", "sort"], {})
@Entity("product_option_stock", { schema: "makeshop" })
export class ProductOptionStock {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "stock_id", unsigned: true })
  stockId: number;

  @Column("mediumint", { name: "sort", unsigned: true, default: () => "'0'" })
  sort: number;

  @Column("varchar", { name: "barcode", length: 16 })
  barcode: string;

  @Column("varchar", { name: "prd_code", length: 20 })
  prdCode: string;

  @Column("varchar", { name: "opt_value", length: 255 })
  optValue: string;

  @Column("int", { name: "opt_price", default: () => "'0'" })
  optPrice: number;

  @Column("int", {
    name: "r_stock",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  rStock: number | null;

  @Column("int", { name: "v_stock", unsigned: true, default: () => "'0'" })
  vStock: number;

  @Column("enum", { name: "sale", enum: ["", "Y", "N"], default: () => "'Y'" })
  sale: "" | "Y" | "N";

  @Column("int", { name: "order_count", unsigned: true, default: () => "'0'" })
  orderCount: number;

  @Column("datetime", {
    name: "order_time",
    default: () => "'0000-00-00 00:00:00'",
  })
  orderTime: Date;

  @Column("varchar", { name: "makefran_uid", length: 14, default: () => "'0'" })
  makefranUid: string;

  @Column("mediumtext", { name: "note" })
  note: string;

  @Column("mediumtext", { name: "sto_smartpickup", nullable: true })
  stoSmartpickup: string | null;

  @Column("varchar", { name: "option_code", length: 50 })
  optionCode: string;

  @Column("varchar", { name: "rack_code", length: 50 })
  rackCode: string;

  @Column("varchar", { name: "permission_num", length: 50 })
  permissionNum: string;

  @Column("int", {
    name: "seil_wholesale_price",
    unsigned: true,
    default: () => "'0'",
  })
  seilWholesalePrice: number;

  @Column("int", {
    name: "seil_buy_price",
    unsigned: true,
    default: () => "'0'",
  })
  seilBuyPrice: number;

  @Column("char", { name: "opt_term", length: 1 })
  optTerm: string;

  @Column("char", { name: "opt_cycle", length: 2 })
  optCycle: string;

  @Column("enum", {
    name: "b2b_sync",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  b2bSync: "" | "Y" | "N" | null;

  @Column("varchar", { name: "seil_sp_code", length: 50 })
  seilSpCode: string;
}
