import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_plan_id", ["planId"], {})
@Entity("neodesign_plan", { schema: "makeshop" })
export class NeodesignPlan {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "plan_id", unsigned: true })
  planId: number;

  @Column("varchar", { name: "plan_title", length: 255 })
  planTitle: string;

  @Column("int", { name: "dgnset_id", default: () => "'0'" })
  dgnsetId: number;

  @Column("int", { name: "design_id", default: () => "'0'" })
  designId: number;

  @Column("int", { name: "mobile_design_id", default: () => "'1'" })
  mobileDesignId: number;

  @Column("date", { name: "plan_date_start", default: () => "'0000-00-00'" })
  planDateStart: string;

  @Column("date", { name: "plan_date_end", default: () => "'0000-00-00'" })
  planDateEnd: string;

  @Column("enum", {
    name: "plan_title_type",
    enum: ["", "NONE", "IMG", "HTML"],
    default: () => "'NONE'",
  })
  planTitleType: "" | "NONE" | "IMG" | "HTML";

  @Column("enum", {
    name: "plan_mobile_title_type",
    enum: ["", "NONE", "IMG", "HTML"],
    default: () => "'NONE'",
  })
  planMobileTitleType: "" | "NONE" | "IMG" | "HTML";

  @Column("varchar", { name: "plan_title_image", length: 255 })
  planTitleImage: string;

  @Column("varchar", { name: "plan_mobile_title_image", length: 255 })
  planMobileTitleImage: string;

  @Column("mediumtext", { name: "plan_title_html" })
  planTitleHtml: string;

  @Column("mediumtext", { name: "plan_mobile_title_html" })
  planMobileTitleHtml: string;

  @Column("char", { name: "plan_sort", length: 1, default: () => "'1'" })
  planSort: string;

  @Column("enum", {
    name: "plan_soldout",
    enum: ["", "HIDDEN", "VIEW", "BACK"],
    default: () => "'HIDDEN'",
  })
  planSoldout: "" | "HIDDEN" | "VIEW" | "BACK";

  @Column("enum", {
    name: "plan_use_category",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  planUseCategory: "" | "N" | "Y";

  @Column("enum", {
    name: "plan_page_type",
    enum: ["", "ALL", "CATE"],
    default: () => "'ALL'",
  })
  planPageType: "" | "ALL" | "CATE";

  @Column("int", { name: "plan_mobile_select_category", default: () => "'0'" })
  planMobileSelectCategory: number;

  @Column("int", { name: "plan_hit", default: () => "'0'" })
  planHit: number;

  @Column("int", { name: "plan_order", default: () => "'0'" })
  planOrder: number;

  @Column("enum", {
    name: "plan_banner_display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  planBannerDisplay: "" | "Y" | "N";

  @Column("varchar", { name: "plan_banner_img_pc", length: 100 })
  planBannerImgPc: string;

  @Column("varchar", { name: "plan_banner_img_mobile", length: 100 })
  planBannerImgMobile: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("time", { name: "plan_time_start", default: () => "'00:00:00'" })
  planTimeStart: string;

  @Column("time", { name: "plan_time_end", default: () => "'00:00:00'" })
  planTimeEnd: string;

  @Column("enum", {
    name: "page_type",
    enum: ["", "BASIC", "HIDDEN"],
    default: () => "'BASIC'",
  })
  pageType: "" | "BASIC" | "HIDDEN";

  @Column("varchar", { name: "hidden_page_code", length: 50 })
  hiddenPageCode: string;

  @Column("enum", {
    name: "hidden_page_access",
    enum: ["", "ALL", "MEMBER"],
    default: () => "'ALL'",
  })
  hiddenPageAccess: "" | "ALL" | "MEMBER";

  @Column("varchar", { name: "plan_sns_image", length: 255 })
  planSnsImage: string;

  @Column("varchar", { name: "plan_brandname", length: 255 })
  planBrandname: string;

  @Column("varchar", {
    name: "plan_product_type",
    length: 10,
    default: () => "'product'",
  })
  planProductType: string;

  @Column("varchar", { name: "plan_thumb_title", length: 255 })
  planThumbTitle: string;

  @Column("varchar", { name: "plan_thumb_src", length: 255 })
  planThumbSrc: string;

  @Column("varchar", { name: "plan_list_image_pc", length: 255 })
  planListImagePc: string;

  @Column("varchar", { name: "plan_list_image_mo", length: 255 })
  planListImageMo: string;
}
