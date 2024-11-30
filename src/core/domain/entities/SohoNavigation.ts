import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_cid", ["cid"], {})
@Entity("soho_navigation", { schema: "makeshop" })
export class SohoNavigation {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "cid" })
  cid: number;

  @Column("enum", {
    name: "display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  display: "" | "Y" | "N";

  @Column("int", { name: "sort", default: () => "'1'" })
  sort: number;

  @Column("varchar", { name: "menu_name", length: 50 })
  menuName: string;

  @Column("tinyint", { name: "link_type", default: () => "'1'" })
  linkType: number;

  @Column("varchar", { name: "link_url", length: 255 })
  linkUrl: string;

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
