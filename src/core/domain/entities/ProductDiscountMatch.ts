import { Column, Entity, Index } from "typeorm";

@Index("product_discount_uid", ["adminuser", "productDiscountUid"], {})
@Entity("product_discount_match", { schema: "makeshop" })
export class ProductDiscountMatch {
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
    name: "product_discount_uid",
    unsigned: true,
    default: () => "'0'",
  })
  productDiscountUid: number;
}
