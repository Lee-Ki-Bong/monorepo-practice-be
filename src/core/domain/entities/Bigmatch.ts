import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bm_use", ["bmUse", "bmBannerImageUse", "bmEventDate"], {})
@Entity("bigmatch", { schema: "makeshop" })
export class Bigmatch {
  @PrimaryGeneratedColumn({ type: "int", name: "code", unsigned: true })
  code: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "bm_use",
    enum: ["", "P", "E"],
    default: () => "'P'",
  })
  bmUse: "" | "P" | "E";

  @Column("enum", {
    name: "bm_design",
    enum: ["", "T", "P"],
    default: () => "'T'",
  })
  bmDesign: "" | "T" | "P";

  @Column("mediumtext", { name: "bm_design_html" })
  bmDesignHtml: string;

  @Column("enum", {
    name: "bm_banner_image_use",
    enum: ["", "D", "U", "N"],
    default: () => "'N'",
  })
  bmBannerImageUse: "" | "D" | "U" | "N";

  @Column("varchar", { name: "bm_banner_image", length: 255 })
  bmBannerImage: string;

  @Column("varchar", { name: "bm_regdate", length: 14 })
  bmRegdate: string;

  @Column("varchar", { name: "bm_subject", length: 255 })
  bmSubject: string;

  @Column("varchar", {
    name: "bm_event_date",
    length: 30,
    default: () => "'|'",
  })
  bmEventDate: string;

  @Column("enum", {
    name: "bm_comment_member_read",
    enum: ["", "ME", "MG"],
    default: () => "'MG'",
  })
  bmCommentMemberRead: "" | "ME" | "MG";

  @Column("enum", {
    name: "bm_comment_member_write",
    enum: ["", "ME", "MP", "MG"],
    default: () => "'ME'",
  })
  bmCommentMemberWrite: "" | "ME" | "MP" | "MG";

  @Column("enum", {
    name: "bm_reserve_type",
    enum: ["", "A", "P", "N"],
    default: () => "'N'",
  })
  bmReserveType: "" | "A" | "P" | "N";

  @Column("varchar", { name: "bm_reserve", length: 30, default: () => "'|'" })
  bmReserve: string;

  @Column("int", { name: "bm_width", default: () => "'700'" })
  bmWidth: number;

  @Column("enum", {
    name: "bm_title_image_use",
    enum: ["", "D", "U", "N"],
    default: () => "'D'",
  })
  bmTitleImageUse: "" | "D" | "U" | "N";

  @Column("varchar", { name: "bm_title_image", length: 255 })
  bmTitleImage: string;

  @Column("enum", {
    name: "bm_main_image_use",
    enum: ["", "D", "U", "N"],
    default: () => "'D'",
  })
  bmMainImageUse: "" | "D" | "U" | "N";

  @Column("enum", {
    name: "mobile_bm_main_image_use",
    enum: ["", "D", "U", "N"],
    default: () => "'D'",
  })
  mobileBmMainImageUse: "" | "D" | "U" | "N";

  @Column("varchar", { name: "bm_main_image", length: 255 })
  bmMainImage: string;

  @Column("varchar", { name: "mobile_bm_main_image", length: 255 })
  mobileBmMainImage: string;

  @Column("int", { name: "bm_bar_type", default: () => "'0'" })
  bmBarType: number;

  @Column("enum", {
    name: "bm_content_use",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  bmContentUse: "" | "Y" | "N";

  @Column("enum", {
    name: "mobile_bm_content_use",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  mobileBmContentUse: "" | "Y" | "N";

  @Column("int", { name: "bm_content_fontsize", default: () => "'10'" })
  bmContentFontsize: number;

  @Column("varchar", { name: "bm_content_fontcolor", length: 6 })
  bmContentFontcolor: string;

  @Column("mediumtext", { name: "bm_content" })
  bmContent: string;

  @Column("mediumtext", { name: "mobile_bm_content" })
  mobileBmContent: string;

  @Column("varchar", { name: "brand1_code", length: 12 })
  brand1Code: string;

  @Column("varchar", { name: "brand1_image", length: 255 })
  brand1Image: string;

  @Column("varchar", { name: "brand1_name", length: 255 })
  brand1Name: string;

  @Column("mediumtext", { name: "brand1_content" })
  brand1Content: string;

  @Column("varchar", { name: "brand2_code", length: 12 })
  brand2Code: string;

  @Column("varchar", { name: "brand2_image", length: 255 })
  brand2Image: string;

  @Column("varchar", { name: "brand2_name", length: 255 })
  brand2Name: string;

  @Column("mediumtext", { name: "brand2_content" })
  brand2Content: string;

  @Column("int", { name: "bm_comm_width", default: () => "'0'" })
  bmCommWidth: number;

  @Column("varchar", { name: "bm_comm_border", length: 6 })
  bmCommBorder: string;

  @Column("varchar", { name: "bm_comm_bg", length: 6 })
  bmCommBg: string;

  @Column("varchar", { name: "bm_comm_fontcolor", length: 6 })
  bmCommFontcolor: string;

  @Column("mediumtext", { name: "bm_comm_restricted" })
  bmCommRestricted: string;

  @Column("int", { name: "bm_comm_maxlist", default: () => "'0'" })
  bmCommMaxlist: number;

  @Column("enum", {
    name: "bm_comment_writer",
    enum: ["", "ID", "NAME"],
    default: () => "'ID'",
  })
  bmCommentWriter: "" | "ID" | "NAME";

  @Column("enum", {
    name: "bm_comment_writer_private",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  bmCommentWriterPrivate: "" | "Y" | "N";

  @Column("char", {
    name: "bm_comment_writer_show_cnt",
    nullable: true,
    length: 2,
  })
  bmCommentWriterShowCnt: string | null;
}
