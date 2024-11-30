import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("gift_gid", ["giftGid"], {})
@Entity("neogift_group", { schema: "makeshop" })
export class NeogiftGroup {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "gift_code",
    unsigned: true,
    default: () => "'0'",
  })
  giftCode: number;

  @PrimaryGeneratedColumn({ type: "int", name: "gift_gid", unsigned: true })
  giftGid: number;

  @Column("int", {
    name: "gift_min_price",
    unsigned: true,
    default: () => "'0'",
  })
  giftMinPrice: number;

  @Column("int", {
    name: "gift_max_price",
    unsigned: true,
    default: () => "'0'",
  })
  giftMaxPrice: number;

  @Column("smallint", {
    name: "gift_count",
    unsigned: true,
    default: () => "'0'",
  })
  giftCount: number;

  @Column("int", {
    name: "gift_add_price",
    unsigned: true,
    default: () => "'0'",
  })
  giftAddPrice: number;

  @Column("enum", {
    name: "gift_add_unit",
    enum: ["", "W", "P"],
    default: () => "'W'",
  })
  giftAddUnit: "" | "W" | "P";
}
