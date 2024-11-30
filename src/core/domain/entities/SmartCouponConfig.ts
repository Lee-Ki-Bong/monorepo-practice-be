import { Column, Entity } from "typeorm";

@Entity("smart_coupon_config", { schema: "makeshop" })
export class SmartCouponConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("set", {
    name: "scc_target",
    enum: ["ALL", "PRODUCT", "ORDER"],
    default: () => ["PRODUCT", "ORDER"],
  })
  sccTarget: ("ALL" | "PRODUCT" | "ORDER")[];

  @Column("enum", {
    name: "scc_auto",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  sccAuto: "" | "Y" | "N";

  @Column("enum", {
    name: "scc_not_used_coupon_display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  sccNotUsedCouponDisplay: "" | "Y" | "N";

  @Column("smallint", {
    name: "scc_duplication_product",
    unsigned: true,
    default: () => "'0'",
  })
  sccDuplicationProduct: number;

  @Column("smallint", {
    name: "scc_duplication_order",
    unsigned: true,
    default: () => "'0'",
  })
  sccDuplicationOrder: number;

  @Column("varchar", { name: "scc_etc", length: 255 })
  sccEtc: string;

  @Column("datetime", {
    name: "scc_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  sccModDate: Date;
}
