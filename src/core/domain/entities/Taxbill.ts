import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_tb_id", ["tbId"], {})
@Index("index_ordernum", ["adminuser", "ordernum"], {})
@Index("index_tba_id", ["adminuser", "tbaId"], {})
@Entity("taxbill", { schema: "makeshop" })
export class Taxbill {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "tb_id", unsigned: true })
  tbId: number;

  @Column("varchar", { primary: true, name: "ordernum", length: 32 })
  ordernum: string;

  @Column("int", { name: "tba_id", unsigned: true, default: () => "'0'" })
  tbaId: number;

  @Column("datetime", {
    name: "tb_apply_time",
    default: () => "'0000-00-00 00:00:00'",
  })
  tbApplyTime: Date;

  @Column("datetime", {
    name: "tb_issue_time",
    default: () => "'0000-00-00 00:00:00'",
  })
  tbIssueTime: Date;

  @Column("datetime", {
    name: "tb_done_time",
    default: () => "'0000-00-00 00:00:00'",
  })
  tbDoneTime: Date;

  @Column("int", { name: "tb_total_price_tax", default: () => "'0'" })
  tbTotalPriceTax: number;

  @Column("int", { name: "tb_total_price_tax_free", default: () => "'0'" })
  tbTotalPriceTaxFree: number;

  @Column("int", { name: "tb_total_price_tax_zero", default: () => "'0'" })
  tbTotalPriceTaxZero: number;

  @Column("int", { name: "tb_price_deli", default: () => "'0'" })
  tbPriceDeli: number;

  @Column("enum", {
    name: "tb_status",
    enum: ["", "APPLY", "ISSUE", "DONE", "DELETE", "CANCEL"],
    default: () => "'APPLY'",
  })
  tbStatus: "" | "APPLY" | "ISSUE" | "DONE" | "DELETE" | "CANCEL";

  @Column("enum", {
    name: "tbc_cutoff",
    enum: ["", "FLOOR", "ROUND", "CEIL"],
    default: () => "'FLOOR'",
  })
  tbcCutoff: "" | "FLOOR" | "ROUND" | "CEIL";

  @Column("varchar", { name: "tb_note", nullable: true, length: 100 })
  tbNote: string | null;

  @Column("enum", {
    name: "tb_taxbill_type",
    enum: ["", "N", "E"],
    default: () => "'N'",
  })
  tbTaxbillType: "" | "N" | "E";

  @Column("enum", {
    name: "tb_issue_type",
    enum: ["", "N", "M"],
    default: () => "'N'",
  })
  tbIssueType: "" | "N" | "M";

  @Column("varchar", { name: "tb_issue_error", length: 120 })
  tbIssueError: string;

  @Column("enum", {
    name: "tb_etaxbill_status",
    enum: ["", "NO", "APPLY", "FAIL", "DONE"],
    default: () => "'NO'",
  })
  tbEtaxbillStatus: "" | "NO" | "APPLY" | "FAIL" | "DONE";

  @Column("varchar", { name: "tb_error_code", length: 10 })
  tbErrorCode: string;

  @Column("varchar", { name: "tb_userid", length: 30 })
  tbUserid: string;

  @Column("varchar", { name: "tb_medicine", length: 20 })
  tbMedicine: string;
}
