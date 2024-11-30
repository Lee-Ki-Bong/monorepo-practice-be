import { Column, Entity } from "typeorm";

@Entity("etc", { schema: "makeshop" })
export class Etc {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { name: "card_mini", nullable: true, default: () => "'0'" })
  cardMini: number | null;

  @Column("mediumtext", { name: "shopintro", nullable: true })
  shopintro: string | null;

  @Column("mediumtext", { name: "message", nullable: true })
  message: string | null;

  @Column("mediumtext", { name: "thankmessage", nullable: true })
  thankmessage: string | null;

  @Column("mediumtext", { name: "estimate_message", nullable: true })
  estimateMessage: string | null;

  @Column("mediumtext", { name: "newmessage", nullable: true })
  newmessage: string | null;

  @Column("enum", {
    name: "use_detailinfo",
    enum: ["", "Y", "N", "CI"],
    default: () => "'Y'",
  })
  useDetailinfo: "" | "Y" | "N" | "CI";

  @Column("mediumtext", { name: "detailinfo", nullable: true })
  detailinfo: string | null;

  @Column("enum", {
    name: "detailinfo_form",
    enum: ["", "OLD", "NEW"],
    default: () => "'OLD'",
  })
  detailinfoForm: "" | "OLD" | "NEW";

  @Column("enum", {
    name: "detailinfo_show_type",
    enum: ["", "ALL", "BASIC", "VIRTUAL"],
    default: () => "'BASIC'",
  })
  detailinfoShowType: "" | "ALL" | "BASIC" | "VIRTUAL";

  @Column("enum", {
    name: "is_new_detailinfo",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  isNewDetailinfo: "" | "Y" | "N";

  @Column("enum", {
    name: "ocb_status",
    nullable: true,
    enum: ["", "N", "A", "S"],
  })
  ocbStatus: "" | "N" | "A" | "S" | null;

  @Column("mediumtext", { name: "m_detailinfo", nullable: true })
  mDetailinfo: string | null;

  @Column("enum", {
    name: "m_detailinfo_form",
    enum: ["", "OLD", "NEW"],
    default: () => "'OLD'",
  })
  mDetailinfoForm: "" | "OLD" | "NEW";

  @Column("enum", {
    name: "use_m_detailinfo",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useMDetailinfo: "" | "Y" | "N";

  @Column("varchar", { name: "userform", nullable: true, length: 250 })
  userform: string | null;

  @Column("mediumtext", { name: "new_userform", nullable: true })
  newUserform: string | null;

  @Column("char", {
    name: "ordercancel",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  ordercancel: string | null;

  @Column("char", {
    name: "usercan",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  usercan: string | null;

  @Column("enum", {
    name: "canceled_restore_stock",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  canceledRestoreStock: "" | "Y" | "N";

  @Column("enum", {
    name: "oo_refund_etc_check_all",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  ooRefundEtcCheckAll: "" | "Y" | "N";

  @Column("char", {
    name: "soldcan",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  soldcan: string | null;

  @Column("enum", {
    name: "upcan",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  upcan: "" | "Y" | "N" | null;

  @Column("char", {
    name: "exituser",
    nullable: true,
    length: 1,
    default: () => "'O'",
  })
  exituser: string | null;

  @Column("int", { name: "exitday", nullable: true, default: () => "'0'" })
  exitday: number | null;

  @Column("char", {
    name: "resno",
    nullable: true,
    length: 1,
    default: () => "'C'",
  })
  resno: string | null;

  @Column("char", {
    name: "personal",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  personal: string | null;

  @Column("char", {
    name: "excelto",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  excelto: string | null;

  @Column("char", { name: "ordersel", nullable: true, length: 3 })
  ordersel: string | null;

  @Column("char", { name: "excel_reason", length: 1, default: () => "'N'" })
  excelReason: string;

  @Column("enum", {
    name: "excel_optprice",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  excelOptprice: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "excel_option",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  excelOption: "" | "Y" | "N" | null;

  @Column("varchar", {
    name: "excelnum",
    nullable: true,
    length: 255,
    default: () => "',0,1,2,4,5,8,9,10,11,12,18,19,20,21,22,23,'",
  })
  excelnum: string | null;

  @Column("varchar", {
    name: "excelnum_member",
    nullable: true,
    length: 255,
    default: () => "',0,1,2,'",
  })
  excelnumMember: string | null;

  @Column("mediumtext", { name: "excelnum_statistic" })
  excelnumStatistic: string;

  @Column("varchar", { name: "productlist", nullable: true, length: 255 })
  productlist: string | null;

  @Column("char", {
    name: "usetotal",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  usetotal: string | null;

  @Column("char", {
    name: "autoemail",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  autoemail: string | null;

  @Column("char", {
    name: "autotel",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  autotel: string | null;

  @Column("enum", {
    name: "autotel_areacode",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  autotelAreacode: "" | "Y" | "N";

  @Column("enum", {
    name: "autotel_phone",
    nullable: true,
    enum: ["", "Y", "N"],
  })
  autotelPhone: "" | "Y" | "N" | null;

  @Column("char", {
    name: "autodelid",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  autodelid: string | null;

  @Column("int", { name: "maxreserve", nullable: true, default: () => "'0'" })
  maxreserve: number | null;

  @Column("int", {
    name: "maxuseprice",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  maxuseprice: number | null;

  @Column("int", { name: "saleprice", nullable: true, default: () => "'0'" })
  saleprice: number | null;

  @Column("smallint", {
    name: "supertax",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  supertax: number | null;

  @Column("int", { name: "noreserve", nullable: true, default: () => "'-1'" })
  noreserve: number | null;

  @Column("enum", {
    name: "emoneyok",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  emoneyok: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "reserve_sale",
    nullable: true,
    enum: ["", "Y", "N", "A"],
    default: () => "'N'",
  })
  reserveSale: "" | "Y" | "N" | "A" | null;

  @Column("int", { name: "emailreserve", nullable: true, default: () => "'0'" })
  emailreserve: number | null;

  @Column("char", { name: "emailreceivetype", length: 1, default: () => "'R'" })
  emailreceivetype: string;

  @Column("int", {
    name: "emailreserveday",
    nullable: true,
    default: () => "'0'",
  })
  emailreserveday: number | null;

  @Column("varchar", { name: "emailcoupon", length: 8 })
  emailcoupon: string;

  @Column("varchar", { name: "emailreservetitle", nullable: true, length: 50 })
  emailreservetitle: string | null;

  @Column("char", {
    name: "idcheck",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  idcheck: string | null;

  @Column("varchar", { name: "okcancelmessage", nullable: true, length: 250 })
  okcancelmessage: string | null;

  @Column("varchar", { name: "cancelmessage", nullable: true, length: 250 })
  cancelmessage: string | null;

  @Column("varchar", { name: "codetitle", nullable: true, length: 255 })
  codetitle: string | null;

  @Column("varchar", { name: "groupid", nullable: true, length: 4 })
  groupid: string | null;

  @Column("varchar", { name: "company_groupid", nullable: true, length: 4 })
  companyGroupid: string | null;

  @Column("smallint", { name: "recommandnum", nullable: true })
  recommandnum: number | null;

  @Column("varchar", { name: "step_deli", nullable: true, length: 255 })
  stepDeli: string | null;

  @Column("char", {
    name: "adddeli",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  adddeli: string | null;

  @Column("char", {
    name: "afterdeli",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  afterdeli: string | null;

  @Column("varchar", { name: "adddeli_time", nullable: true, length: 25 })
  adddeliTime: string | null;

  @Column("varchar", { name: "adddeli_week", nullable: true, length: 100 })
  adddeliWeek: string | null;

  @Column("enum", {
    name: "adddeli_type",
    nullable: true,
    enum: ["", "N", "H", "L"],
    default: () => "'N'",
  })
  adddeliType: "" | "N" | "H" | "L" | null;

  @Column("set", {
    name: "adddeli_path",
    enum: ["PC", "MOBILE", "APP"],
    default: () => ["PC", "MOBILE", "APP"],
  })
  adddeliPath: ("PC" | "MOBILE" | "APP")[];

  @Column("enum", {
    name: "adddeli_allfree",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  adddeliAllfree: "" | "N" | "Y";

  @Column("enum", {
    name: "adddeli_include",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  adddeliInclude: "" | "N" | "Y";

  @Column("varchar", { name: "paylist", nullable: true, length: 50 })
  paylist: string | null;

  @Column("mediumtext", { name: "deli_area", nullable: true })
  deliArea: string | null;

  @Column("mediumtext", { name: "filter", nullable: true })
  filter: string | null;

  @Column("mediumtext", { name: "write_exm", nullable: true })
  writeExm: string | null;

  @Column("char", { name: "kcppgok", nullable: true, length: 1 })
  kcppgok: string | null;

  @Column("varchar", {
    name: "gift_type",
    nullable: true,
    length: 100,
    default: () => "'N|N|A'",
  })
  giftType: string | null;

  @Column("varchar", { name: "cashbillnum", nullable: true, length: 10 })
  cashbillnum: string | null;

  @Column("char", {
    name: "cashbilltype",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  cashbilltype: string | null;

  @Column("char", {
    name: "ordercash",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  ordercash: string | null;

  @Column("enum", {
    name: "ordercashvalue",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  ordercashvalue: "" | "Y" | "N" | null;

  @Column("smallint", {
    name: "cashbillpercent",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  cashbillpercent: number | null;

  @Column("varchar", { name: "cashbillcom", nullable: true, length: 255 })
  cashbillcom: string | null;

  @Column("char", { name: "cashbillterm", length: 3, default: () => "'N'" })
  cashbillterm: string;

  @Column("int", {
    name: "cashbillmoney",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  cashbillmoney: number | null;

  @Column("varchar", {
    name: "cashbill_obligatory",
    nullable: true,
    length: 100,
    default: () => "'N'",
  })
  cashbillObligatory: string | null;

  @Column("enum", {
    name: "cashbill_phoneinfo",
    enum: ["", "Y", "N", "A"],
    default: () => "'N'",
  })
  cashbillPhoneinfo: "" | "Y" | "N" | "A";

  @Column("enum", {
    name: "cashbill_use_reissue",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  cashbillUseReissue: "" | "Y" | "N";

  @Column("int", {
    name: "next_brand_id",
    unsigned: true,
    default: () => "'0'",
  })
  nextBrandId: number;

  @Column("varchar", { name: "order_max_barcode", nullable: true, length: 13 })
  orderMaxBarcode: string | null;

  @Column("int", {
    name: "kirin_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  kirinId: number | null;

  @Column("varchar", { name: "grouporder", nullable: true, length: 10 })
  grouporder: string | null;

  @Column("mediumint", {
    name: "orderpopx",
    nullable: true,
    unsigned: true,
    default: () => "'620'",
  })
  orderpopx: number | null;

  @Column("mediumint", {
    name: "orderpopy",
    nullable: true,
    unsigned: true,
    default: () => "'550'",
  })
  orderpopy: number | null;

  @Column("mediumtext", { name: "pmx_cat_bookmark" })
  pmxCatBookmark: string;

  @Column("mediumtext", { name: "mainvideo", nullable: true })
  mainvideo: string | null;

  @Column("mediumtext", { name: "order_info_form", nullable: true })
  orderInfoForm: string | null;

  @Column("mediumtext", { name: "shop_noid", nullable: true })
  shopNoid: string | null;

  @Column("varchar", { name: "ems_message", nullable: true, length: 255 })
  emsMessage: string | null;

  @Column("mediumint", {
    name: "box_weight",
    unsigned: true,
    default: () => "'0'",
  })
  boxWeight: number;

  @Column("mediumtext", { name: "soldouttype", nullable: true })
  soldouttype: string | null;

  @Column("enum", {
    name: "soldout_msg_type",
    enum: ["", "malltalk", "sms"],
    default: () => "'malltalk'",
  })
  soldoutMsgType: "" | "malltalk" | "sms";

  @Column("enum", {
    name: "soldout_use_mypage",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  soldoutUseMypage: "" | "Y" | "N";

  @Column("enum", {
    name: "insurance_set",
    enum: ["", "YES", "NO"],
    default: () => "'YES'",
  })
  insuranceSet: "" | "YES" | "NO";

  @Column("enum", {
    name: "use_auto_group",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useAutoGroup: "" | "Y" | "N";

  @Column("enum", {
    name: "guest_icon_use",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  guestIconUse: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "default_group_leave",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  defaultGroupLeave: "" | "Y" | "N";

  @Column("char", { name: "group_sms", length: 1, default: () => "'A'" })
  groupSms: string;

  @Column("enum", {
    name: "partialcancel",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  partialcancel: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "user_note",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  userNote: "" | "Y" | "N";

  @Column("datetime", { name: "pixamix_premium", nullable: true })
  pixamixPremium: Date | null;

  @Column("datetime", { name: "pixamix_basic", nullable: true })
  pixamixBasic: Date | null;

  @Column("datetime", { name: "bling", nullable: true })
  bling: Date | null;

  @Column("int", {
    name: "bookre",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  bookre: number | null;

  @Column("enum", {
    name: "detailview",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  detailview: "" | "Y" | "N";

  @Column("enum", {
    name: "cti_status",
    nullable: true,
    enum: ["", "R", "Y", "D", "H"],
  })
  ctiStatus: "" | "R" | "Y" | "D" | "H" | null;

  @Column("datetime", { name: "cti_end_date", nullable: true })
  ctiEndDate: Date | null;

  @Column("mediumint", {
    name: "cti_line_count",
    nullable: true,
    unsigned: true,
  })
  ctiLineCount: number | null;

  @Column("enum", {
    name: "power_flash_status",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  powerFlashStatus: "" | "Y" | "N" | null;

  @Column("datetime", { name: "power_flash_enddate", nullable: true })
  powerFlashEnddate: Date | null;

  @Column("enum", {
    name: "addimg_scroll",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  addimgScroll: "" | "Y" | "N";

  @Column("enum", {
    name: "deli_reserve_use",
    nullable: true,
    enum: ["", "Y", "N"],
  })
  deliReserveUse: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "use_edgeday",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  useEdgeday: "" | "N" | "Y";

  @Column("varchar", { name: "user_modify_event", nullable: true, length: 255 })
  userModifyEvent: string | null;

  @Column("enum", {
    name: "use_auto_group_point",
    nullable: true,
    enum: ["", "DELIVERY", "ORDER", "PAY", "DAY", "PDAY"],
    default: () => "'DELIVERY'",
  })
  useAutoGroupPoint: "" | "DELIVERY" | "ORDER" | "PAY" | "DAY" | "PDAY" | null;

  @Column("enum", {
    name: "use_auto_group_down",
    enum: ["", "YES", "NO"],
    default: () => "'NO'",
  })
  useAutoGroupDown: "" | "YES" | "NO";

  @Column("enum", {
    name: "use_nickname",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  useNickname: "" | "N" | "Y";

  @Column("enum", {
    name: "use_userimg",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  useUserimg: "" | "N" | "Y";

  @Column("enum", {
    name: "use_greeting",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  useGreeting: "" | "N" | "Y";

  @Column("enum", {
    name: "use_company_addr",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  useCompanyAddr: "" | "Y" | "N";

  @Column("varchar", { name: "greeting_filter", nullable: true, length: 255 })
  greetingFilter: string | null;

  @Column("enum", {
    name: "deliemoneyok",
    enum: ["", "N", "Y", "A"],
    default: () => "'N'",
  })
  deliemoneyok: "" | "N" | "Y" | "A";

  @Column("enum", {
    name: "deliemoneyok_ems",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  deliemoneyokEms: "" | "N" | "Y";

  @Column("enum", {
    name: "delireserveok",
    enum: ["", "N", "Y", "A"],
    default: () => "'N'",
  })
  delireserveok: "" | "N" | "Y" | "A";

  @Column("enum", {
    name: "delireserveok_ems",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  delireserveokEms: "" | "N" | "Y";

  @Column("enum", {
    name: "searchstr_use",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  searchstrUse: "" | "N" | "Y";

  @Column("varchar", { name: "searchstr_msg", nullable: true, length: 50 })
  searchstrMsg: string | null;

  @Column("varchar", { name: "ems_delivery", nullable: true, length: 200 })
  emsDelivery: string | null;

  @Column("enum", {
    name: "use_ems_type",
    enum: ["", "EMS", "PREMIUM"],
    default: () => "'EMS'",
  })
  useEmsType: "" | "EMS" | "PREMIUM";

  @Column("enum", {
    name: "use_shipping_country",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useShippingCountry: "" | "Y" | "N";

  @Column("varchar", { name: "glob_key", nullable: true, length: 32 })
  globKey: string | null;

  @Column("enum", {
    name: "default_sex",
    enum: ["", "1", "2", "-"],
    default: () => "'-'",
  })
  defaultSex: "" | "1" | "2" | "-";

  @Column("enum", {
    name: "use_company_num",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  useCompanyNum: "" | "Y" | "N";

  @Column("enum", {
    name: "company_num_modify",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  companyNumModify: "" | "Y" | "N";

  @Column("enum", {
    name: "passwd_rule",
    enum: ["", "SIMPLE", "COMPLEX"],
    default: () => "'COMPLEX'",
  })
  passwdRule: "" | "SIMPLE" | "COMPLEX";

  @Column("enum", {
    name: "passwd_change_page",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  passwdChangePage: "" | "Y" | "N";

  @Column("enum", {
    name: "default_phone_type",
    enum: ["", "basic", "phone", "mobile"],
    default: () => "'basic'",
  })
  defaultPhoneType: "" | "basic" | "phone" | "mobile";

  @Column("tinyint", { name: "passwd_expiration", default: () => "'6'" })
  passwdExpiration: number;

  @Column("enum", {
    name: "passwd_pagetype",
    enum: ["", "POPUP", "PAGE"],
    default: () => "'POPUP'",
  })
  passwdPagetype: "" | "POPUP" | "PAGE";

  @Column("mediumtext", { name: "option_stock_message", nullable: true })
  optionStockMessage: string | null;

  @Column("enum", {
    name: "trans_coupon_remain",
    enum: ["", "N", "Y"],
    default: () => "'Y'",
  })
  transCouponRemain: "" | "N" | "Y";

  @Column("enum", {
    name: "ms_logcounter_code",
    nullable: true,
    enum: ["", "P", "G", "D", "F"],
  })
  msLogcounterCode: "" | "P" | "G" | "D" | "F" | null;

  @Column("datetime", { name: "ms_logcounter_end", nullable: true })
  msLogcounterEnd: Date | null;

  @Column("varchar", {
    name: "ms_logcounter_server",
    nullable: true,
    length: 25,
  })
  msLogcounterServer: string | null;

  @Column("enum", {
    name: "ms_logcounter_premium",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  msLogcounterPremium: "" | "Y" | "N" | null;

  @Column("varchar", { name: "okdgg_apikey", length: 50 })
  okdggApikey: string;

  @Column("varchar", { name: "personal_email", length: 100 })
  personalEmail: string;

  @Column("varchar", { name: "mysoho_daumclicks_id", length: 15 })
  mysohoDaumclicksId: string;

  @Column("varchar", { name: "heatmap_password", nullable: true, length: 50 })
  heatmapPassword: string | null;

  @Column("varchar", { name: "heatmap_user", nullable: true, length: 10 })
  heatmapUser: string | null;

  @Column("varchar", { name: "heatmap_info", nullable: true, length: 255 })
  heatmapInfo: string | null;

  @Column("varchar", {
    name: "robotrull",
    nullable: true,
    length: 255,
    default: () => "'bingbot|gptbot'",
  })
  robotrull: string | null;

  @Column("enum", {
    name: "use_post",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  usePost: "" | "Y" | "N";

  @Column("enum", {
    name: "set_send_proname",
    enum: ["", "A", "B"],
    default: () => "'A'",
  })
  setSendProname: "" | "A" | "B";

  @Column("enum", {
    name: "set_send_proweight",
    enum: ["", "DEFAULT", "EACH"],
    default: () => "'DEFAULT'",
  })
  setSendProweight: "" | "DEFAULT" | "EACH";

  @Column("mediumtext", { name: "weight_deli", nullable: true })
  weightDeli: string | null;

  @Column("int", { name: "weight_deli_price", default: () => "'0'" })
  weightDeliPrice: number;

  @Column("enum", {
    name: "weight_deli_unit",
    enum: ["", "none", "kg", "oz", "lb"],
    default: () => "'none'",
  })
  weightDeliUnit: "" | "none" | "kg" | "oz" | "lb";

  @Column("varchar", { name: "stop_order_msg", length: 255 })
  stopOrderMsg: string;

  @Column("mediumtext", { name: "setting_manual_reserve_emoney" })
  settingManualReserveEmoney: string;

  @Column("mediumint", {
    name: "subadmin_add_max",
    unsigned: true,
    default: () => "'0'",
  })
  subadminAddMax: number;

  @Column("varchar", { name: "main_display_save", nullable: true, length: 255 })
  mainDisplaySave: string | null;

  @Column("enum", {
    name: "easyftp_img_del",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  easyftpImgDel: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "transmit_free_sms",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  transmitFreeSms: "" | "Y" | "N";

  @Column("enum", {
    name: "use_ocb",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useOcb: "" | "Y" | "N";

  @Column("varchar", {
    name: "refund_restore_stock",
    length: 12,
    default: () => "'INTERNET'",
  })
  refundRestoreStock: string;

  @Column("set", {
    name: "use_return_deli_type",
    nullable: true,
    enum: ["CUSTOMER", "SHOP"],
    default: () => ["CUSTOMER"],
  })
  useReturnDeliType: ("CUSTOMER" | "SHOP")[] | null;

  @Column("enum", {
    name: "neogift",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  neogift: "" | "Y" | "N";

  @Column("mediumtext", { name: "neogift_set" })
  neogiftSet: string;

  @Column("enum", {
    name: "search_engine",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  searchEngine: "" | "Y" | "N";

  @Column("enum", {
    name: "search_engine_auto_complete",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  searchEngineAutoComplete: "" | "Y" | "N";

  @Column("enum", {
    name: "search_engine_finder",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  searchEngineFinder: "" | "Y" | "N";

  @Column("enum", {
    name: "interworkemail",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  interworkemail: "" | "Y" | "N";

  @Column("mediumtext", { name: "email_allow_config", nullable: true })
  emailAllowConfig: string | null;

  @Column("char", { name: "board_cnt", length: 1, default: () => "'N'" })
  boardCnt: string;

  @Column("char", { name: "present_use", length: 1, default: () => "'N'" })
  presentUse: string;

  @Column("tinyint", {
    name: "present_approval_enddate",
    width: 1,
    default: () => "'5'",
  })
  presentApprovalEnddate: boolean;

  @Column("char", { name: "reply_score", length: 1, default: () => "'N'" })
  replyScore: string;

  @Column("mediumtext", { name: "upper_category", nullable: true })
  upperCategory: string | null;
}
