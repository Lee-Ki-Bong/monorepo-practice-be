import { Column, Entity, Index } from "typeorm";

@Index("o_code", ["oCode"], {})
@Entity("code", { schema: "makeshop" })
export class Code {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("char", { primary: true, name: "code", length: 3 })
  code: string;

  @Column("char", { primary: true, name: "xcode", length: 3 })
  xcode: string;

  @Column("char", { primary: true, name: "scode", length: 3 })
  scode: string;

  @Column("char", { primary: true, name: "type", length: 1 })
  type: string;

  @Column("char", { name: "o_code", length: 2 })
  oCode: string;

  @Column("char", { name: "codeimg", nullable: true, length: 1 })
  codeimg: string | null;

  @Column("char", { name: "codeimg_mobile", nullable: true, length: 1 })
  codeimgMobile: string | null;

  @Column("varchar", { name: "groupid", nullable: true, length: 4 })
  groupid: string | null;

  @Column("varchar", { name: "codename", nullable: true, length: 255 })
  codename: string | null;

  @Column("varchar", { name: "m_codename", nullable: true, length: 255 })
  mCodename: string | null;

  @Column("enum", {
    name: "m_display",
    enum: ["", "YES", "NO"],
    default: () => "'YES'",
  })
  mDisplay: "" | "YES" | "NO";

  @Column("enum", {
    name: "pc_display",
    nullable: true,
    enum: ["", "YES", "NO"],
    default: () => "'YES'",
  })
  pcDisplay: "" | "YES" | "NO" | null;

  @Column("enum", {
    name: "sale_display",
    nullable: true,
    enum: ["", "YES", "NO"],
    default: () => "'YES'",
  })
  saleDisplay: "" | "YES" | "NO" | null;

  @Column("enum", {
    name: "search_display",
    nullable: true,
    enum: ["", "YES", "NO"],
    default: () => "'YES'",
  })
  searchDisplay: "" | "YES" | "NO" | null;

  @Column("enum", {
    name: "sm_display",
    enum: ["", "YES", "NO"],
    default: () => "'YES'",
  })
  smDisplay: "" | "YES" | "NO";

  @Column("char", {
    name: "list_type",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  listType: string | null;

  @Column("char", {
    name: "detail_type",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  detailType: string | null;

  @Column("smallint", {
    name: "productnum",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  productnum: number | null;

  @Column("int", {
    name: "next_brand_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  nextBrandId: number | null;

  @Column("datetime", { name: "timekey", nullable: true })
  timekey: Date | null;

  @Column("datetime", {
    name: "modify_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modifyDate: Date;

  @Column("varchar", { name: "sort", length: 10, default: () => "'regdate'" })
  sort: string;

  @Column("enum", {
    name: "soldout_sort",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  soldoutSort: "" | "Y" | "N";

  @Column("int", {
    name: "estimate_set",
    nullable: true,
    default: () => "'999'",
  })
  estimateSet: number | null;

  @Column("enum", { name: "zoom", enum: ["", "Y", "N"], default: () => "'Y'" })
  zoom: "" | "Y" | "N";

  @Column("varchar", { name: "code_title", nullable: true, length: 255 })
  codeTitle: string | null;

  @Column("varchar", { name: "company_groupid", nullable: true, length: 8 })
  companyGroupid: string | null;

  @Column("varchar", { name: "access_msg", nullable: true, length: 255 })
  accessMsg: string | null;

  @Column("enum", {
    name: "barotalk_display",
    enum: ["", "YES", "NO"],
    default: () => "'YES'",
  })
  barotalkDisplay: "" | "YES" | "NO";

  @Column("varchar", { name: "code_order_limit", length: 255 })
  codeOrderLimit: string;

  @Column("enum", {
    name: "use_order_limit",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useOrderLimit: "" | "Y" | "N";

  @Column("varchar", { name: "order_limit_info", length: 255 })
  orderLimitInfo: string;

  @Column("enum", {
    name: "upper_category_img_pc",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  upperCategoryImgPc: "" | "N" | "Y";

  @Column("enum", {
    name: "upper_category_img_mo",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  upperCategoryImgMo: "" | "N" | "Y";
}
