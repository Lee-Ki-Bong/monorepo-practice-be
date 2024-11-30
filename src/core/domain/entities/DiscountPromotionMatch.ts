import { Column, Entity } from "typeorm";

@Entity("discount_promotion_match", { schema: "makeshop" })
export class DiscountPromotionMatch {
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
    name: "promotion_type",
    enum: ["", "BULK"],
    default: () => "'BULK'",
  })
  promotionType: "" | "BULK";

  @Column("varchar", {
    primary: true,
    name: "promotion_id",
    length: 255,
    default: () => "'0'",
  })
  promotionId: string;
}
