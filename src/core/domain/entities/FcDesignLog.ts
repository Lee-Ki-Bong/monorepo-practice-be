import { Column, Entity } from "typeorm";

@Entity("fc_design_log", { schema: "makeshop" })
export class FcDesignLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "agency", length: 12 })
  agency: string;

  @Column("varchar", { name: "designtype", length: 30 })
  designtype: string;

  @Column("enum", {
    primary: true,
    name: "designarea",
    enum: ["", "WEB", "MOBILE"],
    default: () => "'WEB'",
  })
  designarea: "" | "WEB" | "MOBILE";

  @Column("int", { name: "dgnset_id", unsigned: true, default: () => "'0'" })
  dgnsetId: number;

  @Column("mediumtext", { name: "etctype", nullable: true })
  etctype: string | null;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;

  @Column("varchar", { name: "change_id", length: 12 })
  changeId: string;
}
