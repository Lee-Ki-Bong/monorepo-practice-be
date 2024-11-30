import { Column, Entity } from "typeorm";

@Entity("brand_product_list", { schema: "makeshop" })
export class BrandProductList {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "brand_id",
    unsigned: true,
    default: () => "'0'",
  })
  brandId: number;

  @Column("int", {
    primary: true,
    name: "brand_mid",
    unsigned: true,
    default: () => "'0'",
  })
  brandMid: number;

  @Column("int", {
    primary: true,
    name: "brand_sid",
    unsigned: true,
    default: () => "'0'",
  })
  brandSid: number;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "upd_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  updDate: Date;

  @Column("enum", {
    name: "display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  display: "" | "Y" | "N";

  @Column("int", { name: "x_sort", unsigned: true, default: () => "'0'" })
  xSort: number;

  @Column("int", { name: "m_sort", unsigned: true, default: () => "'0'" })
  mSort: number;

  @Column("int", { name: "s_sort", unsigned: true, default: () => "'0'" })
  sSort: number;
}
