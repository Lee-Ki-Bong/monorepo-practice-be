import { Column, Entity } from "typeorm";

@Entity("subs_stats_day", { schema: "makeshop" })
export class SubsStatsDay {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "product_uid",
    unsigned: true,
    default: () => "'0'",
  })
  productUid: number;

  @Column("date", {
    primary: true,
    name: "ssd_date",
    default: () => "'0000-00-00'",
  })
  ssdDate: string;

  @Column("int", {
    name: "ssd_cnt_apply",
    unsigned: true,
    default: () => "'0'",
  })
  ssdCntApply: number;

  @Column("int", {
    name: "ssd_cnt_cancel",
    unsigned: true,
    default: () => "'0'",
  })
  ssdCntCancel: number;

  @Column("int", { name: "ssd_cnt_qty", unsigned: true, default: () => "'0'" })
  ssdCntQty: number;

  @Column("int", {
    name: "ssd_sum_price",
    unsigned: true,
    default: () => "'0'",
  })
  ssdSumPrice: number;
}
