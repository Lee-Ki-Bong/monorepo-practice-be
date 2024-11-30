import { Column, Entity } from "typeorm";

@Entity("fc_user", { schema: "makeshop" })
export class FcUser {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "office", length: 12 })
  office: string;

  @Column("enum", {
    name: "add_type",
    enum: ["", "D", "A"],
    default: () => "'A'",
  })
  addType: "" | "D" | "A";

  @Column("enum", {
    name: "req_status",
    enum: ["", "R", "A1", "A2"],
    default: () => "'R'",
  })
  reqStatus: "" | "R" | "A1" | "A2";

  @Column("varchar", { name: "enddate", length: 8 })
  enddate: string;

  @Column("int", { name: "cur_charge", nullable: true })
  curCharge: number | null;

  @Column("mediumtext", { name: "etctype", nullable: true })
  etctype: string | null;

  @Column("int", { name: "dgnset_id", unsigned: true, default: () => "'0'" })
  dgnsetId: number;

  @Column("int", { name: "dgnset_m_id", unsigned: true, default: () => "'0'" })
  dgnsetMId: number;

  @Column("int", { name: "dgnset_p_id", unsigned: true, default: () => "'0'" })
  dgnsetPId: number;

  @Column("mediumtext", { name: "display_menu", nullable: true })
  displayMenu: string | null;
}
