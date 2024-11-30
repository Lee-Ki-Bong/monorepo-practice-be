import { Column, Entity, Index } from "typeorm";

@Index("brand_product_sort", ["adminuser", "brandId", "brandProductSort"], {})
@Entity("brand_product", { schema: "makeshop" })
export class BrandProduct {
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
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("int", {
    name: "brand_product_sort",
    unsigned: true,
    default: () => "'0'",
  })
  brandProductSort: number;

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
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  display: "" | "Y" | "N" | null;
}
