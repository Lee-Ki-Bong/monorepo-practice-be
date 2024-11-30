import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser", ["adminuser", "largeNum", "lolIdx", "lobIdx"], {
  unique: true,
})
@Index("idx_auto_lob_idx", ["lobIdx"], {})
@Entity("large_order_basket", { schema: "makeshop" })
export class LargeOrderBasket {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { name: "large_num", unsigned: true, default: () => "'0'" })
  largeNum: number;

  @Column("int", {
    primary: true,
    name: "lol_idx",
    unsigned: true,
    default: () => "'0'",
  })
  lolIdx: number;

  @PrimaryGeneratedColumn({ type: "int", name: "lob_idx" })
  lobIdx: number;

  @Column("varchar", { name: "brandcode", length: 12 })
  brandcode: string;

  @Column("int", { name: "product_uid", unsigned: true, default: () => "'0'" })
  productUid: number;

  @Column("int", {
    name: "prd_option_uid",
    unsigned: true,
    default: () => "'0'",
  })
  prdOptionUid: number;

  @Column("varchar", { name: "product_name", length: 255 })
  productName: string;

  @Column("smallint", { name: "basket_stock", default: () => "'0'" })
  basketStock: number;

  @Column("int", { name: "sell_price", default: () => "'0'" })
  sellPrice: number;

  @Column("int", { name: "product_price", default: () => "'0'" })
  productPrice: number;

  @Column("int", {
    name: "product_buyprice",
    unsigned: true,
    default: () => "'0'",
  })
  productBuyprice: number;

  @Column("int", {
    name: "product_reserve",
    unsigned: true,
    default: () => "'0'",
  })
  productReserve: number;

  @Column("int", { name: "option_price", default: () => "'0'" })
  optionPrice: number;

  @Column("enum", {
    name: "option_type",
    enum: ["", "NO", "PC", "PP", "PS", "BASIC", "ADDITION"],
    default: () => "'NO'",
  })
  optionType: "" | "NO" | "PC" | "PP" | "PS" | "BASIC" | "ADDITION";

  @Column("varchar", { name: "option_data", length: 255 })
  optionData: string;

  @Column("int", { name: "plus_price", default: () => "'0'" })
  plusPrice: number;

  @Column("int", { name: "plus_reserve", default: () => "'0'" })
  plusReserve: number;

  @Column("datetime", {
    name: "add_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  addDate: Date;

  @Column("enum", {
    name: "stock_chk",
    enum: ["", "HAVE", "NOT"],
    default: () => "'HAVE'",
  })
  stockChk: "" | "HAVE" | "NOT";

  @Column("int", { name: "provider", unsigned: true, default: () => "'0'" })
  provider: number;
}
