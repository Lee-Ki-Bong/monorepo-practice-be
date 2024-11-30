import { Column, Entity } from "typeorm";

@Entity("kakaopf_config", { schema: "makeshop" })
export class KakaopfConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "pf_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  pfUse: "" | "Y" | "N";

  @Column("varchar", { name: "pf_id", length: 10 })
  pfId: string;

  @Column("varchar", { name: "pf_jskey", length: 50 })
  pfJskey: string;

  @Column("varchar", {
    name: "pf_text",
    length: 10,
    default: () => "'consult'",
  })
  pfText: string;

  @Column("varchar", {
    name: "pf_color",
    length: 10,
    default: () => "'yellow'",
  })
  pfColor: string;

  @Column("varchar", { name: "pf_size", length: 10, default: () => "'small'" })
  pfSize: string;

  @Column("enum", {
    name: "pf_auto",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  pfAuto: "" | "Y" | "N";
}
