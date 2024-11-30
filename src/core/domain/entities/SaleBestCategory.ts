import { Column, Entity } from "typeorm";

@Entity("sale_best_category", { schema: "makeshop" })
export class SaleBestCategory {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", {
    primary: true,
    name: "cate_code",
    length: 6,
    default: () => "'0'",
  })
  cateCode: string;

  @Column("enum", {
    name: "collect_type",
    enum: ["", "A", "M"],
    default: () => "'A'",
  })
  collectType: "" | "A" | "M";
}
