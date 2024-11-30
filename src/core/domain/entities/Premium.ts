import { Column, Entity } from "typeorm";

@Entity("premium", { schema: "makeshop" })
export class Premium {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    name: "main_product_num",
    nullable: true,
    unsigned: true,
    default: () => "'8'",
  })
  mainProductNum: number | null;

  @Column("tinyint", {
    name: "main_product_cols",
    nullable: true,
    width: 1,
    default: () => "'4'",
  })
  mainProductCols: boolean | null;

  @Column("tinyint", {
    name: "main_notice_num",
    nullable: true,
    default: () => "'5'",
  })
  mainNoticeNum: number | null;

  @Column("smallint", {
    name: "main_special_num",
    nullable: true,
    unsigned: true,
    default: () => "'3'",
  })
  mainSpecialNum: number | null;

  @Column("enum", {
    name: "main_board_icon",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mainBoardIcon: "" | "Y" | "N" | null;

  @Column("int", {
    name: "main_new_num",
    nullable: true,
    unsigned: true,
    default: () => "'8'",
  })
  mainNewNum: number | null;

  @Column("tinyint", {
    name: "main_new_cols",
    nullable: true,
    width: 1,
    default: () => "'4'",
  })
  mainNewCols: boolean | null;

  @Column("char", {
    name: "main_new_type",
    nullable: true,
    length: 1,
    default: () => "'I'",
  })
  mainNewType: string | null;

  @Column("tinyint", {
    name: "main_info_num",
    nullable: true,
    default: () => "'5'",
  })
  mainInfoNum: number | null;

  @Column("char", {
    name: "main_code_display",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  mainCodeDisplay: string | null;

  @Column("enum", {
    name: "main_product_soldout",
    nullable: true,
    enum: ["", "Y", "N", "D"],
    default: () => "'D'",
  })
  mainProductSoldout: "" | "Y" | "N" | "D" | null;

  @Column("enum", {
    name: "brand_product_soldout",
    nullable: true,
    enum: ["", "N", "D"],
    default: () => "'D'",
  })
  brandProductSoldout: "" | "N" | "D" | null;

  @Column("enum", {
    name: "virtual_duplicate",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  virtualDuplicate: "" | "Y" | "N" | null;

  @Column("smallint", {
    name: "payenddate",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  payenddate: number | null;

  @Column("char", {
    name: "special_type",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  specialType: string | null;

  @Column("tinyint", {
    name: "product_list_num",
    nullable: true,
    default: () => "'16'",
  })
  productListNum: number | null;

  @Column("char", {
    name: "banner_location",
    nullable: true,
    length: 1,
    default: () => "'R'",
  })
  bannerLocation: string | null;

  @Column("char", {
    name: "recommand_type",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  recommandType: string | null;

  @Column("char", {
    name: "recommand_benefit_type",
    length: 1,
    default: () => "'M'",
  })
  recommandBenefitType: string;

  @Column("int", {
    name: "recommand_old_reserve",
    nullable: true,
    default: () => "'0'",
  })
  recommandOldReserve: number | null;

  @Column("int", {
    name: "recommand_new_reserve",
    nullable: true,
    default: () => "'0'",
  })
  recommandNewReserve: number | null;

  @Column("float", {
    name: "recommand_order_reserve",
    nullable: true,
    precision: 12,
    default: () => "'0'",
  })
  recommandOrderReserve: number | null;

  @Column("int", {
    name: "recommand_order_reservecnt",
    nullable: true,
    default: () => "'0'",
  })
  recommandOrderReservecnt: number | null;

  @Column("int", {
    name: "recommand_product_reserve",
    nullable: true,
    default: () => "'0'",
  })
  recommandProductReserve: number | null;

  @Column("varchar", { name: "recommand_old_coupon", length: 8 })
  recommandOldCoupon: string;

  @Column("varchar", { name: "recommand_new_coupon", length: 8 })
  recommandNewCoupon: string;

  @Column("varchar", { name: "recommand_order_coupon", length: 8 })
  recommandOrderCoupon: string;

  @Column("enum", {
    name: "recommand_order_deliprice",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  recommandOrderDeliprice: "" | "Y" | "N";

  @Column("char", {
    name: "estimate_type",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  estimateType: string | null;

  @Column("char", {
    name: "okbasket_type",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  okbasketType: string | null;

  @Column("char", {
    name: "collwhich",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  collwhich: string | null;

  @Column("char", {
    name: "collnum",
    nullable: true,
    length: 1,
    default: () => "'6'",
  })
  collnum: string | null;

  @Column("char", {
    name: "intro_type",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  introType: string | null;

  @Column("char", {
    name: "idinfo_type",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  idinfoType: string | null;

  @Column("char", {
    name: "basket_type",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  basketType: string | null;

  @Column("char", {
    name: "board_toptype",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  boardToptype: string | null;

  @Column("mediumint", {
    name: "sumnailimg",
    nullable: true,
    unsigned: true,
    default: () => "'250'",
  })
  sumnailimg: number | null;

  @Column("char", {
    name: "board_type",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  boardType: string | null;

  @Column("smallint", {
    name: "board_width",
    nullable: true,
    default: () => "'570'",
  })
  boardWidth: number | null;

  @Column("char", {
    name: "useinfo_type",
    nullable: true,
    length: 2,
    default: () => "'0Y'",
  })
  useinfoType: string | null;

  @Column("char", {
    name: "review",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  review: string | null;

  @Column("int", { name: "okreserve", nullable: true, default: () => "'0'" })
  okreserve: number | null;

  @Column("enum", {
    name: "reservecut",
    nullable: true,
    enum: ["", "round", "floor", "ceil"],
    default: () => "'ceil'",
  })
  reservecut: "" | "round" | "floor" | "ceil" | null;

  @Column("enum", {
    name: "reservedan",
    nullable: true,
    enum: ["", "1", "0.1", "0.01", "0.001"],
    default: () => "'0.1'",
  })
  reservedan: "" | "1" | "0.1" | "0.01" | "0.001" | null;

  @Column("enum", {
    name: "mobile_reservecut",
    enum: ["", "round", "floor", "ceil"],
    default: () => "'ceil'",
  })
  mobileReservecut: "" | "round" | "floor" | "ceil";

  @Column("enum", {
    name: "mobile_reservedan",
    enum: ["", "1", "0.1", "0.01", "0.001"],
    default: () => "'0.1'",
  })
  mobileReservedan: "" | "1" | "0.1" | "0.01" | "0.001";

  @Column("enum", {
    name: "use_join_company",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useJoinCompany: "" | "Y" | "N";

  @Column("enum", {
    name: "use_join_simple",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useJoinSimple: "" | "Y" | "N";

  @Column("enum", {
    name: "use_dormant",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  useDormant: "" | "Y" | "N";

  @Column("enum", {
    name: "use_dormantdb",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  useDormantdb: "" | "N" | "Y";

  @Column("enum", {
    name: "reset_group",
    nullable: true,
    enum: ["", "Y", "N", "A"],
    default: () => "'N'",
  })
  resetGroup: "" | "Y" | "N" | "A" | null;

  @Column("enum", {
    name: "simple_join_type",
    enum: ["", "NONE", "PC", "MOBILE", "ALL"],
    default: () => "'NONE'",
  })
  simpleJoinType: "" | "NONE" | "PC" | "MOBILE" | "ALL";

  @Column("enum", {
    name: "use_join_complete",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useJoinComplete: "" | "Y" | "N";

  @Column("char", {
    name: "member_type",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  memberType: string | null;

  @Column("char", {
    name: "order_type",
    nullable: true,
    length: 2,
    default: () => "'0Y'",
  })
  orderType: string | null;

  @Column("char", {
    name: "confirm_type",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  confirmType: string | null;

  @Column("char", {
    name: "mail_type",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  mailType: string | null;

  @Column("char", {
    name: "review_status",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  reviewStatus: string | null;

  @Column("char", {
    name: "card_quotafree",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  cardQuotafree: string | null;

  @Column("char", {
    name: "card_quotamonth",
    nullable: true,
    length: 2,
    default: () => "'3'",
  })
  cardQuotamonth: string | null;

  @Column("int", {
    name: "card_quotaprice",
    nullable: true,
    default: () => "'50000'",
  })
  cardQuotaprice: number | null;

  @Column("varchar", { name: "optiontitle", nullable: true, length: 100 })
  optiontitle: string | null;

  @Column("char", {
    name: "imgminsize",
    nullable: true,
    length: 3,
    default: () => "'100'",
  })
  imgminsize: string | null;

  @Column("enum", {
    name: "webedit",
    enum: ["", "O", "Y", "N"],
    default: () => "'O'",
  })
  webedit: "" | "O" | "Y" | "N";

  @Column("enum", {
    name: "metaie8",
    nullable: true,
    enum: ["", "Y", "A", "N"],
    default: () => "'N'",
  })
  metaie8: "" | "Y" | "A" | "N" | null;

  @Column("char", {
    name: "optionsize",
    nullable: true,
    length: 3,
    default: () => "'0'",
  })
  optionsize: string | null;

  @Column("varchar", { name: "cashback", nullable: true, length: 10 })
  cashback: string | null;

  @Column("varchar", { name: "cardup", nullable: true, length: 10 })
  cardup: string | null;

  @Column("enum", {
    name: "paytype",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  paytype: "" | "Y" | "N" | null;

  @Column("mediumtext", { name: "etctype", nullable: true })
  etctype: string | null;

  @Column("mediumtext", { name: "etctype2", nullable: true })
  etctype2: string | null;

  @Column("enum", {
    name: "order_manager",
    enum: ["", "S1", "S2", "oo"],
    default: () => "'oo'",
  })
  orderManager: "" | "S1" | "S2" | "oo";

  @Column("enum", {
    name: "oo_product_standby_memu",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  ooProductStandbyMemu: "" | "Y" | "N";

  @Column("enum", {
    name: "oo_delinum_standby_menu",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  ooDelinumStandbyMenu: "" | "Y" | "N";

  @Column("enum", {
    name: "oo_give_reserve_status",
    enum: ["", "D15", "D17", "D19"],
    default: () => "'D17'",
  })
  ooGiveReserveStatus: "" | "D15" | "D17" | "D19";

  @Column("enum", {
    name: "oo_give_coupon_status",
    enum: ["", "D15", "D17", "D19"],
    default: () => "'D17'",
  })
  ooGiveCouponStatus: "" | "D15" | "D17" | "D19";

  @Column("enum", {
    name: "oo_set_group_status",
    enum: ["", "D15", "D17", "D19"],
    default: () => "'D17'",
  })
  ooSetGroupStatus: "" | "D15" | "D17" | "D19";

  @Column("char", { name: "oo_auto_d17_day", length: 2, default: () => "'2'" })
  ooAutoD17Day: string;

  @Column("varchar", { name: "oo_auto_d17_day_start", length: 10 })
  ooAutoD17DayStart: string;

  @Column("char", { name: "oo_auto_d19_day", length: 2, default: () => "'7'" })
  ooAutoD19Day: string;

  @Column("varchar", { name: "oo_auto_d19_day_start", length: 10 })
  ooAutoD19DayStart: string;

  @Column("char", {
    name: "oo_give_off_reserve_day",
    length: 2,
    default: () => "'7'",
  })
  ooGiveOffReserveDay: string;

  @Column("enum", {
    name: "reserve_in_type",
    enum: ["", "EACH", "ALL"],
    default: () => "'ALL'",
  })
  reserveInType: "" | "EACH" | "ALL";

  @Column("smallint", {
    name: "reserve_period",
    unsigned: true,
    default: () => "'0'",
  })
  reservePeriod: number;

  @Column("varchar", {
    name: "order_reserve_in_desc",
    nullable: true,
    length: 150,
  })
  orderReserveInDesc: string | null;

  @Column("enum", {
    name: "shoppingtab_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  shoppingtabUse: "" | "Y" | "N";

  @Column("enum", {
    name: "shop_multiopt",
    enum: ["", "YES", "NO"],
    default: () => "'NO'",
  })
  shopMultiopt: "" | "YES" | "NO";

  @Column("enum", {
    name: "basket_multiopt",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  basketMultiopt: "" | "Y" | "N";

  @Column("enum", {
    name: "baro_opt",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  baroOpt: "" | "Y" | "N";

  @Column("smallint", {
    name: "basketmax",
    nullable: true,
    unsigned: true,
    default: () => "'200'",
  })
  basketmax: number | null;

  @Column("float", {
    name: "hppercent",
    nullable: true,
    precision: 12,
    default: () => "'0'",
  })
  hppercent: number | null;

  @Column("enum", {
    name: "card_dicker_use",
    nullable: true,
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  cardDickerUse: "" | "N" | "Y" | null;

  @Column("varchar", { name: "card_dicker", nullable: true, length: 255 })
  cardDicker: string | null;

  @Column("enum", {
    name: "premiumbeecon_use",
    enum: ["", "Y", "N", "A"],
    default: () => "'N'",
  })
  premiumbeeconUse: "" | "Y" | "N" | "A";

  @Column("varchar", { name: "malltalk_auth", length: 150 })
  malltalkAuth: string;

  @Column("enum", {
    name: "malltalk_sms",
    enum: ["", "N", "Y", "A", "both"],
    default: () => "'N'",
  })
  malltalkSms: "" | "N" | "Y" | "A" | "both";

  @Column("datetime", {
    name: "malltalk_event_msg",
    default: () => "'0000-00-00 00:00:00'",
  })
  malltalkEventMsg: Date;

  @Column("enum", {
    name: "malltalk_orderprint",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  malltalkOrderprint: "" | "Y" | "N";

  @Column("enum", {
    name: "malltalk_down_chk",
    nullable: true,
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  malltalkDownChk: "" | "N" | "Y" | null;

  @Column("enum", {
    name: "malltalk_prod_img",
    enum: ["", "AUTO", "MAX", "MIN", "TINY", "APP"],
    default: () => "'AUTO'",
  })
  malltalkProdImg: "" | "AUTO" | "MAX" | "MIN" | "TINY" | "APP";

  @Column("enum", {
    name: "powerapp_sms",
    enum: ["", "NO", "SINGLE", "BOTH"],
    default: () => "'NO'",
  })
  powerappSms: "" | "NO" | "SINGLE" | "BOTH";

  @Column("enum", {
    name: "oo_use_memo_label",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  ooUseMemoLabel: "" | "Y" | "N";

  @Column("enum", {
    name: "sorivu_active",
    enum: ["", "YES", "NO", "WAIT"],
    default: () => "'NO'",
  })
  sorivuActive: "" | "YES" | "NO" | "WAIT";

  @Column("varchar", { name: "sorivu_authcode", length: 100 })
  sorivuAuthcode: string;

  @Column("enum", {
    name: "sorivu_myshop",
    enum: ["", "USE", "NOT"],
    default: () => "'USE'",
  })
  sorivuMyshop: "" | "USE" | "NOT";

  @Column("varchar", {
    name: "user_cal_orderprice",
    length: 255,
    default: () => "'cal_price,deli_price'",
  })
  userCalOrderprice: string;

  @Column("varchar", {
    name: "oo_user_cancel_use",
    length: 255,
    default: () => "'NO'",
  })
  ooUserCancelUse: string;

  @Column("varchar", {
    name: "oo_user_pg_cancel_use",
    length: 10,
    default: () => "'NO'",
  })
  ooUserPgCancelUse: string;

  @Column("enum", {
    name: "oo_reserve_emoney_cancel_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  ooReserveEmoneyCancelUse: "" | "Y" | "N";

  @Column("varchar", {
    name: "oo_user_trade_use",
    length: 255,
    default: () => "'NO'",
  })
  ooUserTradeUse: string;

  @Column("varchar", {
    name: "oo_user_return_use",
    length: 255,
    default: () => "'NO'",
  })
  ooUserReturnUse: string;

  @Column("enum", {
    name: "premium_logbook",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  premiumLogbook: "" | "N" | "Y";

  @Column("enum", {
    name: "reconfirm_passwd_type",
    enum: ["", "USE", "NO"],
    default: () => "'USE'",
  })
  reconfirmPasswdType: "" | "USE" | "NO";

  @Column("enum", {
    name: "member_join_type",
    enum: ["", "NEW", "BASIC"],
    default: () => "'BASIC'",
  })
  memberJoinType: "" | "NEW" | "BASIC";

  @Column("enum", {
    name: "member_auth_type",
    enum: ["", "Y", "N", "S"],
    default: () => "'N'",
  })
  memberAuthType: "" | "Y" | "N" | "S";

  @Column("enum", {
    name: "member_join_minor",
    enum: ["", "Y", "N", "A"],
    default: () => "'N'",
  })
  memberJoinMinor: "" | "Y" | "N" | "A";

  @Column("enum", {
    name: "member_modify_email",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  memberModifyEmail: "" | "Y" | "N";

  @Column("enum", {
    name: "member_modify_birth",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  memberModifyBirth: "" | "Y" | "N";

  @Column("enum", {
    name: "member_birth_type",
    enum: ["", "SELECT", "INPUT"],
    default: () => "'SELECT'",
  })
  memberBirthType: "" | "SELECT" | "INPUT";

  @Column("enum", {
    name: "member_birth_sort",
    enum: ["", "ASC", "DESC"],
    default: () => "'ASC'",
  })
  memberBirthSort: "" | "ASC" | "DESC";

  @Column("varchar", {
    name: "member_birth_default_value",
    nullable: true,
    length: 4,
  })
  memberBirthDefaultValue: string | null;

  @Column("enum", {
    name: "option_stock_display",
    enum: ["", "NO", "LIMIT", "DISPLAY"],
    default: () => "'NO'",
  })
  optionStockDisplay: "" | "NO" | "LIMIT" | "DISPLAY";

  @Column("enum", {
    name: "option_note_display",
    enum: ["", "DISPLAY", "NO"],
    default: () => "'NO'",
  })
  optionNoteDisplay: "" | "DISPLAY" | "NO";

  @Column("enum", {
    name: "oo_user_cancel_chk",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  ooUserCancelChk: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "oo_benefit_type",
    nullable: true,
    enum: ["", "ORDER", "BASKET"],
    default: () => "'ORDER'",
  })
  ooBenefitType: "" | "ORDER" | "BASKET" | null;

  @Column("enum", {
    name: "oo_prd_groupsale",
    nullable: true,
    enum: ["", "ORDER", "BASKET"],
    default: () => "'ORDER'",
  })
  ooPrdGroupsale: "" | "ORDER" | "BASKET" | null;

  @Column("enum", {
    name: "oo_trade_reserve_condition",
    nullable: true,
    enum: ["", "SELL", "PAY"],
  })
  ooTradeReserveCondition: "" | "SELL" | "PAY" | null;

  @Column("mediumtext", { name: "oo_refund_policy", nullable: true })
  ooRefundPolicy: string | null;

  @Column("mediumtext", { name: "oo_cancel_policy", nullable: true })
  ooCancelPolicy: string | null;

  @Column("mediumtext", { name: "oo_exchange_policy", nullable: true })
  ooExchangePolicy: string | null;

  @Column("mediumtext", { name: "oo_return_policy", nullable: true })
  ooReturnPolicy: string | null;

  @Column("mediumtext", { name: "oo_return_type_policy", nullable: true })
  ooReturnTypePolicy: string | null;

  @Column("enum", {
    name: "oo_search_order",
    enum: ["", "ALL", "PRE"],
    default: () => "'ALL'",
  })
  ooSearchOrder: "" | "ALL" | "PRE";

  @Column("enum", {
    name: "new_menu_status",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  newMenuStatus: "" | "Y" | "N";

  @Column("enum", {
    name: "menu_type",
    enum: ["", "old", "new", "user"],
    default: () => "'old'",
  })
  menuType: "" | "old" | "new" | "user";

  @Column("enum", {
    name: "sms_login",
    enum: ["", "NONE", "SUB", "ALL"],
    default: () => "'NONE'",
  })
  smsLogin: "" | "NONE" | "SUB" | "ALL";

  @Column("enum", {
    name: "sms_login_inside",
    enum: ["", "NO", "USE", "USE_IP"],
    default: () => "'NO'",
  })
  smsLoginInside: "" | "NO" | "USE" | "USE_IP";

  @Column("enum", {
    name: "use_push",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  usePush: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "card_dicker_pop_use",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  cardDickerPopUse: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "stop_order",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  stopOrder: "" | "Y" | "N";

  @Column("enum", {
    name: "use_power_review",
    enum: ["", "Y", "N", "S", "P"],
    default: () => "'N'",
  })
  usePowerReview: "" | "Y" | "N" | "S" | "P";

  @Column("enum", {
    name: "use_privacy",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  usePrivacy: "" | "Y" | "N";

  @Column("char", {
    name: "ordersheet_image",
    length: 2,
    default: () => "'YL'",
  })
  ordersheetImage: string;

  @Column("enum", {
    name: "rebuy_use",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  rebuyUse: "" | "N" | "Y";

  @Column("smallint", {
    name: "rebuy_period",
    unsigned: true,
    default: () => "'0'",
  })
  rebuyPeriod: number;

  @Column("longtext", { name: "latest_keyword" })
  latestKeyword: string;

  @Column("enum", {
    name: "member_before_pay",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  memberBeforePay: "" | "N" | "Y";

  @Column("varchar", { name: "order_print_config", length: 20 })
  orderPrintConfig: string;

  @Column("varchar", {
    name: "order_print_admin_config",
    nullable: true,
    length: 20,
  })
  orderPrintAdminConfig: string | null;

  @Column("enum", {
    name: "remove_past_order",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  removePastOrder: "" | "Y" | "N";

  @Column("enum", {
    name: "divide_order_data",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  divideOrderData: "" | "Y" | "N";

  @Column("date", { name: "divide_order_data_date", nullable: true })
  divideOrderDataDate: string | null;

  @Column("enum", {
    name: "sns_facebook",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  snsFacebook: "" | "Y" | "N";

  @Column("enum", {
    name: "sns_kakao",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  snsKakao: "" | "Y" | "N";

  @Column("enum", {
    name: "sns_twitter",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  snsTwitter: "" | "Y" | "N";

  @Column("enum", {
    name: "sns_naver",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  snsNaver: "" | "Y" | "N";

  @Column("enum", {
    name: "sns_apple",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  snsApple: "" | "Y" | "N";

  @Column("enum", {
    name: "sns_naver_plus",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  snsNaverPlus: "" | "Y" | "N";

  @Column("mediumtext", { name: "sns_set_data" })
  snsSetData: string;

  @Column("mediumtext", { name: "delivery_set_data", nullable: true })
  deliverySetData: string | null;

  @Column("mediumtext", { name: "userexit_set_data", nullable: true })
  userexitSetData: string | null;

  @Column("enum", {
    name: "user_group_benefit",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  userGroupBenefit: "" | "N" | "Y";

  @Column("enum", {
    name: "oo_sm_period_use",
    nullable: true,
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  ooSmPeriodUse: "" | "N" | "Y" | null;

  @Column("char", {
    name: "oo_sm_period_c31_c51",
    nullable: true,
    length: 2,
    default: () => "'7'",
  })
  ooSmPeriodC31C51: string | null;

  @Column("char", {
    name: "oo_sm_period_r31_t31",
    nullable: true,
    length: 2,
    default: () => "'7'",
  })
  ooSmPeriodR31T31: string | null;

  @Column("varchar", {
    name: "oo_sm_refund_type",
    length: 10,
    default: () => "'Y|Y'",
  })
  ooSmRefundType: string;

  @Column("varchar", {
    name: "oo_sm_trade_type",
    length: 10,
    default: () => "'Y|Y|Y'",
  })
  ooSmTradeType: string;

  @Column("enum", {
    name: "oo_sm_change_delivery",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  ooSmChangeDelivery: "" | "Y" | "N";

  @Column("enum", {
    name: "package_product_soldout",
    enum: ["", "A", "S"],
    default: () => "'S'",
  })
  packageProductSoldout: "" | "A" | "S";

  @Column("enum", {
    name: "stampang_reserve_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  stampangReserveUse: "" | "Y" | "N";

  @Column("varchar", { name: "stampang_reserve_id", length: 20 })
  stampangReserveId: string;

  @Column("date", {
    name: "stampang_reserve_date",
    default: () => "'0000-00-00'",
  })
  stampangReserveDate: string;

  @Column("varchar", { name: "stampang_reserve_code", length: 50 })
  stampangReserveCode: string;

  @Column("char", {
    name: "oo_swapping_step_used",
    length: 1,
    default: () => "'Y'",
  })
  ooSwappingStepUsed: string;

  @Column("char", {
    name: "oo_return_step_used",
    length: 1,
    default: () => "'Y'",
  })
  ooReturnStepUsed: string;

  @Column("char", {
    name: "oo_refunds_received_used",
    length: 1,
    default: () => "'Y'",
  })
  ooRefundsReceivedUsed: string;

  @Column("enum", {
    name: "oo_auto_inherit",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  ooAutoInherit: "" | "Y" | "N";

  @Column("enum", {
    name: "use_cart_free",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useCartFree: "" | "Y" | "N";

  @Column("enum", {
    name: "use_kakao_alimtalk",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  useKakaoAlimtalk: "" | "N" | "Y";

  @Column("varchar", { name: "kakao_yellow_id", length: 100 })
  kakaoYellowId: string;

  @Column("varchar", { name: "kakao_auth_code", length: 255 })
  kakaoAuthCode: string;

  @Column("varchar", { name: "kakao_auth_code_bizm", length: 255 })
  kakaoAuthCodeBizm: string;

  @Column("enum", {
    name: "kakao_vendor",
    nullable: true,
    enum: ["T", "M"],
    default: () => "'M'",
  })
  kakaoVendor: "T" | "M" | null;

  @Column("datetime", {
    name: "kakao_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  kakaoRegDate: Date;

  @Column("datetime", {
    name: "kakao_del_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  kakaoDelDate: Date;

  @Column("enum", {
    name: "kakao_alimtalk_fail_type",
    enum: ["", "A", "S"],
    default: () => "'A'",
  })
  kakaoAlimtalkFailType: "" | "A" | "S";

  @Column("enum", {
    name: "kakao_moment_agree",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  kakaoMomentAgree: "" | "Y" | "N";

  @Column("enum", {
    name: "use_kakao_business",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useKakaoBusiness: "" | "Y" | "N";

  @Column("varchar", { name: "kakao_business_data", length: 255 })
  kakaoBusinessData: string;

  @Column("enum", {
    name: "use_naver_smartalim",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  useNaverSmartalim: "" | "N" | "Y";

  @Column("varchar", { name: "naver_id", length: 20 })
  naverId: string;

  @Column("varchar", { name: "naver_talk_id", length: 100 })
  naverTalkId: string;

  @Column("varchar", { name: "naver_partner_key", length: 255 })
  naverPartnerKey: string;

  @Column("enum", {
    name: "alim_send_order",
    enum: ["", "A", "K", "N"],
    default: () => "'A'",
  })
  alimSendOrder: "" | "A" | "K" | "N";

  @Column("datetime", {
    name: "naver_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  naverModDate: Date;

  @Column("datetime", {
    name: "naver_del_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  naverDelDate: Date;

  @Column("enum", {
    name: "use_auto_https",
    enum: ["", "A", "Y", "N"],
    default: () => "'N'",
  })
  useAutoHttps: "" | "A" | "Y" | "N";

  @Column("varchar", {
    name: "pc_auto_https_on_page",
    nullable: true,
    length: 255,
  })
  pcAutoHttpsOnPage: string | null;

  @Column("varchar", {
    name: "mobile_auto_https_on_page",
    nullable: true,
    length: 255,
  })
  mobileAutoHttpsOnPage: string | null;

  @Column("enum", {
    name: "pvd_cal_target",
    enum: ["", "DELIVERY", "DELIVERY_COMPLETE", "ALL_COMPLETE"],
    default: () => "'DELIVERY'",
  })
  pvdCalTarget: "" | "DELIVERY" | "DELIVERY_COMPLETE" | "ALL_COMPLETE";

  @Column("datetime", {
    name: "pvd_cal_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pvdCalDate: Date;

  @Column("enum", {
    name: "etc_tax_type",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  etcTaxType: "" | "Y" | "N" | null;

  @Column("varchar", { name: "etc_tax_product", length: 10 })
  etcTaxProduct: string;

  @Column("enum", {
    name: "use_smart_coupon",
    enum: ["", "Y", "N", "P"],
    default: () => "'N'",
  })
  useSmartCoupon: "" | "Y" | "N" | "P";

  @Column("enum", {
    name: "use_subs",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useSubs: "" | "Y" | "N";

  @Column("smallint", {
    name: "subs_default_discount",
    unsigned: true,
    default: () => "'0'",
  })
  subsDefaultDiscount: number;

  @Column("enum", {
    name: "use_refund_info",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useRefundInfo: "" | "Y" | "N";

  @Column("varchar", { name: "reset_groupid", nullable: true, length: 4 })
  resetGroupid: string | null;

  @Column("enum", {
    name: "use_order_form_temp",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useOrderFormTemp: "" | "Y" | "N";

  @Column("enum", {
    name: "best_review_type",
    enum: ["", "A", "M"],
    default: () => "'A'",
  })
  bestReviewType: "" | "A" | "M";

  @Column("enum", {
    name: "best_sale_type",
    enum: ["", "A", "M"],
    default: () => "'A'",
  })
  bestSaleType: "" | "A" | "M";

  @Column("enum", {
    name: "oo_sm_guest",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  ooSmGuest: "" | "N" | "Y";

  @Column("enum", {
    name: "oo_sm_rollback",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  ooSmRollback: "" | "N" | "Y";

  @Column("enum", {
    name: "prd_collect_type",
    enum: ["", "A", "M"],
    default: () => "'A'",
  })
  prdCollectType: "" | "A" | "M";

  @Column("enum", {
    name: "use_smart_tracking",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useSmartTracking: "" | "Y" | "N";

  @Column("set", {
    name: "delivery_delay_holiday",
    enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Holi"],
  })
  deliveryDelayHoliday: (
    | "Mon"
    | "Tue"
    | "Wed"
    | "Thu"
    | "Fri"
    | "Sat"
    | "Sun"
    | "Holi"
  )[];

  @Column("datetime", {
    name: "kakao_vendor_upd_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  kakaoVendorUpdDate: Date;
}
