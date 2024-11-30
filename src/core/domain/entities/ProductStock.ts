import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_sto_id", ["stoId"], {})
@Index("opt_ids", ["adminuser", "uid", "optIds"], {})
@Index("opt_values", ["adminuser", "uid", "optValues"], {})
@Index("sto_code", ["adminuser", "uid", "stoCode"], {})
@Index("sto_real_stock", ["adminuser", "uid", "stoRealStock"], {})
@Index("sto_sort", ["adminuser", "uid", "stoSort"], {})
@Index("sto_unlimit", ["adminuser", "uid", "stoUnlimit"], {})
@Entity("product_stock", { schema: "makeshop" })
export class ProductStock {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "sto_id", unsigned: true })
  stoId: number;

  @Column("varchar", { name: "opt_ids", length: 100 })
  optIds: string;

  @Column("enum", {
    name: "sto_type",
    enum: ["", "BASIC", "ADDITION", "DUMMY"],
    default: () => "'BASIC'",
  })
  stoType: "" | "BASIC" | "ADDITION" | "DUMMY";

  @Column("int", { name: "sto_sort", default: () => "'0'" })
  stoSort: number;

  @Column("varchar", { name: "sto_matrix", length: 200 })
  stoMatrix: string;

  @Column("varchar", { name: "sto_code", length: 50 })
  stoCode: string;

  @Column("varchar", { name: "opt_values", length: 200 })
  optValues: string;

  @Column("int", { name: "sto_price", default: () => "'0'" })
  stoPrice: number;

  @Column("int", { name: "sto_provide_price", default: () => "'0'" })
  stoProvidePrice: number;

  @Column("int", { name: "sto_real_stock", default: () => "'0'" })
  stoRealStock: number;

  @Column("enum", {
    name: "sto_unlimit",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  stoUnlimit: "" | "Y" | "N";

  @Column("enum", {
    name: "sto_check",
    enum: ["", "ORDER", "PAY"],
    default: () => "'ORDER'",
  })
  stoCheck: "" | "ORDER" | "PAY";

  @Column("enum", {
    name: "sto_stop_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  stoStopUse: "" | "Y" | "N";

  @Column("int", { name: "sto_stop_stock", default: () => "'0'" })
  stoStopStock: number;

  @Column("enum", {
    name: "sto_stop_send",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  stoStopSend: "" | "Y" | "N";

  @Column("datetime", { name: "sto_stop_date", nullable: true })
  stoStopDate: Date | null;

  @Column("enum", {
    name: "sto_safe_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  stoSafeUse: "" | "Y" | "N";

  @Column("int", { name: "sto_safe_stock", default: () => "'0'" })
  stoSafeStock: number;

  @Column("enum", {
    name: "sto_safe_send",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  stoSafeSend: "" | "Y" | "N";

  @Column("datetime", { name: "sto_safe_date", nullable: true })
  stoSafeDate: Date | null;

  @Column("int", {
    name: "sto_order_stock",
    unsigned: true,
    default: () => "'0'",
  })
  stoOrderStock: number;

  @Column("enum", {
    name: "sto_state",
    enum: ["", "HIDE", "SOLDOUT", "TEMPOUT", "DELAY", "SALE"],
    default: () => "'SALE'",
  })
  stoState: "" | "HIDE" | "SOLDOUT" | "TEMPOUT" | "DELAY" | "SALE";

  @Column("varchar", { name: "sto_note", nullable: true, length: 100 })
  stoNote: string | null;

  @Column("mediumtext", { name: "sto_smartpickup", nullable: true })
  stoSmartpickup: string | null;

  @Column("varchar", { name: "sto_image", length: 255 })
  stoImage: string;

  @Column("varchar", { name: "sto_detail_image", length: 255 })
  stoDetailImage: string;

  @Column("enum", {
    name: "sto_max_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  stoMaxUse: "" | "Y" | "N";

  @Column("varchar", { name: "sto_max", nullable: true, length: 10 })
  stoMax: string | null;

  @Column("enum", {
    name: "sto_min_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  stoMinUse: "" | "Y" | "N";

  @Column("varchar", {
    name: "sto_min",
    nullable: true,
    length: 10,
    default: () => "'1'",
  })
  stoMin: string | null;

  @Column("varchar", { name: "sto_option_code", length: 50 })
  stoOptionCode: string;

  @Column("varchar", { name: "sto_rack_code", length: 50 })
  stoRackCode: string;

  @Column("varchar", { name: "sto_permission_num", length: 50 })
  stoPermissionNum: string;

  @Column("int", {
    name: "sto_seil_wholesale_price",
    unsigned: true,
    default: () => "'0'",
  })
  stoSeilWholesalePrice: number;

  @Column("int", {
    name: "sto_seil_buy_price",
    unsigned: true,
    default: () => "'0'",
  })
  stoSeilBuyPrice: number;

  @Column("enum", {
    name: "sto_b2b_sync",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  stoB2bSync: "" | "Y" | "N";

  @Column("varchar", { name: "sto_seil_sp_code", length: 50 })
  stoSeilSpCode: string;

  @Column("varchar", { name: "sto_seil_ref", length: 50 })
  stoSeilRef: string;
}
