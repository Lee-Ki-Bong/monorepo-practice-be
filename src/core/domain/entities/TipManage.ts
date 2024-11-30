import { Column, Entity } from "typeorm";

@Entity("tip_manage", { schema: "makeshop" })
export class TipManage {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "tipnum", length: 8 })
  tipnum: string;

  @Column("enum", { name: "display", nullable: true, enum: ["", "Y", "W"] })
  display: "" | "Y" | "W" | null;

  @Column("varchar", { name: "title", nullable: true, length: 255 })
  title: string | null;

  @Column("enum", {
    name: "term_type",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  termType: "" | "Y" | "N" | null;

  @Column("int", { name: "open_type", nullable: true, unsigned: true })
  openType: number | null;

  @Column("datetime", { name: "open_start_date", nullable: true })
  openStartDate: Date | null;

  @Column("datetime", { name: "open_end_date", nullable: true })
  openEndDate: Date | null;

  @Column("set", {
    name: "use_device",
    nullable: true,
    enum: ["ALL", "PC", "MOBILE"],
    default: () => ["ALL"],
  })
  useDevice: ("ALL" | "PC" | "MOBILE")[] | null;

  @Column("int", { name: "pc_url_type", nullable: true, unsigned: true })
  pcUrlType: number | null;

  @Column("varchar", { name: "pc_url", nullable: true, length: 255 })
  pcUrl: string | null;

  @Column("varchar", { name: "mobile_url", nullable: true, length: 255 })
  mobileUrl: string | null;

  @Column("mediumtext", { name: "content" })
  content: string;

  @Column("datetime", { name: "regdate", nullable: true })
  regdate: Date | null;

  @Column("varchar", { name: "register", nullable: true, length: 12 })
  register: string | null;

  @Column("datetime", { name: "moddate", nullable: true })
  moddate: Date | null;
}
