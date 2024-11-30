import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_ac_id", ["acId"], {})
@Entity("auction_category", { schema: "makeshop" })
export class AuctionCategory {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "ac_id", unsigned: true })
  acId: number;

  @Column("int", { name: "ac_pid", unsigned: true, default: () => "'0'" })
  acPid: number;

  @Column("int", { name: "ac_left", unsigned: true, default: () => "'1'" })
  acLeft: number;

  @Column("int", { name: "ac_right", unsigned: true, default: () => "'2'" })
  acRight: number;

  @Column("int", { name: "ac_depth", unsigned: true, default: () => "'0'" })
  acDepth: number;

  @Column("varchar", { name: "ac_name", length: 100 })
  acName: string;

  @Column("enum", {
    name: "ac_sub",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  acSub: "" | "Y" | "N";

  @Column("enum", {
    name: "ac_display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  acDisplay: "" | "Y" | "N";

  @Column("datetime", {
    name: "ac_regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  acRegdate: Date;

  @Column("int", { name: "ac_order", unsigned: true, default: () => "'0'" })
  acOrder: number;

  @Column("varchar", { name: "ac_code_title", length: 255 })
  acCodeTitle: string;

  @Column("varchar", { name: "ac_groupid", length: 4 })
  acGroupid: string;

  @Column("varchar", { name: "ac_access_msg", length: 255 })
  acAccessMsg: string;

  @Column("char", {
    name: "ac_search_display",
    length: 1,
    default: () => "'Y'",
  })
  acSearchDisplay: string;

  @Column("char", { name: "ac_codeimg", length: 1, default: () => "'N'" })
  acCodeimg: string;

  @Column("mediumtext", { name: "ac_category_html", nullable: true })
  acCategoryHtml: string | null;
}
