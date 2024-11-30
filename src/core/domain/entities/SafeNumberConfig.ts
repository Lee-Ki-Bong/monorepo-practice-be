import { Column, Entity } from "typeorm";

@Entity("safe_number_config", { schema: "makeshop" })
export class SafeNumberConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "snc_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  sncUse: "" | "Y" | "N";

  @Column("enum", {
    name: "snc_default_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  sncDefaultUse: "" | "Y" | "N";

  @Column("enum", {
    name: "snc_tooltip_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  sncTooltipUse: "" | "Y" | "N";

  @Column("enum", {
    name: "snc_tooltip_type",
    enum: ["", "NONE", "FILE"],
    default: () => "'NONE'",
  })
  sncTooltipType: "" | "NONE" | "FILE";

  @Column("enum", {
    name: "snc_expire_date",
    enum: ["", "7", "14", "21", "30"],
    default: () => "'14'",
  })
  sncExpireDate: "" | "7" | "14" | "21" | "30";
}
