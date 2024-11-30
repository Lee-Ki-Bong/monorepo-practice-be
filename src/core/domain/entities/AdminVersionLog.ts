import { Column, Entity, Index } from "typeorm";

@Index("adminuser", ["adminuser"], {})
@Index("ip", ["ip"], {})
@Index("log_type", ["logType"], {})
@Entity("admin_version_log", { schema: "makeshop" })
export class AdminVersionLog {
  @Column("char", { name: "ip", length: 17 })
  ip: string;

  @Column("char", { name: "adminuser", length: 20 })
  adminuser: string;

  @Column("enum", {
    name: "log_type",
    enum: ["", "V_CHECK", "SAVE"],
    default: () => "'V_CHECK'",
  })
  logType: "" | "V_CHECK" | "SAVE";

  @Column("enum", {
    name: "server",
    enum: ["", "jin2", "ver1", "ver2", "ver3"],
    default: () => "'jin2'",
  })
  server: "" | "jin2" | "ver1" | "ver2" | "ver3";

  @Column("enum", {
    name: "design",
    enum: ["", "D2", "D4"],
    default: () => "'D2'",
  })
  design: "" | "D2" | "D4";

  @Column("enum", {
    name: "order",
    enum: ["", "S1", "OO"],
    default: () => "'S1'",
  })
  order: "" | "S1" | "OO";

  @Column("enum", {
    name: "unify_option",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  unifyOption: "" | "N" | "Y";

  @Column("enum", {
    name: "m_design",
    enum: ["", "BASIC", "NEW"],
    default: () => "'BASIC'",
  })
  mDesign: "" | "BASIC" | "NEW";

  @Column("datetime", {
    name: "log_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  logDate: Date;
}
