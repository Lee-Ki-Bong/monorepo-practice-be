import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("brand_sort", ["adminuser", "brandId", "type", "sort"], {})
@Index("idx_auto_brand_id", ["brandId"], {})
@Entity("brand_manage", { schema: "makeshop" })
export class BrandManage {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "brand_id", unsigned: true })
  brandId: number;

  @Column("int", {
    primary: true,
    name: "brand_mid",
    unsigned: true,
    default: () => "'0'",
  })
  brandMid: number;

  @Column("int", {
    primary: true,
    name: "brand_sid",
    unsigned: true,
    default: () => "'0'",
  })
  brandSid: number;

  @Column("enum", {
    name: "type",
    enum: ["", "BRAND", "ORIGIN", "MAKER"],
    default: () => "'BRAND'",
  })
  type: "" | "BRAND" | "ORIGIN" | "MAKER";

  @Column("int", { name: "sort", unsigned: true, default: () => "'0'" })
  sort: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("mediumtext", { name: "keyword" })
  keyword: string;

  @Column("enum", {
    name: "use_banner",
    enum: ["", "IMG", "HTML", "NO"],
    default: () => "'NO'",
  })
  useBanner: "" | "IMG" | "HTML" | "NO";

  @Column("mediumtext", { name: "banner" })
  banner: string;

  @Column("varchar", { name: "banner_img", length: 255 })
  bannerImg: string;

  @Column("enum", {
    name: "use_m_banner",
    enum: ["", "IMG", "HTML", "NO"],
    default: () => "'NO'",
  })
  useMBanner: "" | "IMG" | "HTML" | "NO";

  @Column("mediumtext", { name: "m_banner" })
  mBanner: string;

  @Column("varchar", { name: "m_banner_img", length: 255 })
  mBannerImg: string;

  @Column("varchar", { name: "brand_img", length: 255 })
  brandImg: string;

  @Column("varchar", { name: "link_url", length: 255 })
  linkUrl: string;

  @Column("enum", {
    name: "order_by",
    enum: [
      "",
      "REGDATE",
      "VIEWCNT",
      "PRICE_DESC",
      "PRICE_ASC",
      "PRD_NAME",
      "REG_TOP",
      "REG_BOTTOM",
    ],
    default: () => "'VIEWCNT'",
  })
  orderBy:
    | ""
    | "REGDATE"
    | "VIEWCNT"
    | "PRICE_DESC"
    | "PRICE_ASC"
    | "PRD_NAME"
    | "REG_TOP"
    | "REG_BOTTOM";

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "upd_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  updDate: Date;

  @Column("enum", {
    name: "display",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  display: "" | "Y" | "N" | null;

  @Column("int", { name: "product_num", default: () => "'1'" })
  productNum: number;

  @Column("longtext", { name: "content_kor" })
  contentKor: string;

  @Column("longtext", { name: "content_chn" })
  contentChn: string;

  @Column("enum", {
    name: "chn_display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  chnDisplay: "" | "Y" | "N";

  @Column("longtext", { name: "content_eng" })
  contentEng: string;

  @Column("enum", {
    name: "eng_display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  engDisplay: "" | "Y" | "N";

  @Column("longtext", { name: "m_content_kor" })
  mContentKor: string;

  @Column("longtext", { name: "m_content_chn" })
  mContentChn: string;

  @Column("enum", {
    name: "m_chn_display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mChnDisplay: "" | "Y" | "N";

  @Column("longtext", { name: "m_content_eng" })
  mContentEng: string;

  @Column("enum", {
    name: "m_eng_display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mEngDisplay: "" | "Y" | "N";

  @Column("enum", {
    name: "sort_sold_out",
    nullable: true,
    enum: ["", "Y", "N", "C"],
    default: () => "'C'",
  })
  sortSoldOut: "" | "Y" | "N" | "C" | null;
}
