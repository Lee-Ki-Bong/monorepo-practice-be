import { Column, Entity, Index } from "typeorm";

@Index("ordernum", ["ordernum"], {})
@Entity("nc_order_status", { schema: "makeshop" })
export class NcOrderStatus {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 50 })
  ordernum: string;

  @Column("int", {
    primary: true,
    name: "num",
    unsigned: true,
    default: () => "'0'",
  })
  num: number;

  @Column("varchar", { name: "nhn_order_id", length: 20 })
  nhnOrderId: string;

  @Column("varchar", { name: "nhn_product_id", length: 20 })
  nhnProductId: string;

  @Column("varchar", { name: "product_order_status", length: 30 })
  productOrderStatus: string;

  @Column("varchar", { name: "place_order_status", length: 10 })
  placeOrderStatus: string;

  @Column("varchar", { name: "claim_type", length: 50 })
  claimType: string;

  @Column("varchar", { name: "claim_status", length: 50 })
  claimStatus: string;

  @Column("varchar", { name: "holdback_reason", length: 50 })
  holdbackReason: string;

  @Column("enum", {
    name: "claim_view",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  claimView: "" | "Y" | "N";

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;
}
