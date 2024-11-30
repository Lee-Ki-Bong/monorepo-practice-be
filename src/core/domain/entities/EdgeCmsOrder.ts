import { Column, Entity } from "typeorm";

@Entity("edge_cms_order", { schema: "makeshop" })
export class EdgeCmsOrder {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "userid", length: 12 })
  userid: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", { name: "price", default: () => "'0'" })
  price: number;

  @Column("int", { name: "edge_price", default: () => "'0'" })
  edgePrice: number;

  @Column("int", { name: "cms_price", default: () => "'0'" })
  cmsPrice: number;

  @Column("int", { name: "refund_price", default: () => "'0'" })
  refundPrice: number;

  @Column("int", { name: "tax", default: () => "'0'" })
  tax: number;

  @Column("char", { name: "delivery", nullable: true, length: 2 })
  delivery: string | null;

  @Column("datetime", {
    primary: true,
    name: "cms_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  cmsDate: Date;

  @Column("datetime", { name: "refund_date", nullable: true })
  refundDate: Date | null;
}
