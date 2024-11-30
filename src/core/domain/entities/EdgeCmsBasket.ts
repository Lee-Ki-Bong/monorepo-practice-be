import { Column, Entity } from "typeorm";

@Entity("edge_cms_basket", { schema: "makeshop" })
export class EdgeCmsBasket {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", {
    primary: true,
    name: "num",
    unsigned: true,
    default: () => "'0'",
  })
  num: number;

  @Column("varchar", { name: "product_uid", length: 12 })
  productUid: string;

  @Column("varchar", { name: "brandname", length: 255 })
  brandname: string;

  @Column("int", { name: "amount", unsigned: true, default: () => "'1'" })
  amount: number;

  @Column("int", { name: "price", default: () => "'0'" })
  price: number;

  @Column("char", { name: "status", nullable: true, length: 2 })
  status: string | null;

  @Column("enum", {
    name: "refund",
    nullable: true,
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  refund: "" | "N" | "Y" | null;

  @Column("datetime", { name: "refund_date", nullable: true })
  refundDate: Date | null;
}
