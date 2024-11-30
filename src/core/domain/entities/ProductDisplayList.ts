import { Column, Entity } from "typeorm";

@Entity("product_display_list", { schema: "makeshop" })
export class ProductDisplayList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("mediumtext", { name: "product_uid" })
  productUid: string;

  @Column("varchar", { name: "web_image", length: 255 })
  webImage: string;

  @Column("varchar", { name: "mo_image", length: 255 })
  moImage: string;

  @Column("enum", {
    name: "use_type",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useType: "" | "Y" | "N";

  @Column("enum", {
    name: "keep_type",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  keepType: "" | "Y" | "N";

  @Column("varchar", { primary: true, name: "reg_date", length: 8 })
  regDate: string;
}
