import { Column, Entity } from "typeorm";

@Entity("malltalk_benefit", { schema: "makeshop" })
export class MalltalkBenefit {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "coupon_status",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  couponStatus: "" | "N" | "Y";

  @Column("varchar", { name: "coupon_num", nullable: true, length: 20 })
  couponNum: string | null;

  @Column("mediumtext", { name: "coupon_message", nullable: true })
  couponMessage: string | null;

  @Column("enum", {
    name: "bookmark_status",
    enum: ["", "N", "SALE", "RESERVE", "DELIVERY"],
    default: () => "'N'",
  })
  bookmarkStatus: "" | "N" | "SALE" | "RESERVE" | "DELIVERY";

  @Column("int", {
    name: "bookmark_sale_price",
    nullable: true,
    unsigned: true,
  })
  bookmarkSalePrice: number | null;

  @Column("int", { name: "bookmark_reserve", nullable: true, unsigned: true })
  bookmarkReserve: number | null;
}
