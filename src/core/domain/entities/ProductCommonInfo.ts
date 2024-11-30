import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("date_idx", ["adminuser", "pciRegDate"], {})
@Index("idx_auto_pci_uid", ["pciUid"], {})
@Index("sort_idx", ["adminuser", "pciSort"], {})
@Index("sub_idx", ["adminuser", "pciUse", "pciType"], {})
@Entity("product_common_info", { schema: "makeshop" })
export class ProductCommonInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "pci_uid", unsigned: true })
  pciUid: number;

  @Column("enum", {
    name: "pci_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  pciUse: "" | "Y" | "N";

  @Column("enum", {
    name: "pci_type",
    enum: ["", "BASIC", "EVENT"],
    default: () => "'BASIC'",
  })
  pciType: "" | "BASIC" | "EVENT";

  @Column("varchar", { name: "pci_name", length: 100 })
  pciName: string;

  @Column("datetime", {
    name: "pci_start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pciStartDate: Date;

  @Column("datetime", {
    name: "pci_end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pciEndDate: Date;

  @Column("enum", {
    name: "pci_is_limited",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  pciIsLimited: "" | "Y" | "N";

  @Column("enum", {
    name: "pci_supply_type",
    enum: ["", "ALL", "HEAD", "PVD"],
    default: () => "'ALL'",
  })
  pciSupplyType: "" | "ALL" | "HEAD" | "PVD";

  @Column("enum", {
    name: "pci_category_type",
    enum: ["", "ALL", "SELECT"],
    default: () => "'ALL'",
  })
  pciCategoryType: "" | "ALL" | "SELECT";

  @Column("enum", {
    name: "pci_input_type",
    enum: ["", "TEXT", "IMAGE", "HTML"],
    default: () => "'TEXT'",
  })
  pciInputType: "" | "TEXT" | "IMAGE" | "HTML";

  @Column("mediumtext", { name: "pci_detail_supply" })
  pciDetailSupply: string;

  @Column("mediumtext", { name: "pci_detail_withdraw" })
  pciDetailWithdraw: string;

  @Column("mediumtext", { name: "pci_detail_process" })
  pciDetailProcess: string;

  @Column("mediumtext", { name: "pci_detail_trouble" })
  pciDetailTrouble: string;

  @Column("mediumtext", { name: "pci_detail_terms" })
  pciDetailTerms: string;

  @Column("varchar", { name: "pci_detail_filename", length: 50 })
  pciDetailFilename: string;

  @Column("varchar", { name: "pci_detail_link", length: 255 })
  pciDetailLink: string;

  @Column("char", { name: "pci_detail_link_type", length: 1 })
  pciDetailLinkType: string;

  @Column("mediumtext", { name: "pci_detail_body" })
  pciDetailBody: string;

  @Column("enum", {
    name: "pci_m_input_type",
    enum: ["", "TEXT", "IMAGE", "HTML", "PC"],
    default: () => "'TEXT'",
  })
  pciMInputType: "" | "TEXT" | "IMAGE" | "HTML" | "PC";

  @Column("mediumtext", { name: "pci_m_detail_supply" })
  pciMDetailSupply: string;

  @Column("mediumtext", { name: "pci_m_detail_withdraw" })
  pciMDetailWithdraw: string;

  @Column("mediumtext", { name: "pci_m_detail_process" })
  pciMDetailProcess: string;

  @Column("mediumtext", { name: "pci_m_detail_trouble" })
  pciMDetailTrouble: string;

  @Column("mediumtext", { name: "pci_m_detail_terms" })
  pciMDetailTerms: string;

  @Column("varchar", { name: "pci_m_detail_filename", length: 50 })
  pciMDetailFilename: string;

  @Column("varchar", { name: "pci_m_detail_link", length: 255 })
  pciMDetailLink: string;

  @Column("char", {
    name: "pci_m_detail_link_type",
    length: 1,
    default: () => "'O'",
  })
  pciMDetailLinkType: string;

  @Column("mediumtext", { name: "pci_m_detail_body" })
  pciMDetailBody: string;

  @Column("int", { name: "pci_sort", default: () => "'0'" })
  pciSort: number;

  @Column("datetime", {
    name: "pci_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pciRegDate: Date;

  @Column("datetime", {
    name: "pci_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pciModDate: Date;
}
