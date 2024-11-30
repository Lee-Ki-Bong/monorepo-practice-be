import { Column, Entity, Index } from "typeorm";

@Index("package", ["adminuser", "packUid"], {})
@Entity("product_package", { schema: "makeshop" })
export class ProductPackage {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "pack_uid",
    unsigned: true,
    default: () => "'0'",
  })
  packUid: number;

  @Column("tinyint", { name: "product_sort", default: () => "'1'" })
  productSort: number;

  @Column("enum", {
    name: "reserve",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  reserve: "" | "Y" | "N";

  @Column("enum", {
    name: "discount_type",
    nullable: true,
    enum: ["", "ORIGINAL", "DISCOUNT", "FIX"],
    default: () => "'ORIGINAL'",
  })
  discountType: "" | "ORIGINAL" | "DISCOUNT" | "FIX" | null;

  @Column("varchar", {
    name: "discount_money",
    length: 10,
    default: () => "'0'",
  })
  discountMoney: string;

  @Column("enum", {
    name: "discount_condition",
    enum: ["", "ALL", "COUNT"],
    default: () => "'ALL'",
  })
  discountCondition: "" | "ALL" | "COUNT";

  @Column("char", { name: "min_count", length: 3 })
  minCount: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("int", {
    name: "product_price",
    nullable: true,
    default: () => "'0'",
  })
  productPrice: number | null;

  @Column("int", {
    name: "product_amount",
    nullable: true,
    default: () => "'0'",
  })
  productAmount: number | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;

  @Column("enum", {
    name: "pack_set_limit",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  packSetLimit: "" | "Y" | "N";

  @Column("int", {
    name: "pack_min_quantity",
    nullable: true,
    default: () => "'0'",
  })
  packMinQuantity: number | null;
}
