import { Column, Entity } from "typeorm";

@Entity("neogift_condition_product", { schema: "makeshop" })
export class NeogiftConditionProduct {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "gift_code",
    unsigned: true,
    default: () => "'0'",
  })
  giftCode: number;

  @Column("int", { primary: true, name: "uid", default: () => "'0'" })
  uid: number;
}
