import { Column, Entity } from "typeorm";

@Entity("approval_plan_excel_list", { schema: "makeshop" })
export class ApprovalPlanExcelList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "ap_id",
    unsigned: true,
    default: () => "'0'",
  })
  apId: number;

  @Column("int", {
    primary: true,
    name: "ap_list_id",
    unsigned: true,
    default: () => "'0'",
  })
  apListId: number;

  @Column("int", { name: "product_uid", unsigned: true, default: () => "'0'" })
  productUid: number;

  @Column("int", { name: "ap_price", default: () => "'0'" })
  apPrice: number;

  @Column("int", { name: "ap_commission", default: () => "'-1'" })
  apCommission: number;

  @Column("varchar", { name: "ap_delivery", length: 50 })
  apDelivery: string;
}
