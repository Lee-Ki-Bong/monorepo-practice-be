import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_refund_uid", ["refundUid"], {})
@Index("oofrnd_ordernum", ["adminuser", "ordernum"], {})
@Index("oofrnd_status", ["adminuser", "refundType", "refundStatus"], {})
@Index("uniq", ["adminuser", "ordernum", "queueDate"], { unique: true })
@Entity("oo_refund", { schema: "makeshop" })
export class OoRefund {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "refund_uid", unsigned: true })
  refundUid: number;

  @Column("varchar", { name: "ordernum", length: 26 })
  ordernum: string;

  @Column("mediumtext", { name: "basket_set" })
  basketSet: string;

  @Column("varchar", { name: "ext_set", length: 255 })
  extSet: string;

  @Column("int", { name: "issue_price", default: () => "'0'" })
  issuePrice: number;

  @Column("int", { name: "real_price", default: () => "'0'" })
  realPrice: number;

  @Column("int", { name: "refund_emoney", default: () => "'0'" })
  refundEmoney: number;

  @Column("int", { name: "refund_reserve", default: () => "'0'" })
  refundReserve: number;

  @Column("bigint", {
    name: "refund_used_emoney",
    unsigned: true,
    default: () => "'0'",
  })
  refundUsedEmoney: string;

  @Column("bigint", {
    name: "refund_used_reserve",
    unsigned: true,
    default: () => "'0'",
  })
  refundUsedReserve: string;

  @Column("bigint", {
    name: "refund_used_naver_mileage",
    unsigned: true,
    default: () => "'0'",
  })
  refundUsedNaverMileage: string;

  @Column("bigint", {
    name: "refund_used_okcashbag",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  refundUsedOkcashbag: string | null;

  @Column("varchar", { name: "refund_account", nullable: true, length: 255 })
  refundAccount: string | null;

  @Column("varchar", { name: "refund_accounter", length: 30 })
  refundAccounter: string;

  @Column("varchar", { name: "refund_bankname", length: 30 })
  refundBankname: string;

  @Column("bigint", {
    name: "refund_deli_price",
    unsigned: true,
    default: () => "'0'",
  })
  refundDeliPrice: string;

  @Column("int", { name: "refund_taxfree_price", default: () => "'0'" })
  refundTaxfreePrice: number;

  @Column("bigint", {
    name: "repay_redeli_price",
    unsigned: true,
    default: () => "'0'",
  })
  repayRedeliPrice: string;

  @Column("bigint", {
    name: "repay_return_price",
    unsigned: true,
    default: () => "'0'",
  })
  repayReturnPrice: string;

  @Column("varchar", { name: "repay_account", length: 90 })
  repayAccount: string;

  @Column("varchar", { name: "repay_banker", length: 30 })
  repayBanker: string;

  @Column("char", { name: "refund_method", length: 1, default: () => "'B'" })
  refundMethod: string;

  @Column("char", { name: "refund_reason", length: 1, default: () => "'E'" })
  refundReason: string;

  @Column("enum", {
    name: "refund_type",
    enum: ["", "NONE", "REFUND", "REPAY"],
    default: () => "'NONE'",
  })
  refundType: "" | "NONE" | "REFUND" | "REPAY";

  @Column("enum", {
    name: "refund_status",
    enum: ["", "QUEUE", "HOLD", "STANDBY", "COMPLETE"],
    default: () => "'QUEUE'",
  })
  refundStatus: "" | "QUEUE" | "HOLD" | "STANDBY" | "COMPLETE";

  @Column("datetime", {
    name: "queue_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  queueDate: Date;

  @Column("datetime", {
    name: "status_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  statusDate: Date;

  @Column("date", { name: "hold_date", nullable: true })
  holdDate: string | null;

  @Column("date", { name: "hold_enddate", nullable: true })
  holdEnddate: string | null;

  @Column("char", { name: "hold_reason", length: 1 })
  holdReason: string;

  @Column("varchar", { name: "hold_reason_memo", length: 255 })
  holdReasonMemo: string;

  @Column("mediumtext", { name: "admin_memo", nullable: true })
  adminMemo: string | null;

  @Column("varchar", { name: "admin_memo_writer", length: 12 })
  adminMemoWriter: string;

  @Column("enum", {
    name: "yn_addition",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  ynAddition: "" | "N" | "Y";

  @Column("char", { name: "flag_return", length: 1, default: () => "'A'" })
  flagReturn: string;

  @Column("mediumtext", { name: "desc_memo", nullable: true })
  descMemo: string | null;

  @Column("varchar", { name: "desc_memo_writer", nullable: true, length: 12 })
  descMemoWriter: string | null;

  @Column("varchar", { name: "id_set_standby", nullable: true, length: 12 })
  idSetStandby: string | null;

  @Column("enum", {
    name: "refund_request_type",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  refundRequestType: "" | "Y" | "N";
}
