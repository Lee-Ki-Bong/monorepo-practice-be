import { Column, Entity, Index } from "typeorm";

@Index(
  "product_date",
  ["adminuser", "cdProductUid", "cdStartDate", "cdEndDate"],
  {}
)
@Entity("custom_discount_time_product", { schema: "makeshop" })
export class CustomDiscountTimeProduct {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "cd_idx",
    unsigned: true,
    default: () => "'0'",
  })
  cdIdx: number;

  @Column("int", {
    primary: true,
    name: "cd_product_uid",
    unsigned: true,
    default: () => "'0'",
  })
  cdProductUid: number;

  @Column("int", {
    name: "cd_product_idx",
    unsigned: true,
    default: () => "'0'",
  })
  cdProductIdx: number;

  @Column("int", { name: "cd_discount_price", default: () => "'0'" })
  cdDiscountPrice: number;

  @Column("datetime", {
    name: "cd_start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  cdStartDate: Date;

  @Column("datetime", {
    name: "cd_end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  cdEndDate: Date;
}
