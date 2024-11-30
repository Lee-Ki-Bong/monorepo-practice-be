import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_num", ["num"], {})
@Index("reg_date", ["adminuser", "regDate"], {})
@Entity("checkout_basket", { schema: "makeshop" })
export class CheckoutBasket {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "checkout_order_id", length: 20 })
  checkoutOrderId: string;

  @PrimaryGeneratedColumn({ type: "int", name: "num", unsigned: true })
  num: number;

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

  @Column("char", { name: "product_cate1", length: 3 })
  productCate1: string;

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

  @Column("int", { name: "option_price", default: () => "'0'" })
  optionPrice: number;

  @Column("varchar", { name: "option_type", length: 12, default: () => "'NO'" })
  optionType: string;

  @Column("mediumtext", { name: "option_data", nullable: true })
  optionData: string | null;

  @Column("mediumtext", { name: "api_option_data", nullable: true })
  apiOptionData: string | null;

  @Column("int", { name: "provider", unsigned: true, default: () => "'0'" })
  provider: number;

  @Column("mediumtext", { name: "etctype", nullable: true })
  etctype: string | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'1001-01-01 00:00:00'",
  })
  regDate: Date;
}
