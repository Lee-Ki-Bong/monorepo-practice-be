import { Column, Entity } from "typeorm";

@Entity("usergroup_option", { schema: "makeshop" })
export class UsergroupOption {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "usergroup_code", length: 4 })
  usergroupCode: string;

  @Column("enum", {
    name: "discount_target",
    nullable: true,
    enum: ["", "ALL", "EACH", "NONE"],
    default: () => "'NONE'",
  })
  discountTarget: "" | "ALL" | "EACH" | "NONE" | null;

  @Column("enum", {
    name: "buyable_type",
    enum: ["", "NONE", "PRICE", "QUANTITY"],
    default: () => "'NONE'",
  })
  buyableType: "" | "NONE" | "PRICE" | "QUANTITY";

  @Column("int", { name: "buyable_amount", nullable: true, unsigned: true })
  buyableAmount: number | null;

  @Column("enum", {
    name: "buyable_range",
    nullable: true,
    enum: ["", "MORE", "LESS"],
  })
  buyableRange: "" | "MORE" | "LESS" | null;

  @Column("enum", {
    name: "buyable_flag",
    nullable: true,
    enum: ["", "Y", "N"],
  })
  buyableFlag: "" | "Y" | "N" | null;

  @Column("enum", { name: "use_coupon", nullable: true, enum: ["", "Y", "N"] })
  useCoupon: "" | "Y" | "N" | null;

  @Column("varchar", { name: "coupon_item", nullable: true, length: 50 })
  couponItem: string | null;

  @Column("enum", {
    name: "sellprice_option_type",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  sellpriceOptionType: "" | "Y" | "N" | null;

  @Column("char", { name: "discount_code", length: 3 })
  discountCode: string;
}
