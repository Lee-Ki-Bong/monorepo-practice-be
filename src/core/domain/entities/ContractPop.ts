import { Column, Entity } from "typeorm";

@Entity("contract_pop", { schema: "makeshop" })
export class ContractPop {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "pop_status",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  popStatus: "" | "Y" | "N";

  @Column("enum", {
    name: "pop_type",
    enum: ["", "ALL", "PRIVACY", "THIRD", "TRUST"],
    default: () => "'ALL'",
  })
  popType: "" | "ALL" | "PRIVACY" | "THIRD" | "TRUST";

  @Column("int", { name: "pop_top", default: () => "'0'" })
  popTop: number;

  @Column("int", { name: "pop_left", default: () => "'0'" })
  popLeft: number;

  @Column("varchar", { name: "pop_title", length: 255 })
  popTitle: string;

  @Column("mediumtext", { name: "pop_text" })
  popText: string;

  @Column("mediumtext", { name: "pop_privacy_text" })
  popPrivacyText: string;

  @Column("mediumtext", { name: "pop_third_text" })
  popThirdText: string;

  @Column("mediumtext", { name: "pop_trust_text" })
  popTrustText: string;

  @Column("enum", {
    name: "pop_data_clear",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  popDataClear: "" | "Y" | "N";

  @Column("datetime", {
    name: "date_update",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateUpdate: Date;
}
