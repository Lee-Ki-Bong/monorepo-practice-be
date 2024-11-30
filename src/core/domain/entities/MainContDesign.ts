import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_mc_uid", ["mcUid"], {})
@Index("mc_display", ["adminuser", "mcDisplay", "mcStartDate", "mcEndDate"], {})
@Entity("main_cont_design", { schema: "makeshop" })
export class MainContDesign {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", {
    primary: true,
    name: "mc_type",
    length: 20,
    default: () => "'top'",
  })
  mcType: string;

  @PrimaryGeneratedColumn({ type: "int", name: "mc_uid", unsigned: true })
  mcUid: number;

  @Column("int", { name: "at_uid", unsigned: true, default: () => "'0'" })
  atUid: number;

  @Column("varchar", { name: "mc_category", length: 30 })
  mcCategory: string;

  @Column("varchar", { name: "mc_subject", length: 100 })
  mcSubject: string;

  @Column("varchar", { name: "mc_title", length: 100 })
  mcTitle: string;

  @Column("varchar", { name: "mc_title_mobile", length: 100 })
  mcTitleMobile: string;

  @Column("mediumtext", { name: "mc_content" })
  mcContent: string;

  @Column("mediumtext", { name: "mc_content_mobile" })
  mcContentMobile: string;

  @Column("mediumtext", { name: "mc_add_info", nullable: true })
  mcAddInfo: string | null;

  @Column("varchar", { name: "mc_image", nullable: true, length: 150 })
  mcImage: string | null;

  @Column("varchar", { name: "mc_image_mobile", nullable: true, length: 150 })
  mcImageMobile: string | null;

  @Column("varchar", { name: "mc_link", nullable: true, length: 255 })
  mcLink: string | null;

  @Column("varchar", { name: "mc_link_mobile", nullable: true, length: 255 })
  mcLinkMobile: string | null;

  @Column("varchar", { name: "mc_sort_date", length: 14 })
  mcSortDate: string;

  @Column("enum", {
    name: "mc_display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mcDisplay: "" | "Y" | "N";

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

  @Column("datetime", {
    name: "mc_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  mcRegDate: Date;

  @Column("datetime", {
    name: "mc_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  mcModDate: Date;

  @Column("enum", {
    name: "mc_link_target",
    enum: ["", "SELF", "BLANK"],
    default: () => "'SELF'",
  })
  mcLinkTarget: "" | "SELF" | "BLANK";

  @Column("enum", {
    name: "mc_link_mobile_target",
    enum: ["", "SELF", "BLANK"],
    default: () => "'SELF'",
  })
  mcLinkMobileTarget: "" | "SELF" | "BLANK";

  @Column("varchar", { name: "mc_video_link", nullable: true, length: 255 })
  mcVideoLink: string | null;

  @Column("varchar", { name: "mc_video_title", nullable: true, length: 100 })
  mcVideoTitle: string | null;

  @Column("enum", {
    name: "mc_exp_check",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mcExpCheck: "" | "Y" | "N";

  @Column("enum", {
    name: "mc_display_check",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mcDisplayCheck: "" | "Y" | "N";

  @Column("varchar", { name: "mc_image_over", nullable: true, length: 100 })
  mcImageOver: string | null;

  @Column("varchar", { name: "mc_image_title", nullable: true, length: 100 })
  mcImageTitle: string | null;

  @Column("varchar", { name: "mc_image_info", nullable: true, length: 100 })
  mcImageInfo: string | null;

  @Column("mediumtext", { name: "mc_extra_info", nullable: true })
  mcExtraInfo: string | null;
}
