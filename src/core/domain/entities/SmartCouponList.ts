import { Column, Entity, Index } from "typeorm";

@Index("index_auto_type", ["adminuser", "scAutoType"], {})
@Index("index_benefit", ["adminuser", "scBenefit"], {})
@Index("index_issue_end_date", ["adminuser", "scIssueEndDate"], {})
@Index("index_issue_type", ["adminuser", "scIssueType"], {})
@Index("index_product_type", ["adminuser", "scProductType"], {})
@Index("index_status", ["adminuser", "scStatus"], {})
@Index("index_target", ["adminuser", "scTarget"], {})
@Index("index_use_end_date", ["adminuser", "scUseEndDate"], {})
@Entity("smart_coupon_list", { schema: "makeshop" })
export class SmartCouponList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "couponnum", length: 8 })
  couponnum: string;

  @Column("varchar", { name: "sc_name", length: 255 })
  scName: string;

  @Column("mediumtext", { name: "sc_comment" })
  scComment: string;

  @Column("enum", {
    name: "sc_status",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  scStatus: "" | "Y" | "N";

  @Column("enum", {
    name: "sc_target",
    enum: ["", "PRD", "PRD_DUP", "ORDER", "ORDER_DUP", "DELIVERY"],
    default: () => "'PRD'",
  })
  scTarget: "" | "PRD" | "PRD_DUP" | "ORDER" | "ORDER_DUP" | "DELIVERY";

  @Column("enum", {
    name: "sc_benefit",
    enum: ["", "DISCOUNT", "DISCOUNT_RESERVE", "FREE", "RESERVE", "GIFT"],
    default: () => "'DISCOUNT'",
  })
  scBenefit: "" | "DISCOUNT" | "DISCOUNT_RESERVE" | "FREE" | "RESERVE" | "GIFT";

  @Column("char", { name: "sc_purpose", length: 3 })
  scPurpose: string;

  @Column("enum", {
    name: "sc_product_type",
    enum: ["", "NORMAL", "PACKAGE"],
    default: () => "'NORMAL'",
  })
  scProductType: "" | "NORMAL" | "PACKAGE";

  @Column("enum", {
    name: "sc_issue_type",
    enum: ["", "DOWN", "MANUAL", "AUTO"],
    default: () => "'DOWN'",
  })
  scIssueType: "" | "DOWN" | "MANUAL" | "AUTO";

  @Column("int", { name: "sc_limit", unsigned: true, default: () => "'0'" })
  scLimit: number;

  @Column("enum", {
    name: "sc_standard_price",
    enum: ["", "PRD", "PRD_SUM", "PAYMENT"],
    default: () => "'PRD'",
  })
  scStandardPrice: "" | "PRD" | "PRD_SUM" | "PAYMENT";

  @Column("enum", {
    name: "sc_standard_price_amount",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  scStandardPriceAmount: "" | "Y" | "N";

  @Column("set", {
    name: "sc_standard_delivery",
    enum: ["BASIC", "AREA", "ADD"],
    default: () => ["BASIC", "AREA", "ADD"],
  })
  scStandardDelivery: ("BASIC" | "AREA" | "ADD")[];

  @Column("int", {
    name: "sc_min_order_price",
    unsigned: true,
    default: () => "'0'",
  })
  scMinOrderPrice: number;

  @Column("enum", {
    name: "sc_min_order_price_type",
    enum: ["", "NONE", "PRD", "PRD_TOTAL", "PAYMENT"],
    default: () => "'NONE'",
  })
  scMinOrderPriceType: "" | "NONE" | "PRD" | "PRD_TOTAL" | "PAYMENT";

  @Column("set", {
    name: "sc_delivery_type",
    nullable: true,
    enum: ["BASIC", "AREA", "ADD"],
  })
  scDeliveryType: ("BASIC" | "AREA" | "ADD")[] | null;

  @Column("enum", {
    name: "sc_in_option_price",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  scInOptionPrice: "" | "Y" | "N";

  @Column("enum", {
    name: "sc_use_group_discount",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  scUseGroupDiscount: "" | "Y" | "N";

  @Column("enum", {
    name: "sc_give_product_reserve",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  scGiveProductReserve: "" | "Y" | "N";

  @Column("enum", {
    name: "sc_use_order_reserve",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  scUseOrderReserve: "" | "Y" | "N";

  @Column("enum", {
    name: "sc_minus_used_reserve",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  scMinusUsedReserve: "" | "Y" | "N";

  @Column("enum", {
    name: "sc_provider",
    enum: ["", "ALL", "PROVIDER"],
    default: () => "'ALL'",
  })
  scProvider: "" | "ALL" | "PROVIDER";

  @Column("int", {
    name: "sc_provider_code",
    unsigned: true,
    default: () => "'0'",
  })
  scProviderCode: number;

  @Column("enum", {
    name: "sc_only_premium",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  scOnlyPremium: "" | "Y" | "N";

  @Column("enum", {
    name: "sc_use_subs_order",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  scUseSubsOrder: "" | "Y" | "N";

  @Column("enum", {
    name: "sc_discount_type",
    enum: ["", "WON", "PERCENT", "ALL"],
    default: () => "'WON'",
  })
  scDiscountType: "" | "WON" | "PERCENT" | "ALL";

  @Column("int", {
    name: "sc_discount_price",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  scDiscountPrice: number | null;

  @Column("smallint", {
    name: "sc_discount_trim_unit",
    nullable: true,
    default: () => "'0'",
  })
  scDiscountTrimUnit: number | null;

  @Column("enum", {
    name: "sc_discount_trim_type",
    nullable: true,
    enum: ["", "ceil", "floor", "round"],
    default: () => "'ceil'",
  })
  scDiscountTrimType: "" | "ceil" | "floor" | "round" | null;

  @Column("int", {
    name: "sc_discount_max_price",
    unsigned: true,
    default: () => "'0'",
  })
  scDiscountMaxPrice: number;

  @Column("smallint", {
    name: "sc_discount_max_percent",
    unsigned: true,
    default: () => "'0'",
  })
  scDiscountMaxPercent: number;

  @Column("enum", {
    name: "sc_reserve_type",
    enum: ["", "WON", "PERCENT", "ALL"],
    default: () => "'WON'",
  })
  scReserveType: "" | "WON" | "PERCENT" | "ALL";

  @Column("int", {
    name: "sc_reserve_price",
    unsigned: true,
    default: () => "'0'",
  })
  scReservePrice: number;

  @Column("int", {
    name: "sc_reserve_trim_unit",
    unsigned: true,
    default: () => "'0'",
  })
  scReserveTrimUnit: number;

  @Column("enum", {
    name: "sc_reserve_trim_type",
    enum: ["", "ceil", "floor", "round"],
    default: () => "'ceil'",
  })
  scReserveTrimType: "" | "ceil" | "floor" | "round";

  @Column("int", {
    name: "sc_reserve_max_price",
    unsigned: true,
    default: () => "'0'",
  })
  scReserveMaxPrice: number;

  @Column("smallint", {
    name: "sc_reserve_max_percent",
    unsigned: true,
    default: () => "'0'",
  })
  scReserveMaxPercent: number;

  @Column("enum", {
    name: "sc_use_status",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  scUseStatus: "" | "Y" | "N";

  @Column("enum", {
    name: "sc_use_date_type",
    enum: ["", "FIX", "AFTER"],
    default: () => "'FIX'",
  })
  scUseDateType: "" | "FIX" | "AFTER";

  @Column("datetime", {
    name: "sc_use_start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  scUseStartDate: Date;

  @Column("datetime", {
    name: "sc_use_end_date",
    default: () => "'2999-12-31 23:59:59'",
  })
  scUseEndDate: Date;

  @Column("enum", {
    name: "sc_use_after_type",
    enum: ["", "DAY", "MONTH"],
    default: () => "'DAY'",
  })
  scUseAfterType: "" | "DAY" | "MONTH";

  @Column("mediumint", {
    name: "sc_use_after_days",
    unsigned: true,
    default: () => "'0'",
  })
  scUseAfterDays: number;

  @Column("set", {
    name: "sc_use_week",
    enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    default: () => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  })
  scUseWeek: ("Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun")[];

  @Column("set", {
    name: "sc_use_device",
    enum: ["PC", "MOBILE", "APP"],
    default: () => ["PC", "MOBILE", "APP"],
  })
  scUseDevice: ("PC" | "MOBILE" | "APP")[];

  @Column("varchar", { name: "sc_use_referer", length: 255 })
  scUseReferer: string;

  @Column("varchar", {
    name: "sc_use_payment",
    length: 255,
    default: () => "'ALL'",
  })
  scUsePayment: string;

  @Column("enum", {
    name: "sc_use_order_condition",
    enum: ["", "NONE", "FIRST", "FIRST_APP"],
    default: () => "'NONE'",
  })
  scUseOrderCondition: "" | "NONE" | "FIRST" | "FIRST_APP";

  @Column("smallint", {
    name: "sc_use_limit_product",
    unsigned: true,
    default: () => "'0'",
  })
  scUseLimitProduct: number;

  @Column("smallint", {
    name: "sc_use_limit_order",
    unsigned: true,
    default: () => "'0'",
  })
  scUseLimitOrder: number;

  @Column("enum", {
    name: "sc_use_condition",
    enum: ["", "ALL", "UID", "CATE", "VIRTUAL", "PROVIDER", "BRAND"],
    default: () => "'ALL'",
  })
  scUseCondition:
    | ""
    | "ALL"
    | "UID"
    | "CATE"
    | "VIRTUAL"
    | "PROVIDER"
    | "BRAND";

  @Column("enum", {
    name: "sc_use_except_condition",
    enum: ["", "NONE", "UID", "CATE", "VIRTUAL", "PROVIDER", "BRAND"],
    default: () => "'NONE'",
  })
  scUseExceptCondition:
    | ""
    | "NONE"
    | "UID"
    | "CATE"
    | "VIRTUAL"
    | "PROVIDER"
    | "BRAND";

  @Column("varchar", { name: "sc_use_group", length: 255 })
  scUseGroup: string;

  @Column("varchar", { name: "sc_use_except_group", length: 255 })
  scUseExceptGroup: string;

  @Column("enum", {
    name: "sc_use_duplication",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  scUseDuplication: "" | "Y" | "N";

  @Column("enum", {
    name: "sc_use_place",
    enum: ["", "ALL", "ONLINE", "OFFLINE"],
    default: () => "'ONLINE'",
  })
  scUsePlace: "" | "ALL" | "ONLINE" | "OFFLINE";

  @Column("varchar", { name: "sc_use_offline_shopcode", length: 255 })
  scUseOfflineShopcode: string;

  @Column("enum", {
    name: "sc_issue_status",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  scIssueStatus: "" | "Y" | "N";

  @Column("int", {
    name: "sc_issue_count",
    unsigned: true,
    default: () => "'0'",
  })
  scIssueCount: number;

  @Column("datetime", {
    name: "sc_issue_start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  scIssueStartDate: Date;

  @Column("datetime", {
    name: "sc_issue_end_date",
    default: () => "'2999-12-31 23:59:59'",
  })
  scIssueEndDate: Date;

  @Column("set", {
    name: "sc_issue_week",
    enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    default: () => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  })
  scIssueWeek: ("Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun")[];

  @Column("set", {
    name: "sc_issue_device",
    enum: ["PC", "MOBILE", "APP"],
    default: () => ["PC", "MOBILE", "APP"],
  })
  scIssueDevice: ("PC" | "MOBILE" | "APP")[];

  @Column("mediumint", {
    name: "sc_issue_limit_user",
    unsigned: true,
    default: () => "'10000'",
  })
  scIssueLimitUser: number;

  @Column("enum", {
    name: "sc_issue_condition",
    enum: ["", "ALL", "UID", "CATE", "VIRTUAL", "PROVIDER", "BRAND"],
    default: () => "'ALL'",
  })
  scIssueCondition:
    | ""
    | "ALL"
    | "UID"
    | "CATE"
    | "VIRTUAL"
    | "PROVIDER"
    | "BRAND";

  @Column("enum", {
    name: "sc_issue_except_condition",
    enum: ["", "NONE", "UID", "CATE", "VIRTUAL", "PROVIDER", "BRAND"],
    default: () => "'NONE'",
  })
  scIssueExceptCondition:
    | ""
    | "NONE"
    | "UID"
    | "CATE"
    | "VIRTUAL"
    | "PROVIDER"
    | "BRAND";

  @Column("varchar", { name: "sc_issue_group", length: 255 })
  scIssueGroup: string;

  @Column("varchar", { name: "sc_issue_except_group", length: 255 })
  scIssueExceptGroup: string;

  @Column("enum", {
    name: "sc_issue_price_type",
    enum: ["", "ALL", "BETWEEN"],
    default: () => "'ALL'",
  })
  scIssuePriceType: "" | "ALL" | "BETWEEN";

  @Column("int", {
    name: "sc_issue_price",
    unsigned: true,
    default: () => "'0'",
  })
  scIssuePrice: number;

  @Column("int", {
    name: "sc_issue_end_price",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  scIssueEndPrice: number | null;

  @Column("enum", {
    name: "sc_issue_delivery",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  scIssueDelivery: "" | "Y" | "N";

  @Column("enum", {
    name: "sc_issue_duplication",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  scIssueDuplication: "" | "Y" | "N";

  @Column("enum", {
    name: "sc_issue_add",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  scIssueAdd: "" | "Y" | "N";

  @Column("mediumint", {
    name: "sc_issue_add_limit",
    unsigned: true,
    default: () => "'9999'",
  })
  scIssueAddLimit: number;

  @Column("enum", {
    name: "sc_issue_is_agree",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  scIssueIsAgree: "" | "Y" | "N";

  @Column("varchar", { name: "sc_issue_agree_msg", length: 100 })
  scIssueAgreeMsg: string;

  @Column("enum", {
    name: "sc_down_type",
    enum: ["", "ONCE", "ALL"],
    default: () => "'ONCE'",
  })
  scDownType: "" | "ONCE" | "ALL";

  @Column("varchar", { name: "sc_down_referer", length: 255 })
  scDownReferer: string;

  @Column("enum", {
    name: "sc_down_display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  scDownDisplay: "" | "Y" | "N";

  @Column("enum", {
    name: "sc_auto_type",
    enum: [
      "",
      "NONE",
      "JOIN",
      "PRODUCT_BUY",
      "FIRST_ORDER",
      "FIRST_ORDER_APP",
      "BUY_PRICE",
      "LOGIN",
      "DORMANT",
      "ROUTINE",
    ],
    default: () => "'NONE'",
  })
  scAutoType:
    | ""
    | "NONE"
    | "JOIN"
    | "PRODUCT_BUY"
    | "FIRST_ORDER"
    | "FIRST_ORDER_APP"
    | "BUY_PRICE"
    | "LOGIN"
    | "DORMANT"
    | "ROUTINE";

  @Column("enum", {
    name: "sc_auto_order_state",
    enum: ["", "ORDER", "DELIVERY", "COMPLETE"],
    default: () => "'DELIVERY'",
  })
  scAutoOrderState: "" | "ORDER" | "DELIVERY" | "COMPLETE";

  @Column("mediumint", {
    name: "sc_auto_delay",
    unsigned: true,
    default: () => "'1'",
  })
  scAutoDelay: number;

  @Column("smallint", {
    name: "sc_auto_time",
    unsigned: true,
    default: () => "'9'",
  })
  scAutoTime: number;

  @Column("int", {
    name: "sc_auto_issue_count",
    unsigned: true,
    default: () => "'1'",
  })
  scAutoIssueCount: number;

  @Column("enum", {
    name: "sc_auto_date_type",
    enum: ["", "MONTH", "WEEK"],
    default: () => "'MONTH'",
  })
  scAutoDateType: "" | "MONTH" | "WEEK";

  @Column("char", { name: "sc_auto_day", length: 2 })
  scAutoDay: string;

  @Column("char", { name: "sc_auto_week", length: 3 })
  scAutoWeek: string;

  @Column("enum", {
    name: "sc_auto_user_type",
    enum: ["", "ALL", "GROUP", "MEMBER", "EXCEL"],
    default: () => "'ALL'",
  })
  scAutoUserType: "" | "ALL" | "GROUP" | "MEMBER" | "EXCEL";

  @Column("datetime", {
    name: "sc_auto_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  scAutoModDate: Date;

  @Column("mediumint", {
    name: "sc_template",
    unsigned: true,
    default: () => "'1'",
  })
  scTemplate: number;

  @Column("varchar", { name: "sc_image", length: 255 })
  scImage: string;

  @Column("mediumint", {
    name: "sc_template_mobile",
    unsigned: true,
    default: () => "'1'",
  })
  scTemplateMobile: number;

  @Column("varchar", { name: "sc_image_mobile", length: 255 })
  scImageMobile: string;

  @Column("set", {
    name: "sc_view_page",
    enum: ["ALL", "NONE", "ZONE", "MYPAGE", "BENEFIT"],
    default: () => ["ALL"],
  })
  scViewPage: ("ALL" | "NONE" | "ZONE" | "MYPAGE" | "BENEFIT")[];

  @Column("enum", {
    name: "sc_view_detail",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  scViewDetail: "" | "Y" | "N";

  @Column("datetime", {
    name: "sc_view_start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  scViewStartDate: Date;

  @Column("datetime", {
    name: "sc_view_end_date",
    default: () => "'2999-12-31 23:59:59'",
  })
  scViewEndDate: Date;

  @Column("set", {
    name: "sc_view_week",
    enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    default: () => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  })
  scViewWeek: ("Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun")[];

  @Column("set", {
    name: "sc_view_device",
    enum: ["PC", "MOBILE", "APP"],
    default: () => ["PC", "MOBILE", "APP"],
  })
  scViewDevice: ("PC" | "MOBILE" | "APP")[];

  @Column("varchar", { name: "sc_view_referer", length: 255 })
  scViewReferer: string;

  @Column("enum", {
    name: "sc_view_use_group",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  scViewUseGroup: "" | "Y" | "N";

  @Column("int", { name: "sc_view_main_product", default: () => "'0'" })
  scViewMainProduct: number;

  @Column("int", { name: "sc_use_count", unsigned: true, default: () => "'0'" })
  scUseCount: number;

  @Column("int", { name: "sc_del_count", unsigned: true, default: () => "'0'" })
  scDelCount: number;

  @Column("enum", {
    name: "sc_expire_sms",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  scExpireSms: "" | "Y" | "N";

  @Column("varchar", { name: "sc_sub_id", length: 12 })
  scSubId: string;

  @Column("datetime", {
    name: "sc_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  scRegDate: Date;

  @Column("datetime", {
    name: "sc_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  scModDate: Date;

  @Column("varchar", { name: "sc_old_couponnum", length: 20 })
  scOldCouponnum: string;

  @Column("varchar", { name: "sc_mig", length: 20 })
  scMig: string;

  @Column("varchar", { name: "sc_remark", length: 255 })
  scRemark: string;

  @Column("enum", {
    name: "sc_impossible_status",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  scImpossibleStatus: "" | "Y" | "N";

  @Column("enum", {
    name: "sc_premium_only",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  scPremiumOnly: "" | "Y" | "N";

  @Column("enum", {
    name: "sc_b2b_benefit_type",
    enum: ["", "PARTNER", "SHOP"],
    default: () => "'PARTNER'",
  })
  scB2bBenefitType: "" | "PARTNER" | "SHOP";
}
