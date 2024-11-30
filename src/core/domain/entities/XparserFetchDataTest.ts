import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("xparser_fetch_data_test", { schema: "makeshop" })
export class XparserFetchDataTest {
  @PrimaryGeneratedColumn({ type: "int", name: "pid" })
  pid: number;

  @Column("int", { name: "sid", default: () => "'0'" })
  sid: number;

  @Column("varchar", { name: "shop_id", length: 50 })
  shopId: string;

  @Column("int", { name: "ist_no", default: () => "'0'" })
  istNo: number;

  @Column("varchar", { name: "pdt_name", length: 100 })
  pdtName: string;

  @Column("varchar", { name: "pdt_category", length: 12 })
  pdtCategory: string;

  @Column("varchar", { name: "pdt_company", length: 20 })
  pdtCompany: string;

  @Column("varchar", { name: "pdt_country", length: 30 })
  pdtCountry: string;

  @Column("varchar", { name: "pdt_model", length: 50 })
  pdtModel: string;

  @Column("varchar", { name: "pdt_brand", length: 50 })
  pdtBrand: string;

  @Column("int", {
    name: "pdt_customer_price",
    unsigned: true,
    default: () => "'0'",
  })
  pdtCustomerPrice: number;

  @Column("int", {
    name: "pdt_buy_price",
    unsigned: true,
    default: () => "'0'",
  })
  pdtBuyPrice: number;

  @Column("int", {
    name: "pdt_ori_price",
    unsigned: true,
    default: () => "'0'",
  })
  pdtOriPrice: number;

  @Column("int", {
    name: "pdt_bonus_cash",
    unsigned: true,
    default: () => "'0'",
  })
  pdtBonusCash: number;

  @Column("varchar", { name: "pdt_qty", length: 11, default: () => "'0'" })
  pdtQty: string;

  @Column("int", { name: "pdt_qty_min", nullable: true, unsigned: true })
  pdtQtyMin: number | null;

  @Column("int", { name: "pdt_qty_max", nullable: true, unsigned: true })
  pdtQtyMax: number | null;

  @Column("varchar", { name: "pdt_opt1", nullable: true, length: 250 })
  pdtOpt1: string | null;

  @Column("varchar", { name: "pdt_opt1_price", nullable: true, length: 250 })
  pdtOpt1Price: string | null;

  @Column("varchar", { name: "pdt_opt2", nullable: true, length: 250 })
  pdtOpt2: string | null;

  @Column("varchar", { name: "pdt_keyword", nullable: true, length: 100 })
  pdtKeyword: string | null;

  @Column("varchar", { name: "pdt_ect", nullable: true, length: 200 })
  pdtEct: string | null;

  @Column("varchar", { name: "pdt_img", nullable: true, length: 255 })
  pdtImg: string | null;

  @Column("mediumtext", { name: "pdt_desc", nullable: true })
  pdtDesc: string | null;

  @Column("varchar", { name: "pdt_supply", nullable: true, length: 10 })
  pdtSupply: string | null;

  @Column("int", { name: "pdt_open", nullable: true, unsigned: true })
  pdtOpen: number | null;

  @Column("char", { name: "pdt_comm_dp", length: 1, default: () => "'N'" })
  pdtCommDp: string;

  @Column("char", { name: "pdt_display", length: 1, default: () => "'Y'" })
  pdtDisplay: string;

  @Column("varchar", { name: "pdt_instead_price", nullable: true, length: 20 })
  pdtInsteadPrice: string | null;

  @Column("char", { name: "pdt_cash_only", length: 1, default: () => "'N'" })
  pdtCashOnly: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("char", { name: "fin_flag", length: 1, default: () => "'T'" })
  finFlag: string;

  @Column("char", { name: "schedule_flag", length: 1, default: () => "'F'" })
  scheduleFlag: string;
}
