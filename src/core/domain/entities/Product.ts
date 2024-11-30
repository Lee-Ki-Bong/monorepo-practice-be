import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser", ["adminuser", "brandcode"], { unique: true })
@Index("cate", ["adminuser", "cate1", "cate2", "cate3", "display", "date"], {})
@Index("gid", ["adminuser", "gid", "display"], {})
@Index("product_type", ["adminuser", "productType"], {})
@Index("uid", ["uid"], {})
@Index("uidcate", ["adminuser", "uid"], {})
@Entity("product", { schema: "makeshop" })
export class Product {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "gid", length: 30 })
  gid: string;

  @Column("varchar", { name: "brandcode", length: 12 })
  brandcode: string;

  @Column("char", { name: "cate1", length: 3 })
  cate1: string;

  @Column("char", { name: "cate2", length: 3 })
  cate2: string;

  @Column("char", { name: "cate3", length: 3 })
  cate3: string;

  @Column("varchar", { name: "brandname", length: 255 })
  brandname: string;

  @Column("varchar", { name: "mobile_brandname", nullable: true, length: 255 })
  mobileBrandname: string | null;

  @Column("int", {
    name: "consumerprice",
    unsigned: true,
    default: () => "'0'",
  })
  consumerprice: number;

  @Column("int", { name: "sellprice", nullable: true })
  sellprice: number | null;

  @Column("int", { name: "buyprice", unsigned: true, default: () => "'0'" })
  buyprice: number;

  @Column("int", {
    name: "discountprice",
    nullable: true,
    default: () => "'0'",
  })
  discountprice: number | null;

  @Column("float", { name: "reserve", nullable: true, precision: 12 })
  reserve: number | null;

  @Column("float", { name: "mobile_reserve", nullable: true, precision: 12 })
  mobileReserve: number | null;

  @Column("mediumint", { name: "point", nullable: true, default: () => "'0'" })
  point: number | null;

  @Column("mediumint", { name: "commission", default: () => "'0'" })
  commission: number;

  @Column("mediumint", { name: "recmd_reserve", default: () => "'0'" })
  recmdReserve: number;

  @Column("mediumtext", { name: "keyword" })
  keyword: string;

  @Column("varchar", { name: "date", length: 14 })
  date: string;

  @Column("enum", {
    name: "sell_accept",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  sellAccept: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  display: "" | "Y" | "N";

  @Column("enum", {
    name: "best_product_display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  bestProductDisplay: "" | "Y" | "N";

  @Column("enum", {
    name: "best_review_display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  bestReviewDisplay: "" | "Y" | "N";

  @Column("enum", {
    name: "is_add_composition",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  isAddComposition: "" | "Y" | "N";

  @Column("varchar", {
    name: "product_type",
    length: 10,
    default: () => "'NORMAL'",
  })
  productType: string;

  @Column("enum", {
    name: "option_type",
    enum: ["", "NO", "NU", "NL", "OC", "PC", "PP", "PS", "DIY", "HYBRID"],
    default: () => "'NO'",
  })
  optionType:
    | ""
    | "NO"
    | "NU"
    | "NL"
    | "OC"
    | "PC"
    | "PP"
    | "PS"
    | "DIY"
    | "HYBRID";

  @Column("bigint", { name: "sellcount", unsigned: true, default: () => "'0'" })
  sellcount: string;

  @Column("bigint", {
    name: "total_sellcount",
    unsigned: true,
    default: () => "'0'",
  })
  totalSellcount: string;

  @Column("datetime", {
    name: "selldate",
    default: () => "'0000-00-00 00:00:00'",
  })
  selldate: Date;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;

  @Column("datetime", {
    name: "moddate",
    default: () => "'0000-00-00 00:00:00'",
  })
  moddate: Date;

  @Column("datetime", {
    name: "display_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  displayDate: Date;

  @Column("enum", {
    name: "brand_register_type",
    enum: ["", "makeshop", "makeb2b"],
    default: () => "'makeshop'",
  })
  brandRegisterType: "" | "makeshop" | "makeb2b";

  @Column("enum", {
    name: "ems_type",
    enum: ["", "DEFAULT", "KOR_ONLY", "OVERSEAS"],
    default: () => "'DEFAULT'",
  })
  emsType: "" | "DEFAULT" | "KOR_ONLY" | "OVERSEAS";

  @Column("mediumint", { name: "quantity", nullable: true })
  quantity: number | null;

  @Column("varchar", { name: "maximage", nullable: true, length: 255 })
  maximage: string | null;

  @Column("varchar", { name: "minimage", nullable: true, length: 255 })
  minimage: string | null;

  @Column("varchar", { name: "tinyimage", nullable: true, length: 255 })
  tinyimage: string | null;

  @Column("varchar", { name: "appimage", nullable: true, length: 25 })
  appimage: string | null;

  @Column("varchar", { name: "rolloverimage", nullable: true, length: 255 })
  rolloverimage: string | null;

  @Column("char", { name: "special", nullable: true, length: 1 })
  special: string | null;

  @Column("varchar", { name: "etctype", nullable: true, length: 255 })
  etctype: string | null;

  @Column("mediumint", { name: "provider", nullable: true, unsigned: true })
  provider: number | null;

  @Column("int", { name: "provide_delivery_price", default: () => "'0'" })
  provideDeliveryPrice: number;

  @Column("int", {
    name: "supply_code",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  supplyCode: number | null;

  @Column("int", { name: "cnt_view", unsigned: true, default: () => "'0'" })
  cntView: number;

  @Column("int", { name: "cnt_like", unsigned: true, default: () => "'0'" })
  cntLike: number;

  @Column("int", { name: "cnt_basket", unsigned: true, default: () => "'0'" })
  cntBasket: number;

  @Column("bigint", { name: "x_sort", unsigned: true, default: () => "'0'" })
  xSort: string;

  @Column("bigint", { name: "m_sort", unsigned: true, default: () => "'0'" })
  mSort: string;

  @Column("bigint", { name: "s_sort", unsigned: true, default: () => "'0'" })
  sSort: string;

  @Column("varchar", { name: "icons", length: 100 })
  icons: string;

  @Column("varchar", { name: "m_icons", length: 100 })
  mIcons: string;

  @Column("varchar", { name: "colors", length: 255 })
  colors: string;

  @Column("longtext", { name: "exception_apply_coupon", nullable: true })
  exceptionApplyCoupon: string | null;

  @Column("enum", {
    name: "option_display_type",
    enum: ["", "EACH", "EVERY"],
    default: () => "'EVERY'",
  })
  optionDisplayType: "" | "EACH" | "EVERY";

  @Column("enum", {
    name: "stock_manage_type",
    nullable: true,
    enum: ["", "NORMAL", "DEFAULT", "STO_CODE", "SYSTEM"],
    default: () => "'NORMAL'",
  })
  stockManageType: "" | "NORMAL" | "DEFAULT" | "STO_CODE" | "SYSTEM" | null;

  @Column("int", { name: "fc_uid", unsigned: true, default: () => "'0'" })
  fcUid: number;

  @Column("enum", {
    name: "maxorder_count_type",
    enum: ["", "EACH", "ALL"],
    default: () => "'EACH'",
  })
  maxorderCountType: "" | "EACH" | "ALL";

  @Column("enum", {
    name: "minorder_count_type",
    enum: ["", "EACH", "ALL"],
    default: () => "'EACH'",
  })
  minorderCountType: "" | "EACH" | "ALL";

  @Column("enum", {
    name: "rebuy_use",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  rebuyUse: "" | "N" | "Y";

  @Column("int", {
    name: "rebuy_period",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  rebuyPeriod: number | null;

  @Column("enum", {
    name: "smartpickup",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  smartpickup: "" | "Y" | "N";

  @Column("enum", {
    name: "smartpreview",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  smartpreview: "" | "Y" | "N";

  @Column("enum", {
    name: "contents_use",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  contentsUse: "" | "N" | "Y";

  @Column("longtext", { name: "contents_link", nullable: true })
  contentsLink: string | null;

  @Column("varchar", { name: "add_info1", length: 100 })
  addInfo1: string;

  @Column("varchar", { name: "add_info2", length: 100 })
  addInfo2: string;

  @Column("varchar", { name: "add_info3", length: 100 })
  addInfo3: string;

  @Column("varchar", { name: "add_info4", length: 100 })
  addInfo4: string;

  @Column("varchar", { name: "add_info5", length: 100 })
  addInfo5: string;

  @Column("varchar", { name: "add_info6", length: 100 })
  addInfo6: string;

  @Column("varchar", { name: "add_info7", length: 100 })
  addInfo7: string;

  @Column("varchar", { name: "add_info8", length: 100 })
  addInfo8: string;

  @Column("varchar", { name: "add_info9", length: 100 })
  addInfo9: string;

  @Column("varchar", { name: "add_info10", length: 100 })
  addInfo10: string;

  @Column("char", { name: "termdelivery", length: 1, default: () => "'N'" })
  termdelivery: string;

  @Column("enum", {
    name: "use_tax",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useTax: "" | "Y" | "N";

  @Column("enum", {
    name: "use_subs",
    enum: ["", "N", "Y", "O"],
    default: () => "'N'",
  })
  useSubs: "" | "N" | "Y" | "O";

  @Column("smallint", {
    name: "subs_discount",
    unsigned: true,
    default: () => "'0'",
  })
  subsDiscount: number;

  @Column("enum", {
    name: "not_only",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  notOnly: "" | "Y" | "N";

  @Column("mediumint", { name: "ocb_point", default: () => "'0'" })
  ocbPoint: number;

  @Column("enum", {
    name: "classic_product",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  classicProduct: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "use_label",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useLabel: "" | "Y" | "N";
}
