import { Column, Entity, Index } from "typeorm";

@Index("category", ["adminuser", "cdcCate1", "cdcCate2", "cdcCate3"], {})
@Entity("custom_discount_category", { schema: "makeshop" })
export class CustomDiscountCategory {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "cd_idx",
    unsigned: true,
    default: () => "'0'",
  })
  cdIdx: number;

  @Column("varchar", { primary: true, name: "cdc_cate", length: 9 })
  cdcCate: string;

  @Column("char", { name: "cdc_cate1", length: 3 })
  cdcCate1: string;

  @Column("char", { name: "cdc_cate2", length: 3 })
  cdcCate2: string;

  @Column("char", { name: "cdc_cate3", length: 3 })
  cdcCate3: string;
}
