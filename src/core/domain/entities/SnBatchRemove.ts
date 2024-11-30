import { Column, Entity, Index } from "typeorm";

@Index("sn_date_hope", ["snDateHope"], {})
@Entity("sn_batch_remove", { schema: "makeshop" })
export class SnBatchRemove {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("date", { name: "sn_date_hope", default: () => "'0000-00-00'" })
  snDateHope: string;

  @Column("char", { name: "sn_apply_date", length: 1, default: () => "'Y'" })
  snApplyDate: string;

  @Column("char", { name: "sn_apply_batch", length: 1, default: () => "'Y'" })
  snApplyBatch: string;

  @Column("char", { name: "sn_apply_del", length: 1, default: () => "'Y'" })
  snApplyDel: string;

  @Column("enum", {
    name: "sn_state",
    enum: ["", "CANCEL", "F_WAIT", "WAIT", "F_DONE", "DONE"],
    default: () => "'WAIT'",
  })
  snState: "" | "CANCEL" | "F_WAIT" | "WAIT" | "F_DONE" | "DONE";

  @Column("int", { name: "sn_proc_cnt", unsigned: true, default: () => "'0'" })
  snProcCnt: number;
}
