import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("category_product_detail_banner", { schema: "makeshop" })
export class CategoryProductDetailBanner {
  @Column("varchar", { name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "category_xcode", length: 20 })
  categoryXcode: string;

  @Column("enum", {
    name: "status",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  status: "" | "Y" | "N";

  @Column("int", { name: "c_sort", nullable: true, unsigned: true })
  cSort: number | null;
}
