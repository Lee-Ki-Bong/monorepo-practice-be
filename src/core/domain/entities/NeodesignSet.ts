import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("dgnset_id", ["dgnsetId"], {})
@Entity("neodesign_set", { schema: "makeshop" })
export class NeodesignSet {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "dgnset_id", unsigned: true })
  dgnsetId: number;

  @Column("enum", {
    name: "dgnset_type",
    enum: ["PC", "MOBILE", "POWERPACK", "RW"],
    default: () => "'PC'",
  })
  dgnsetType: "PC" | "MOBILE" | "POWERPACK" | "RW";

  @Column("enum", {
    name: "dgnset_pay_type",
    nullable: true,
    enum: ["", "PAY", "FREE"],
    default: () => "'FREE'",
  })
  dgnsetPayType: "" | "PAY" | "FREE" | null;

  @Column("varchar", { name: "dgnset_title", length: 50 })
  dgnsetTitle: string;

  @Column("datetime", {
    name: "dgnset_last_update",
    default: () => "'0000-00-00 00:00:00'",
  })
  dgnsetLastUpdate: Date;

  @Column("datetime", { name: "dgnset_last_edit" })
  dgnsetLastEdit: Date;

  @Column("enum", {
    name: "shop_arrange",
    enum: ["", "NONE", "CENTER"],
    default: () => "'NONE'",
  })
  shopArrange: "" | "NONE" | "CENTER";

  @Column("varchar", {
    name: "dgnset_dgnwidth",
    length: 4,
    default: () => "'1000'",
  })
  dgnsetDgnwidth: string;

  @Column("varchar", {
    name: "dgnset_description",
    nullable: true,
    length: 150,
  })
  dgnsetDescription: string | null;

  @Column("enum", {
    name: "dgnset_intro",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  dgnsetIntro: "" | "Y" | "N";

  @Column("enum", {
    name: "powerapp_intro_display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  powerappIntroDisplay: "" | "Y" | "N";

  @Column("tinyint", { name: "dgnset_performance", nullable: true })
  dgnsetPerformance: number | null;

  @Column("varchar", { name: "dgnset_fontstyle", nullable: true, length: 50 })
  dgnsetFontstyle: string | null;

  @Column("varchar", {
    name: "dgnset_tutorial_step",
    nullable: true,
    length: 4,
    default: () => "'0'",
  })
  dgnsetTutorialStep: string | null;

  @Column("varchar", { name: "shop_dtd", nullable: true, length: 250 })
  shopDtd: string | null;

  @Column("varchar", { name: "shop_frame_dtd", length: 250 })
  shopFrameDtd: string;

  @Column("enum", {
    name: "shop_frame",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  shopFrame: "" | "Y" | "N";

  @Column("longtext", { name: "shop_head", nullable: true })
  shopHead: string | null;

  @Column("longtext", { name: "shop_meta", nullable: true })
  shopMeta: string | null;

  @Column("longtext", { name: "shop_frame_meta" })
  shopFrameMeta: string;

  @Column("varchar", { name: "playd4_type", length: 11, default: () => "'NO'" })
  playd4Type: string;
}
