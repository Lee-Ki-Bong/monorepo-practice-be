import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser", ["adminuser", "id"], { unique: true })
@Index("id", ["adminuser", "id"], {})
@Index("idx_auto_code", ["code"], {})
@Entity("provider", { schema: "makeshop" })
export class Provider {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "code", unsigned: true })
  code: number;

  @Column("varchar", { name: "id", length: 20 })
  id: string;

  @Column("varchar", { name: "password", nullable: true, length: 128 })
  password: string | null;

  @Column("enum", {
    name: "join_type",
    enum: ["", "PERSONAL", "COMPANY"],
    default: () => "'PERSONAL'",
  })
  joinType: "" | "PERSONAL" | "COMPANY";

  @Column("varchar", {
    name: "product",
    nullable: true,
    length: 7,
    default: () => "'NNNNNNN'",
  })
  product: string | null;

  @Column("varchar", {
    name: "orders",
    nullable: true,
    length: 7,
    default: () => "'NNNNNNN'",
  })
  orders: string | null;

  @Column("mediumint", {
    name: "percent",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  percent: number | null;

  @Column("mediumint", { name: "productnum", nullable: true, unsigned: true })
  productnum: number | null;

  @Column("int", { name: "adminnum", nullable: true, default: () => "'0'" })
  adminnum: number | null;

  @Column("bigint", {
    name: "delivery_charge",
    unsigned: true,
    default: () => "'0'",
  })
  deliveryCharge: string;

  @Column("enum", {
    name: "delivery_charge_type",
    enum: ["", "F", "Y", "M", "M2", "S", "W"],
    default: () => "'F'",
  })
  deliveryChargeType: "" | "F" | "Y" | "M" | "M2" | "S" | "W";

  @Column("varchar", { name: "applicant", nullable: true, length: 50 })
  applicant: string | null;

  @Column("varchar", { name: "app_email", nullable: true, length: 40 })
  appEmail: string | null;

  @Column("varchar", { name: "app_tel", nullable: true, length: 20 })
  appTel: string | null;

  @Column("varchar", { name: "app_fax", nullable: true, length: 20 })
  appFax: string | null;

  @Column("varchar", { name: "app_jiro", nullable: true, length: 100 })
  appJiro: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 40 })
  phone: string | null;

  @Column("varchar", { name: "mobile", nullable: true, length: 40 })
  mobile: string | null;

  @Column("varchar", { name: "company_name", nullable: true, length: 30 })
  companyName: string | null;

  @Column("varchar", { name: "company_num", nullable: true, length: 20 })
  companyNum: string | null;

  @Column("varchar", { name: "company_owner", nullable: true, length: 12 })
  companyOwner: string | null;

  @Column("varchar", { name: "company_post", nullable: true, length: 6 })
  companyPost: string | null;

  @Column("varchar", { name: "company_addr", nullable: true, length: 150 })
  companyAddr: string | null;

  @Column("varchar", { name: "company_biz", nullable: true, length: 50 })
  companyBiz: string | null;

  @Column("varchar", { name: "company_item", nullable: true, length: 50 })
  companyItem: string | null;

  @Column("datetime", {
    name: "join_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  joinDate: Date;

  @Column("datetime", {
    name: "logintime",
    default: () => "'0000-00-00 00:00:00'",
  })
  logintime: Date;

  @Column("varchar", { name: "ipaddress", nullable: true, length: 255 })
  ipaddress: string | null;

  @Column("varchar", { name: "enddate", nullable: true, length: 8 })
  enddate: string | null;

  @Column("varchar", { name: "tempkey", nullable: true, length: 32 })
  tempkey: string | null;

  @Column("enum", {
    name: "status",
    enum: ["", "NONE", "APPLY", "STOP"],
    default: () => "'NONE'",
  })
  status: "" | "NONE" | "APPLY" | "STOP";

  @Column("mediumtext", { name: "delivery_charge_condition", nullable: true })
  deliveryChargeCondition: string | null;

  @Column("set", {
    name: "product_auth",
    nullable: true,
    enum: [
      "insert",
      "update",
      "delete",
      "auth_ins",
      "icon_default",
      "ftp",
      "easyftp",
      "auth_upd",
      "icon_mine",
      "virtual",
      "sell_accept",
      "m_icon_default",
      "m_icon_mine",
      "excel_upload",
      "add_composition",
      "adddeli_fee",
      "reserve",
      "m_reserve",
      "point",
      "use_tax",
      "quick",
      "subs",
      "vat_type",
      "main_icon",
    ],
  })
  productAuth:
    | (
        | "insert"
        | "update"
        | "delete"
        | "auth_ins"
        | "icon_default"
        | "ftp"
        | "easyftp"
        | "auth_upd"
        | "icon_mine"
        | "virtual"
        | "sell_accept"
        | "m_icon_default"
        | "m_icon_mine"
        | "excel_upload"
        | "add_composition"
        | "adddeli_fee"
        | "reserve"
        | "m_reserve"
        | "point"
        | "use_tax"
        | "quick"
        | "subs"
        | "vat_type"
        | "main_icon"
      )[]
    | null;

  @Column("set", {
    name: "product_property_auth",
    nullable: true,
    enum: [
      "name",
      "sel_price",
      "consumer_price",
      "buy_price",
      "reserve",
      "point",
      "option",
      "m_name",
      "m_reserve",
      "virtual",
      "sell_accept",
      "ftp",
      "easyftp",
      "content",
      "m_content",
      "icon_default",
      "icon_mine",
      "m_icon_default",
      "m_icon_mine",
      "add_composition",
      "adddeli_fee",
      "hold_update_date",
      "use_tax",
      "quick",
      "sub_name",
      "event",
      "etc_info",
      "cate",
      "prd_img",
      "fitting_model",
      "common_info",
      "memo",
      "subs",
      "color",
      "vat_type",
      "common_info_event",
      "main_icon",
    ],
  })
  productPropertyAuth:
    | (
        | "name"
        | "sel_price"
        | "consumer_price"
        | "buy_price"
        | "reserve"
        | "point"
        | "option"
        | "m_name"
        | "m_reserve"
        | "virtual"
        | "sell_accept"
        | "ftp"
        | "easyftp"
        | "content"
        | "m_content"
        | "icon_default"
        | "icon_mine"
        | "m_icon_default"
        | "m_icon_mine"
        | "add_composition"
        | "adddeli_fee"
        | "hold_update_date"
        | "use_tax"
        | "quick"
        | "sub_name"
        | "event"
        | "etc_info"
        | "cate"
        | "prd_img"
        | "fitting_model"
        | "common_info"
        | "memo"
        | "subs"
        | "color"
        | "vat_type"
        | "common_info_event"
        | "main_icon"
      )[]
    | null;

  @Column("set", {
    name: "order_auth",
    nullable: true,
    enum: [
      "delivery",
      "cancel",
      "delete",
      "cardcancel",
      "update",
      "orderlog",
      "addinfo",
      "order_sms",
    ],
  })
  orderAuth:
    | (
        | "delivery"
        | "cancel"
        | "delete"
        | "cardcancel"
        | "update"
        | "orderlog"
        | "addinfo"
        | "order_sms"
      )[]
    | null;

  @Column("varchar", { name: "board_hname", nullable: true, length: 20 })
  boardHname: string | null;

  @Column("set", {
    name: "board_auth",
    nullable: true,
    enum: [
      "qna_comment",
      "qna_reply",
      "qna_sms",
      "review_comment",
      "review_reply",
      "review_sms",
      "power_review_comment",
      "power_review_reply",
      "power_review_sms",
    ],
  })
  boardAuth:
    | (
        | "qna_comment"
        | "qna_reply"
        | "qna_sms"
        | "review_comment"
        | "review_reply"
        | "review_sms"
        | "power_review_comment"
        | "power_review_reply"
        | "power_review_sms"
      )[]
    | null;

  @Column("set", {
    name: "coupon_auth",
    nullable: true,
    enum: [
      "make",
      "list",
      "issue_status",
      "use_status",
      "del_status",
      "statistic",
    ],
  })
  couponAuth:
    | (
        | "make"
        | "list"
        | "issue_status"
        | "use_status"
        | "del_status"
        | "statistic"
      )[]
    | null;

  @Column("enum", {
    name: "checkout_order_auth",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  checkoutOrderAuth: "" | "Y" | "N";

  @Column("enum", {
    name: "delivery_header_type",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  deliveryHeaderType: "" | "N" | "Y";

  @Column("mediumtext", { name: "pvd_deli_area", nullable: true })
  pvdDeliArea: string | null;

  @Column("enum", {
    name: "pvd_burden",
    nullable: true,
    enum: ["", "SHOP", "PROVIDER"],
    default: () => "'SHOP'",
  })
  pvdBurden: "" | "SHOP" | "PROVIDER" | null;

  @Column("enum", {
    name: "pvd_delivery",
    nullable: true,
    enum: ["", "SHOP", "PROVIDER"],
    default: () => "'SHOP'",
  })
  pvdDelivery: "" | "SHOP" | "PROVIDER" | null;

  @Column("enum", {
    name: "pvd_gift",
    nullable: true,
    enum: ["", "SHOP", "PROVIDER"],
    default: () => "'SHOP'",
  })
  pvdGift: "" | "SHOP" | "PROVIDER" | null;

  @Column("enum", {
    name: "pvd_cal_type",
    enum: ["", "MONTH", "MONTH_TWICE", "WEEK"],
    default: () => "'MONTH'",
  })
  pvdCalType: "" | "MONTH" | "MONTH_TWICE" | "WEEK";

  @Column("char", { name: "pvd_cal_period", length: 3, default: () => "'10'" })
  pvdCalPeriod: string;

  @Column("datetime", {
    name: "pvd_cal_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pvdCalDate: Date;

  @Column("datetime", {
    name: "password_chg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  passwordChgDate: Date;

  @Column("char", {
    name: "pvd_adddeli",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  pvdAdddeli: string | null;

  @Column("varchar", { name: "pvd_adddeli_time", nullable: true, length: 25 })
  pvdAdddeliTime: string | null;

  @Column("varchar", { name: "pvd_adddeli_week", nullable: true, length: 100 })
  pvdAdddeliWeek: string | null;

  @Column("enum", {
    name: "pvd_adddeli_type",
    nullable: true,
    enum: ["", "N", "H", "L"],
    default: () => "'N'",
  })
  pvdAdddeliType: "" | "N" | "H" | "L" | null;

  @Column("set", {
    name: "pvd_adddeli_path",
    enum: ["PC", "MOBILE", "APP"],
    default: () => ["PC", "MOBILE", "APP"],
  })
  pvdAdddeliPath: ("PC" | "MOBILE" | "APP")[];

  @Column("enum", {
    name: "pvd_adddeli_allfree",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  pvdAdddeliAllfree: "" | "N" | "Y";

  @Column("enum", {
    name: "pvd_adddeli_include",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  pvdAdddeliInclude: "" | "N" | "Y";

  @Column("int", { name: "pvd_delicom", unsigned: true, default: () => "'0'" })
  pvdDelicom: number;

  @Column("enum", {
    name: "pvd_quick",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  pvdQuick: "" | "N" | "Y";

  @Column("enum", {
    name: "pvd_quick_area_flag",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  pvdQuickAreaFlag: "" | "Y" | "N";

  @Column("mediumtext", { name: "pvd_quick_area", nullable: true })
  pvdQuickArea: string | null;

  @Column("mediumtext", { name: "pvd_quick_area_code", nullable: true })
  pvdQuickAreaCode: string | null;

  @Column("enum", {
    name: "pvd_quick_day_flag",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  pvdQuickDayFlag: "" | "Y" | "N";

  @Column("varchar", { name: "pvd_quick_day", nullable: true, length: 20 })
  pvdQuickDay: string | null;

  @Column("enum", {
    name: "pvd_quick_hourly_flag",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  pvdQuickHourlyFlag: "" | "Y" | "N";

  @Column("varchar", { name: "pvd_quick_hourly", nullable: true, length: 200 })
  pvdQuickHourly: string | null;

  @Column("enum", {
    name: "pvd_quick_price_type",
    enum: ["", "F", "C"],
    default: () => "'C'",
  })
  pvdQuickPriceType: "" | "F" | "C";

  @Column("int", {
    name: "pvd_quick_price",
    unsigned: true,
    default: () => "'0'",
  })
  pvdQuickPrice: number;

  @Column("enum", {
    name: "pvd_subs",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  pvdSubs: "" | "N" | "Y";

  @Column("set", {
    name: "pvd_subs_cycle_type",
    enum: ["WEEK", "MONTH", "FIX"],
    default: () => ["WEEK"],
  })
  pvdSubsCycleType: ("WEEK" | "MONTH" | "FIX")[];

  @Column("set", {
    name: "pvd_subs_cycle",
    enum: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  })
  pvdSubsCycle: (
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
  )[];

  @Column("set", {
    name: "pvd_subs_week",
    enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  })
  pvdSubsWeek: ("Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun")[];

  @Column("set", {
    name: "pvd_subs_month",
    enum: ["1", "2", "3", "4", "5", "6"],
  })
  pvdSubsMonth: ("1" | "2" | "3" | "4" | "5" | "6")[];

  @Column("set", {
    name: "pvd_subs_holiday",
    enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Holi"],
  })
  pvdSubsHoliday: (
    | "Mon"
    | "Tue"
    | "Wed"
    | "Thu"
    | "Fri"
    | "Sat"
    | "Sun"
    | "Holi"
  )[];

  @Column("enum", {
    name: "pvd_subs_holiday_set",
    enum: ["", "NEXT", "JUMP"],
    default: () => "'NEXT'",
  })
  pvdSubsHolidaySet: "" | "NEXT" | "JUMP";

  @Column("enum", {
    name: "pvd_agree_display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  pvdAgreeDisplay: "" | "Y" | "N";

  @Column("enum", {
    name: "pvd_today_delivery",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  pvdTodayDelivery: "" | "N" | "Y";

  @Column("smallint", {
    name: "pvd_today_delivery_time",
    unsigned: true,
    default: () => "'16'",
  })
  pvdTodayDeliveryTime: number;

  @Column("set", {
    name: "pvd_today_delivery_holiday",
    enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Holi"],
  })
  pvdTodayDeliveryHoliday: (
    | "Mon"
    | "Tue"
    | "Wed"
    | "Thu"
    | "Fri"
    | "Sat"
    | "Sun"
    | "Holi"
  )[];

  @Column("longtext", { name: "pvd_today_delivery_holiday_date" })
  pvdTodayDeliveryHolidayDate: string;

  @Column("varchar", { name: "sap_sale_code", length: 10 })
  sapSaleCode: string;

  @Column("varchar", { name: "sap_not_pay_cd", length: 10 })
  sapNotPayCd: string;

  @Column("varchar", { name: "sap_not_pay_setoff_cd", length: 10 })
  sapNotPaySetoffCd: string;
}
