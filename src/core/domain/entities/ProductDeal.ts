import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("date", ["adminuser", "pdStartDate", "pdEndDate"], {})
@Index("idx_auto_pd_uid", ["pdUid"], {})
@Index("product_uid", ["adminuser", "productUid"], {})
@Entity("product_deal", { schema: "makeshop" })
export class ProductDeal {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "pd_uid", unsigned: true })
  pdUid: number;

  @Column("int", { name: "product_uid", unsigned: true, default: () => "'0'" })
  productUid: number;

  @Column("int", { name: "pd_percent", unsigned: true, default: () => "'0'" })
  pdPercent: number;

  @Column("int", { name: "pd_sellprice", default: () => "'0'" })
  pdSellprice: number;

  @Column("int", { name: "pd_stock", unsigned: true, default: () => "'0'" })
  pdStock: number;

  @Column("int", { name: "pd_order_limit", default: () => "'0'" })
  pdOrderLimit: number;

  @Column("enum", {
    name: "pd_display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  pdDisplay: "" | "Y" | "N";

  @Column("enum", {
    name: "pd_status",
    enum: ["", "NONE", "FAIL", "CONFIRM", "DELETE"],
    default: () => "'NONE'",
  })
  pdStatus: "" | "NONE" | "FAIL" | "CONFIRM" | "DELETE";

  @Column("datetime", {
    name: "pd_start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pdStartDate: Date;

  @Column("datetime", {
    name: "pd_end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pdEndDate: Date;

  @Column("datetime", {
    name: "pd_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pdRegDate: Date;

  @Column("datetime", {
    name: "pd_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pdModDate: Date;

  @Column("varchar", { name: "pd_sort_date", length: 14 })
  pdSortDate: string;

  @Column("varchar", { name: "pd_register", length: 100 })
  pdRegister: string;

  @Column("int", { name: "app_id", unsigned: true, default: () => "'0'" })
  appId: number;
}
