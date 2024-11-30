import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("display_idx", ["adminuser", "mcDevice", "mcDisplay"], {})
@Index("idx_auto_mc_uid", ["mcUid"], {})
@Entity("main_card_design", { schema: "makeshop" })
export class MainCardDesign {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "mc_uid", unsigned: true })
  mcUid: number;

  @Column("enum", {
    name: "mc_device",
    enum: ["", "PC", "MOBILE"],
    default: () => "'PC'",
  })
  mcDevice: "" | "PC" | "MOBILE";

  @Column("enum", {
    name: "mc_display_page",
    enum: ["", "MAIN", "MEMBER"],
    default: () => "'MAIN'",
  })
  mcDisplayPage: "" | "MAIN" | "MEMBER";

  @Column("enum", {
    name: "mc_type1",
    enum: [
      "",
      "PRODUCT",
      "EVENT",
      "PLAN",
      "MINI",
      "PREMIUM",
      "CHILDCARE",
      "NORMAL",
    ],
  })
  mcType1:
    | ""
    | "PRODUCT"
    | "EVENT"
    | "PLAN"
    | "MINI"
    | "PREMIUM"
    | "CHILDCARE"
    | "NORMAL";

  @Column("enum", { name: "mc_type2", enum: ["", "NORMAL", "NEW", "DEAL"] })
  mcType2: "" | "NORMAL" | "NEW" | "DEAL";

  @Column("enum", {
    name: "mc_display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mcDisplay: "" | "Y" | "N";

  @Column("varchar", { name: "mc_name", length: 255 })
  mcName: string;

  @Column("datetime", {
    name: "mc_start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  mcStartDate: Date;

  @Column("datetime", {
    name: "mc_end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  mcEndDate: Date;

  @Column("varchar", { name: "mc_image", length: 50 })
  mcImage: string;

  @Column("varchar", { name: "mc_url", length: 255 })
  mcUrl: string;

  @Column("mediumtext", { name: "mc_add_info" })
  mcAddInfo: string;

  @Column("int", { name: "mc_sort", unsigned: true, default: () => "'99'" })
  mcSort: number;

  @Column("datetime", {
    name: "mc_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  mcRegDate: Date;
}
