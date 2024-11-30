import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("index_edate", ["adminuser", "pdEndDate"], {})
@Index("index_id", ["pdId"], {})
@Index("index_sdate", ["adminuser", "pdStartDate"], {})
@Entity("product_design", { schema: "makeshop" })
export class ProductDesign {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "pd_id", unsigned: true })
  pdId: number;

  @Column("enum", {
    name: "pd_use_design",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  pdUseDesign: "" | "Y" | "N";

  @Column("varchar", { name: "pd_title", length: 120 })
  pdTitle: string;

  @Column("mediumtext", { name: "pd_sub_title" })
  pdSubTitle: string;

  @Column("datetime", {
    name: "pd_start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pdStartDate: Date;

  @Column("datetime", {
    name: "pd_end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pdEndDate: Date;

  @Column("varchar", { name: "pd_image_pc", length: 255 })
  pdImagePc: string;

  @Column("varchar", { name: "pd_image_mobile", length: 255 })
  pdImageMobile: string;

  @Column("varchar", { name: "pd_link_pc", length: 255 })
  pdLinkPc: string;

  @Column("varchar", { name: "pd_link_mobile", length: 255 })
  pdLinkMobile: string;

  @Column("enum", {
    name: "pd_target",
    enum: ["", "SELF", "NEW"],
    default: () => "'NEW'",
  })
  pdTarget: "" | "SELF" | "NEW";

  @Column("smallint", {
    name: "pd_slide_speed",
    unsigned: true,
    default: () => "'4'",
  })
  pdSlideSpeed: number;

  @Column("enum", {
    name: "pd_use_slide_auto",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  pdUseSlideAuto: "" | "Y" | "N";

  @Column("varchar", { name: "pd_more_view_text", length: 255 })
  pdMoreViewText: string;

  @Column("varchar", { name: "pd_more_view_link_pc", length: 255 })
  pdMoreViewLinkPc: string;

  @Column("varchar", { name: "pd_more_view_link_mobile", length: 255 })
  pdMoreViewLinkMobile: string;

  @Column("enum", {
    name: "pd_more_view_target",
    enum: ["", "SELF", "NEW"],
    default: () => "'NEW'",
  })
  pdMoreViewTarget: "" | "SELF" | "NEW";

  @Column("mediumtext", { name: "pd_pc_data" })
  pdPcData: string;

  @Column("mediumtext", { name: "pd_mobile_data" })
  pdMobileData: string;

  @Column("datetime", {
    name: "pd_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pdRegDate: Date;

  @Column("datetime", {
    name: "pd_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pdModDate: Date;
}
