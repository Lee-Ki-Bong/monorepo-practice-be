import { Column, Entity, Index } from "typeorm";

@Index("index_discount_uid", ["adminuser", "discountUid"], {})
@Entity("product_discount_set", { schema: "makeshop" })
export class ProductDiscountSet {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "product_uid",
    unsigned: true,
    default: () => "'0'",
  })
  productUid: number;

  @Column("enum", {
    primary: true,
    name: "device",
    enum: ["", "pc", "mobile"],
    default: () => "'pc'",
  })
  device: "" | "pc" | "mobile";

  @Column("int", {
    primary: true,
    name: "discount_uid",
    unsigned: true,
    default: () => "'0'",
  })
  discountUid: number;
}
