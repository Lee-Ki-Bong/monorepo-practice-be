import { Column, Entity } from "typeorm";

@Entity("product_donation", { schema: "makeshop" })
export class ProductDonation {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("enum", {
    name: "pd_type",
    enum: ["", "N", "M", "P"],
    default: () => "'N'",
  })
  pdType: "" | "N" | "M" | "P";

  @Column("int", { name: "pd_donation", unsigned: true, default: () => "'0'" })
  pdDonation: number;

  @Column("int", {
    name: "pd_prd_donation",
    unsigned: true,
    default: () => "'0'",
  })
  pdPrdDonation: number;

  @Column("enum", {
    name: "pd_erp_yn",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  pdErpYn: "" | "Y" | "N";
}
