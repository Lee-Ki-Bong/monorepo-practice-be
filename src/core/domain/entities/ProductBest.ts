import { Column, Entity } from "typeorm";

@Entity("product_best", { schema: "makeshop" })
export class ProductBest {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("varchar", { name: "brandcode", nullable: true, length: 12 })
  brandcode: string | null;

  @Column("enum", { name: "state", enum: ["", "Y", "N"], default: () => "'Y'" })
  state: "" | "Y" | "N";

  @Column("enum", { name: "type", enum: ["", "A", "U"], default: () => "'A'" })
  type: "" | "A" | "U";

  @Column("int", { name: "amountsum", unsigned: true, default: () => "'0'" })
  amountsum: number;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "display_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  displayDate: Date;
}
