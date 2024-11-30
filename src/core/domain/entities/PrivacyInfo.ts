import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_pi_uid", ["piUid"], {})
@Index("index_group", ["adminuser", "piPage", "piGroup"], {})
@Entity("privacy_info", { schema: "makeshop" })
export class PrivacyInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "pi_uid", unsigned: true })
  piUid: number;

  @Column("enum", {
    name: "pi_fixed",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  piFixed: "" | "Y" | "N";

  @Column("enum", {
    name: "pi_required",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  piRequired: "" | "Y" | "N";

  @Column("varchar", { name: "pi_page", length: 10, default: () => "'join'" })
  piPage: string;

  @Column("char", { name: "pi_group", length: 1 })
  piGroup: string;

  @Column("varchar", { name: "pi_purpose", length: 255 })
  piPurpose: string;

  @Column("varchar", { name: "pi_items", length: 255 })
  piItems: string;

  @Column("varchar", { name: "pi_codes", length: 255 })
  piCodes: string;

  @Column("varchar", { name: "pi_holding", length: 255 })
  piHolding: string;

  @Column("varchar", { name: "pi_recipient", length: 255 })
  piRecipient: string;

  @Column("varchar", { name: "pi_trustee", length: 255 })
  piTrustee: string;

  @Column("mediumint", {
    name: "pi_sort",
    unsigned: true,
    default: () => "'0'",
  })
  piSort: number;

  @Column("enum", {
    name: "pi_del",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  piDel: "" | "Y" | "N";

  @Column("datetime", {
    name: "pi_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  piRegDate: Date;
}
