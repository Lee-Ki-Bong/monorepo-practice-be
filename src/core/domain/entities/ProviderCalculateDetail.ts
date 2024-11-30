import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_pcd_id", ["pcdId"], {})
@Entity("provider_calculate_detail", { schema: "makeshop" })
export class ProviderCalculateDetail {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "pc_id",
    unsigned: true,
    default: () => "'0'",
  })
  pcId: number;

  @PrimaryGeneratedColumn({ type: "int", name: "pcd_id", unsigned: true })
  pcdId: number;

  @Column("varchar", { name: "ordernum", length: 50 })
  ordernum: string;

  @Column("int", { name: "basket_num", unsigned: true, default: () => "'1'" })
  basketNum: number;

  @Column("char", { name: "paymethod", length: 2, default: () => "'B'" })
  paymethod: string;

  @Column("int", {
    name: "product_price",
    unsigned: true,
    default: () => "'0'",
  })
  productPrice: number;

  @Column("int", {
    name: "product_buyprice",
    unsigned: true,
    default: () => "'0'",
  })
  productBuyprice: number;

  @Column("int", { name: "option_price", default: () => "'0'" })
  optionPrice: number;

  @Column("int", { name: "discount_price", default: () => "'0'" })
  discountPrice: number;

  @Column("int", { name: "add_price", default: () => "'0'" })
  addPrice: number;

  @Column("int", { name: "sell_price", unsigned: true, default: () => "'0'" })
  sellPrice: number;

  @Column("int", { name: "deli_price", unsigned: true, default: () => "'0'" })
  deliPrice: number;

  @Column("int", { name: "redeli_price", unsigned: true, default: () => "'0'" })
  redeliPrice: number;

  @Column("int", { name: "shop_benefit", default: () => "'0'" })
  shopBenefit: number;

  @Column("int", { name: "pvd_benefit", default: () => "'0'" })
  pvdBenefit: number;

  @Column("float", {
    name: "pvd_commission",
    unsigned: true,
    precision: 12,
    default: () => "'0'",
  })
  pvdCommission: number;

  @Column("enum", {
    name: "pvd_burden",
    enum: ["", "SHOP", "PROVIDER"],
    default: () => "'SHOP'",
  })
  pvdBurden: "" | "SHOP" | "PROVIDER";

  @Column("enum", {
    name: "cal_type",
    nullable: true,
    enum: ["", "REQUEST", "CANCEL", "DONE"],
    default: () => "'REQUEST'",
  })
  calType: "" | "REQUEST" | "CANCEL" | "DONE" | null;

  @Column("datetime", {
    name: "req_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  reqDate: Date;

  @Column("datetime", {
    name: "cal_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  calDate: Date;
}
