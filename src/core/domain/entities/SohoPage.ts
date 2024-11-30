import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_pid", ["pid"], {})
@Index("product", ["adminuser", "uid"], {})
@Entity("soho_page", { schema: "makeshop" })
export class SohoPage {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "pid", unsigned: true })
  pid: number;

  @Column("smallint", { name: "sort", unsigned: true, default: () => "'1'" })
  sort: number;

  @Column("int", { name: "uid", unsigned: true, default: () => "'0'" })
  uid: number;

  @Column("enum", {
    name: "page_type",
    enum: ["", "N", "P"],
    default: () => "'N'",
  })
  pageType: "" | "N" | "P";

  @Column("tinyint", { name: "template_type", default: () => "'1'" })
  templateType: number;

  @Column("enum", {
    name: "display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  display: "" | "Y" | "N";

  @Column("varchar", { name: "page_name", length: 50 })
  pageName: string;

  @Column("int", { name: "hit", unsigned: true, default: () => "'0'" })
  hit: number;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;
}
