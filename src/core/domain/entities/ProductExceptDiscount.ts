import { Column, Entity } from "typeorm";

@Entity("product_except_discount", { schema: "makeshop" })
export class ProductExceptDiscount {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("varchar", { primary: true, name: "group_code", length: 4 })
  groupCode: string;

  @Column("enum", {
    name: "except_group",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  exceptGroup: "" | "Y" | "N";

  @Column("enum", {
    name: "except_period",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  exceptPeriod: "" | "Y" | "N";

  @Column("enum", {
    name: "except_wholesale",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  exceptWholesale: "" | "Y" | "N";

  @Column("enum", {
    name: "except_bulk",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  exceptBulk: "" | "Y" | "N";
}
