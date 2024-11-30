import { Column, Entity } from "typeorm";

@Entity("cart_free_category", { schema: "makeshop" })
export class CartFreeCategory {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "p_cate", length: 9 })
  pCate: string;

  @Column("char", { name: "p_cate1", length: 3 })
  pCate1: string;

  @Column("char", { name: "p_cate2", length: 3 })
  pCate2: string;

  @Column("char", { name: "p_cate3", length: 3 })
  pCate3: string;

  @Column("enum", {
    name: "is_virtual",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  isVirtual: "" | "Y" | "N";
}
