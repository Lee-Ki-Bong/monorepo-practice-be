import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_pco_id", ["pcoId"], {})
@Index("ordernum", ["adminuser", "pcId", "ordernum"], {})
@Entity("provider_calculate_order", { schema: "makeshop" })
export class ProviderCalculateOrder {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "pc_id",
    unsigned: true,
    default: () => "'0'",
  })
  pcId: number;

  @PrimaryGeneratedColumn({ type: "int", name: "pco_id", unsigned: true })
  pcoId: number;

  @Column("varchar", { name: "ordernum", nullable: true, length: 50 })
  ordernum: string | null;

  @Column("char", {
    name: "paymethod",
    nullable: true,
    length: 3,
    default: () => "'B'",
  })
  paymethod: string | null;

  @Column("int", { name: "total_price", default: () => "'0'" })
  totalPrice: number;

  @Column("int", { name: "o_sale_price", default: () => "'0'" })
  oSalePrice: number;

  @Column("int", { name: "add_price", default: () => "'0'" })
  addPrice: number;

  @Column("int", { name: "deli_price", unsigned: true, default: () => "'0'" })
  deliPrice: number;

  @Column("int", { name: "redeli_price", default: () => "'0'" })
  redeliPrice: number;

  @Column("int", { name: "pvd_commission", default: () => "'0'" })
  pvdCommission: number;

  @Column("int", { name: "pg_commission", default: () => "'0'" })
  pgCommission: number;

  @Column("int", { name: "shop_benefit", default: () => "'0'" })
  shopBenefit: number;

  @Column("int", { name: "pvd_benefit", default: () => "'0'" })
  pvdBenefit: number;

  @Column("enum", {
    name: "pc_status",
    enum: ["", "REQUEST", "DONE", "CANCEL"],
    default: () => "'REQUEST'",
  })
  pcStatus: "" | "REQUEST" | "DONE" | "CANCEL";

  @Column("datetime", {
    name: "req_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  reqDate: Date;

  @Column("datetime", {
    name: "cal_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  calDate: Date;
}
