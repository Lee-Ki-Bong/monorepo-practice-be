import { Column, Entity } from "typeorm";

@Entity("neogift_condition_uids", { schema: "makeshop" })
export class NeogiftConditionUids {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "gift_code",
    unsigned: true,
    default: () => "'0'",
  })
  giftCode: number;

  @Column("enum", {
    primary: true,
    name: "ncu_type",
    enum: ["", "APPLY", "EXCEPT"],
    default: () => "'APPLY'",
  })
  ncuType: "" | "APPLY" | "EXCEPT";

  @Column("int", {
    primary: true,
    name: "ncu_product_uid",
    default: () => "'0'",
  })
  ncuProductUid: number;
}
