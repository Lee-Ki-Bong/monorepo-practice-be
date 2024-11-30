import { Column, Entity, Index } from "typeorm";

@Index("facebook_category_id", ["adminuser", "facebookCategoryId"], {})
@Entity("facebook_product_categories", { schema: "makeshop" })
export class FacebookProductCategories {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("int", {
    name: "facebook_category_id",
    nullable: true,
    unsigned: true,
  })
  facebookCategoryId: number | null;
}
