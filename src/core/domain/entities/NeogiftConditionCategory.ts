import { Column, Entity } from "typeorm";

@Entity("neogift_condition_category", { schema: "makeshop" })
export class NeogiftConditionCategory {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "gift_code",
    unsigned: true,
    default: () => "'0'",
  })
  giftCode: number;

  @Column("char", { primary: true, name: "cate1", length: 3 })
  cate1: string;

  @Column("char", { primary: true, name: "cate2", length: 3 })
  cate2: string;

  @Column("char", { primary: true, name: "cate3", length: 3 })
  cate3: string;
}
