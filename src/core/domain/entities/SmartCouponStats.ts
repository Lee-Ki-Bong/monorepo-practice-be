import { Column, Entity, Index } from "typeorm";

@Index("index_date", ["adminuser", "sctDate"], {})
@Entity("smart_coupon_stats", { schema: "makeshop" })
export class SmartCouponStats {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "sct_couponnum", length: 8 })
  sctCouponnum: string;

  @Column("date", {
    primary: true,
    name: "sct_date",
    default: () => "'0000-00-00'",
  })
  sctDate: string;

  @Column("int", { name: "sct_issue_cnt", default: () => "'0'" })
  sctIssueCnt: number;

  @Column("int", { name: "sct_use_cnt", default: () => "'0'" })
  sctUseCnt: number;

  @Column("int", { name: "sct_end_cnt", default: () => "'0'" })
  sctEndCnt: number;

  @Column("int", { name: "sct_issue_pc_cnt", default: () => "'0'" })
  sctIssuePcCnt: number;

  @Column("int", { name: "sct_issue_mo_cnt", default: () => "'0'" })
  sctIssueMoCnt: number;

  @Column("int", { name: "sct_issue_app_cnt", default: () => "'0'" })
  sctIssueAppCnt: number;

  @Column("int", { name: "sct_sales_price", default: () => "'0'" })
  sctSalesPrice: number;
}
