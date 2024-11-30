import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_ap_id", ["apId"], {})
@Index("reg_date", ["adminuser", "apRegDate"], {})
@Index("req_date", ["adminuser", "apRequestDate"], {})
@Entity("approval_plan_excel", { schema: "makeshop" })
export class ApprovalPlanExcel {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "ap_id", unsigned: true })
  apId: number;

  @Column("varchar", { name: "request_id", length: 20 })
  requestId: string;

  @Column("int", { name: "app_id", unsigned: true, default: () => "'0'" })
  appId: number;

  @Column("datetime", {
    name: "ap_request_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  apRequestDate: Date;

  @Column("datetime", {
    name: "ap_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  apRegDate: Date;
}
