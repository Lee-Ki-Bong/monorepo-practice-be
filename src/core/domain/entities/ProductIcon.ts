import { Column, Entity, Index } from "typeorm";

@Index("adminuser", ["adminuser", "uid"], {})
@Entity("product_icon", { schema: "makeshop" })
export class ProductIcon {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("int", {
    primary: true,
    name: "icon_no",
    unsigned: true,
    default: () => "'0'",
  })
  iconNo: number;

  @Column("enum", {
    primary: true,
    name: "icon_type",
    enum: ["", "DEFAULT", "USER"],
    default: () => "'DEFAULT'",
  })
  iconType: "" | "DEFAULT" | "USER";
}
