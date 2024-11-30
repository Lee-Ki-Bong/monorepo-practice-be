import { Column, Entity } from "typeorm";

@Entity("taxbill_config", { schema: "makeshop" })
export class TaxbillConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "tbc_use",
    enum: ["", "N", "Y", "E"],
    default: () => "'N'",
  })
  tbcUse: "" | "N" | "Y" | "E";

  @Column("enum", {
    name: "tbc_issue_point",
    enum: ["", "PAY", "DELIVERY", "ORDER"],
    default: () => "'DELIVERY'",
  })
  tbcIssuePoint: "" | "PAY" | "DELIVERY" | "ORDER";

  @Column("enum", {
    name: "tbc_cutoff",
    enum: ["", "FLOOR", "ROUND", "CEIL"],
    default: () => "'FLOOR'",
  })
  tbcCutoff: "" | "FLOOR" | "ROUND" | "CEIL";

  @Column("enum", {
    name: "tbc_apply_limit",
    enum: ["", "NEXT", "UNLIMIT"],
    default: () => "'NEXT'",
  })
  tbcApplyLimit: "" | "NEXT" | "UNLIMIT";

  @Column("enum", {
    name: "tbc_print",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  tbcPrint: "" | "Y" | "N";

  @Column("enum", {
    name: "tbc_is_display",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  tbcIsDisplay: "" | "Y" | "N" | null;

  @Column("datetime", {
    name: "tbc_created",
    default: () => "'0000-00-00 00:00:00'",
  })
  tbcCreated: Date;

  @Column("datetime", {
    name: "tbc_updated",
    default: () => "'0000-00-00 00:00:00'",
  })
  tbcUpdated: Date;

  @Column("enum", {
    name: "tbc_use_refund",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  tbcUseRefund: "" | "Y" | "N";
}
